import { differenceInDays, differenceInMonths, isAfter } from "date-fns";

import { STAGES } from "../data/stages";
import type { Stage } from "../data/stages";

export type DateType = "due_date" | "birth_date";

export type AgeResult = {
  type: DateType;
  value: number;
  unit: "week" | "month";
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
    const pregnancyWeeks = Math.floor(pregnancyDays / 7);

    if (pregnancyWeeks < 4 || pregnancyWeeks > 42) {
      return {
        type: dateType,
        value: pregnancyWeeks,
        unit: "week",
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
          item.unit === "week" &&
          pregnancyWeeks >= item.from &&
          pregnancyWeeks <= item.to,
      ) ?? null;

    return {
      type: dateType,
      value: pregnancyWeeks,
      unit: "week",
      stage,
      isValid: stage !== null,
      error: stage ? undefined : "Không tìm thấy giai đoạn phù hợp.",
    };
  }

  if (isAfter(inputDate, referenceDate)) {
    return {
      type: dateType,
      value: 0,
      unit: "month",
      stage: null,
      isValid: false,
      error: "Ngày sinh của bé không thể lớn hơn ngày hiện tại.",
    };
  }

  const babyMonths = differenceInMonths(referenceDate, inputDate);

  if (babyMonths < 0 || babyMonths > 48) {
    return {
      type: dateType,
      value: babyMonths,
      unit: "month",
      stage: null,
      isValid: false,
      error: "Mini Game hiện dành cho bé từ 0–48 tháng tuổi.",
    };
  }

  const stage =
    STAGES.find(
      (item) =>
        item.type === "baby" &&
        item.unit === "month" &&
        babyMonths >= item.from &&
        babyMonths <= item.to,
    ) ?? null;

  return {
    type: dateType,
    value: babyMonths,
    unit: "month",
    stage,
    isValid: stage !== null,
    error: stage ? undefined : "Không tìm thấy giai đoạn phù hợp.",
  };
}

export function formatAge(value: number, unit: "week" | "month"): string {
  if (unit === "week") {
    return `tuần thai ${value}`;
  }

  return `${value} tháng tuổi`;
}

export function getAgeLabel(value: number, unit: "week" | "month"): string {
  if (unit === "week") {
    return `Bé của mẹ đang ở ${formatAge(value, unit)}`;
  }

  return `Bé của mẹ đang ${formatAge(value, unit)}`;
}
