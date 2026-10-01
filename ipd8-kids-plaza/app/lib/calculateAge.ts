import { differenceInDays, isAfter } from "date-fns";

import { STAGES } from "../data/stages";
import type { Stage } from "../data/stages";

export type DateType = "due_date" | "birth_date";

export type AgeResult = {
  type: DateType;
  value: number;
  unit: "day";
  stage: Stage | null;
  isValid: boolean;
  error?: string;
};

export function calculateAge(
  inputDate: Date,
  dateType: DateType,
  referenceDate: Date = new Date(),
): AgeResult {
  if (dateType === "due_date") {
    const daysUntilDue = differenceInDays(inputDate, referenceDate);
    const pregnancyDays = 280 - daysUntilDue;

    if (pregnancyDays < 28 || pregnancyDays > 280) {
      return {
        type: dateType,
        value: pregnancyDays,
        unit: "day",
        stage: null,
        isValid: false,
        error:
          "Ngày dự sinh hiện không nằm trong phạm vi trải nghiệm của Mini Game.",
      };
    }

    const stage =
      STAGES.find(
        (item) =>
          item.type === "pregnancy" &&
          item.unit === "day" &&
          pregnancyDays >= item.from &&
          pregnancyDays <= item.to,
      ) ?? null;

    return {
      type: dateType,
      value: pregnancyDays,
      unit: "day",
      stage,
      isValid: stage !== null,
      error: stage ? undefined : "Không tìm thấy giai đoạn phù hợp.",
    };
  }

  if (isAfter(inputDate, referenceDate)) {
    return {
      type: dateType,
      value: 0,
      unit: "day",
      stage: null,
      isValid: false,
      error: "Ngày sinh của bé không thể lớn hơn ngày hiện tại.",
    };
  }

  const babyDays = differenceInDays(referenceDate, inputDate);
  const journeyDay = 281 + babyDays;

  if (journeyDay < 281 || journeyDay > 1000) {
    return {
      type: dateType,
      value: journeyDay,
      unit: "day",
      stage: null,
      isValid: false,
      error: "Mini Game hiện dành cho hành trình 1.000 ngày đầu đời của bé.",
    };
  }

  const stage =
    STAGES.find(
      (item) =>
        item.type === "baby" &&
        item.unit === "day" &&
        journeyDay >= item.from &&
        journeyDay <= item.to,
    ) ?? null;

  return {
    type: dateType,
    value: journeyDay,
    unit: "day",
    stage,
    isValid: stage !== null,
    error: stage ? undefined : "Không tìm thấy giai đoạn phù hợp.",
  };
}

export function formatAge(value: number): string {
  return `ngày thứ ${value} trong hành trình 1.000 ngày`;
}

export function getAgeLabel(value: number): string {
  return `Bé của mẹ đang ở ${formatAge(value)}`;
}
