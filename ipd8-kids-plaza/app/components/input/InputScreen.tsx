"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import { calculateAge, type DateType } from "../../lib/calculateAge";

type InputScreenProps = {
  onBack?: () => void;
  onResult?: (result: ReturnType<typeof calculateAge>) => void;
};

function formatDateInput(value: string) {
  const numbers = value.replace(/\D/g, "").slice(0, 8);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 4) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
  }

  return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4)}`;
}

function parseDateInput(value: string): Date | null {
  const match = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

  if (!match) {
    return null;
  }

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);

  const date = new Date(year, month - 1, day);

  // Kiểm tra ngày có thực sự hợp lệ hay không.
  // Ví dụ: 31/02/2026 sẽ bị loại.
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

export default function InputScreen({ onBack, onResult }: InputScreenProps) {
  const [dateType, setDateType] = useState<DateType>("due_date");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleDateChange = (value: string) => {
    setDate(formatDateInput(value));
    setError("");
  };

  const handleSubmit = () => {
    if (!date) {
      setError("Mẹ vui lòng nhập ngày nhé.");
      return;
    }

    if (date.length !== 10) {
      setError("Mẹ vui lòng nhập đúng định dạng DD/MM/YYYY.");
      return;
    }

    const inputDate = parseDateInput(date);

    if (!inputDate) {
      setError("Ngày mẹ nhập chưa đúng. Mẹ kiểm tra lại nhé.");
      return;
    }

    const result = calculateAge(inputDate, dateType, new Date());

    if (!result.isValid) {
      setError(result.error ?? "Thông tin chưa hợp lệ.");
      return;
    }

    setError("");
    onResult?.(result);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff7fb] via-white to-[#eef9ff] px-6 py-8">
      <div className="mx-auto w-full max-w-3xl">
        {/* Back */}
        <motion.button
          type="button"
          onClick={onBack}
          whileTap={{ scale: 0.96 }}
          className="mb-5 flex min-h-12 items-center gap-2 rounded-xl px-4 text-sm font-semibold text-[#204060] transition-colors hover:bg-white"
        >
          <ArrowLeft size={20} />
          Quay lại
        </motion.button>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex justify-center"
        >
          <img
            src="/logo-ipd8.png"
            alt="IPD8 - Trung tâm 1.000 ngày vàng đầu đời"
            className="h-auto w-[220px] object-contain md:w-[280px]"
          />
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
          }}
          className="rounded-[32px] border border-white bg-white/95 p-7 shadow-xl shadow-[#204060]/10 backdrop-blur md:p-10"
        >
          {/* Heading */}
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f00070]/10 text-[#f00070]">
              <Sparkles size={32} />
            </div>

            <h1 className="mt-5 text-3xl font-extrabold text-[#204060]">
              Bé đang ở giai đoạn nào?
            </h1>

            <p className="mt-3 text-slate-500">
              Mẹ chọn thông tin phù hợp để khám phá hành trình của bé nhé.
            </p>
          </div>

          {/* Date type */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {/* Due date */}
            <button
              type="button"
              onClick={() => {
                setDateType("due_date");
                setError("");
              }}
              className={`rounded-2xl border-2 p-5 text-left transition ${
                dateType === "due_date"
                  ? "border-[#f00070] bg-[#fff0f7]"
                  : "border-slate-200 bg-white"
              }`}
            >
              <CalendarDays className="text-[#f00070]" size={28} />

              <p className="mt-3 font-extrabold text-[#204060]">Ngày dự sinh</p>

              <p className="mt-1 text-sm text-slate-500">Mẹ đang mang thai</p>
            </button>

            {/* Birth date */}
            <button
              type="button"
              onClick={() => {
                setDateType("birth_date");
                setError("");
              }}
              className={`rounded-2xl border-2 p-5 text-left transition ${
                dateType === "birth_date"
                  ? "border-[#00a0f0] bg-[#eaf8ff]"
                  : "border-slate-200 bg-white"
              }`}
            >
              <Baby className="text-[#00a0f0]" size={28} />

              <p className="mt-3 font-extrabold text-[#204060]">
                Ngày sinh của bé
              </p>

              <p className="mt-1 text-sm text-slate-500">Bé đã chào đời</p>
            </button>
          </div>

          {/* Date input */}
          <div className="mt-7">
            <label className="mb-3 block text-sm font-bold text-[#204060]">
              {dateType === "due_date"
                ? "Ngày dự sinh của bé"
                : "Ngày sinh của bé"}
            </label>

            <div className="relative">
              <CalendarDays
                size={22}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#f00070]"
              />

              <input
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={date}
                onChange={(event) => handleDateChange(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSubmit();
                  }
                }}
                placeholder="DD/MM/YYYY"
                maxLength={10}
                className="h-14 w-full rounded-2xl border-2 border-slate-200 bg-white pl-12 pr-4 text-base font-semibold tracking-wide text-[#204060] outline-none transition placeholder:text-slate-300 focus:border-[#f00070] focus:ring-4 focus:ring-[#f00070]/10"
              />
            </div>

            <p className="mt-2 text-xs text-slate-400">
              Nhập theo định dạng ngày/tháng/năm, ví dụ: 26/09/2026
            </p>
          </div>

          {/* Error */}
          {error && (
            <motion.p
              initial={{
                opacity: 0,
                y: -5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-500"
            >
              {error}
            </motion.p>
          )}

          {/* Submit */}
          <motion.button
            type="button"
            onClick={handleSubmit}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 16px 32px rgba(240, 0, 112, 0.2)",
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="mt-7 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#f00070] to-[#00a0f0] px-6 text-base font-extrabold text-white shadow-lg shadow-[#f00070]/20"
          >
            KHÁM PHÁ NGAY
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}
