"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Baby, CalendarDays, Heart } from "lucide-react";
import { calculateAge, type DateType } from "../../lib/calculateAge";

type InputScreenProps = {
  onBack?: () => void;
  onResult?: (result: ReturnType<typeof calculateAge>) => void;
};

export default function InputScreen({ onBack, onResult }: InputScreenProps) {
  const [dateType, setDateType] = useState<DateType>("due_date");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!date) {
      setError("Mẹ vui lòng chọn ngày nhé.");
      return;
    }

    const inputDate = new Date(`${date}T00:00:00`);

    const result = calculateAge(inputDate, dateType, new Date());

    if (!result.isValid) {
      setError(result.error ?? "Thông tin chưa hợp lệ.");
      return;
    }

    setError("");
    onResult?.(result);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff7fb] via-white to-[#fff8e9] px-6 py-8">
      <div className="mx-auto w-full max-w-3xl">
        <motion.button
          type="button"
          onClick={onBack}
          whileTap={{ scale: 0.96 }}
          className="mb-6 flex min-h-12 items-center gap-2 rounded-xl px-4 text-sm font-semibold text-slate-500"
        >
          <ArrowLeft size={20} />
          Quay lại
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[32px] bg-white p-7 shadow-xl md:p-10"
        >
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-pink-500">
              <Heart size={32} fill="currentColor" />
            </div>

            <h1 className="mt-5 text-3xl font-extrabold text-slate-800">
              Bé đang ở giai đoạn nào?
            </h1>

            <p className="mt-3 text-slate-500">
              Mẹ chọn thông tin phù hợp để khám phá dấu ấn của bé nhé.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <button
              type="button"
              onClick={() => {
                setDateType("due_date");
                setError("");
              }}
              className={`rounded-2xl border-2 p-5 text-left transition ${
                dateType === "due_date"
                  ? "border-pink-500 bg-pink-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <CalendarDays className="text-pink-500" size={28} />

              <p className="mt-3 font-extrabold text-slate-800">Ngày dự sinh</p>

              <p className="mt-1 text-sm text-slate-500">Mẹ đang mang thai</p>
            </button>

            <button
              type="button"
              onClick={() => {
                setDateType("birth_date");
                setError("");
              }}
              className={`rounded-2xl border-2 p-5 text-left transition ${
                dateType === "birth_date"
                  ? "border-pink-500 bg-pink-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <Baby className="text-pink-500" size={28} />

              <p className="mt-3 font-extrabold text-slate-800">
                Ngày sinh của bé
              </p>

              <p className="mt-1 text-sm text-slate-500">Bé đã chào đời</p>
            </button>
          </div>

          <div className="mt-7">
            <label className="mb-3 block text-sm font-bold text-slate-700">
              {dateType === "due_date"
                ? "Ngày dự sinh của bé"
                : "Ngày sinh của bé"}
            </label>

            <input
              type="date"
              value={date}
              onChange={(event) => {
                setDate(event.target.value);
                setError("");
              }}
              className="h-14 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 text-base font-semibold text-slate-700 outline-none transition focus:border-pink-500"
            />
          </div>

          {error && (
            <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-500">
              {error}
            </p>
          )}

          <motion.button
            type="button"
            onClick={handleSubmit}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-7 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 text-base font-extrabold text-white shadow-lg shadow-pink-200/60"
          >
            KHÁM PHÁ NGAY
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}
