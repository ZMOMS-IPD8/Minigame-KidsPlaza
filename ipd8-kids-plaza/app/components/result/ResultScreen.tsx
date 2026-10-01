"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Gift,
  Heart,
  Play,
  Sparkles,
  Star,
} from "lucide-react";
import type { AgeResult } from "../../lib/calculateAge";

type ResultScreenProps = {
  result: AgeResult;
  onBack?: () => void;
  onRestart?: () => void;
};

export default function ResultScreen({
  result,
  onBack,
  onRestart,
}: ResultScreenProps) {
  const stage = result.stage;

  if (!stage) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fff8fb] px-6">
        <div className="w-full max-w-xl rounded-[32px] bg-white p-10 text-center shadow-xl">
          <h1 className="text-2xl font-bold text-slate-800">
            Chưa tìm thấy giai đoạn phù hợp
          </h1>

          <p className="mt-3 text-slate-500">
            Mẹ hãy kiểm tra lại thông tin ngày đã nhập nhé.
          </p>

          <button
            type="button"
            onClick={onBack}
            className="mt-7 rounded-2xl bg-pink-500 px-8 py-4 font-bold text-white"
          >
            NHẬP LẠI
          </button>
        </div>
      </main>
    );
  }

  const ageText =
    result.unit === "week"
      ? `Tuần thai ${result.value}`
      : `${result.value} tháng tuổi`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff7fb] via-white to-[#fff8e9] px-6 py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[6%] top-[12%] text-pink-200"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={44} />
        </motion.div>

        <motion.div
          className="absolute right-[8%] top-[18%] text-amber-200"
          animate={{
            scale: [1, 1.12, 1],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star size={42} fill="currentColor" />
        </motion.div>

        <motion.div
          className="absolute bottom-[12%] right-[10%] text-rose-200"
          animate={{
            y: [0, 10, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart size={48} fill="currentColor" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={onBack}
          className="mb-5 flex min-h-12 items-center gap-2 rounded-xl px-4 text-sm font-semibold text-slate-500 transition-colors hover:bg-white hover:text-pink-500"
        >
          <ArrowLeft size={20} />
          Nhập lại thông tin
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-[32px] border border-white/80 bg-white/95 shadow-2xl shadow-pink-100/60 backdrop-blur"
        >
          <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 px-7 py-8 text-center text-white md:px-10">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.15,
                duration: 0.6,
                type: "spring",
              }}
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20"
            >
              <Sparkles size={32} />
            </motion.div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-100">
              Kết quả khám phá
            </p>

            <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Bé đang ở {ageText}
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-pink-50 md:text-base">
              Mỗi giai đoạn đều có một điều thật đặc biệt đang diễn ra trong
              hành trình lớn lên của con.
            </p>
          </div>

          <div className="grid gap-7 p-6 md:grid-cols-[1fr_280px] md:p-9">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl bg-slate-50 p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-100 text-pink-500">
                    <Heart size={22} fill="currentColor" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-pink-500">
                      Điều bé đang phát triển
                    </p>

                    <h2 className="mt-1 text-xl font-extrabold text-slate-800">
                      {stage.development}
                    </h2>
                  </div>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  {stage.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-5 rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 to-rose-50 p-6"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-pink-500">
                  Lời chúc dành cho bé
                </p>

                <h2 className="mt-3 text-2xl font-extrabold leading-tight text-slate-800">
                  “{stage.wish}”
                </h2>
              </motion.div>

              {stage.extraContent && stage.extraContent.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="mt-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-pink-500">
                    Nội dung khám phá
                  </p>

                  <div className="mt-4 grid gap-3">
                    {stage.extraContent.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3"
                      >
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-pink-500"
                        />

                        <span className="text-sm leading-6 text-slate-600">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {stage.clip && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                  className="mt-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                      <Play size={20} fill="currentColor" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                        Clip khám phá
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-700">
                        {stage.clip.title}
                      </p>
                    </div>
                  </div>

                  {stage.clip.url && (
                    <a
                      href={stage.clip.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-white"
                    >
                      XEM CLIP
                      <Play size={16} fill="currentColor" />
                    </a>
                  )}
                </motion.div>
              )}
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Dấu ấn của bé
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.4, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 140,
                  damping: 10,
                }}
                className="relative mt-5"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.25, 0.45, 0.25],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-pink-300 blur-2xl"
                />

                <div className="relative flex h-48 w-48 rotate-[-5deg] flex-col items-center justify-center rounded-full border-[7px] border-dashed border-pink-300 bg-gradient-to-br from-pink-50 to-amber-50 shadow-xl">
                  <motion.div
                    animate={{ rotate: [0, 4, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg shadow-pink-200"
                  >
                    <Heart size={38} fill="currentColor" />
                  </motion.div>

                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-pink-500">
                    STAMP
                  </p>

                  <p className="text-4xl font-black text-slate-800">
                    #{stage.stampNumber}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-500"
              >
                <Check size={18} className="text-green-500" />
                Dấu ấn đã được mở khóa
              </motion.div>
            </div>
          </div>

          <div className="border-t border-slate-100 bg-slate-50/80 px-6 py-7 md:px-9">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600"
              >
                <Gift size={28} />
              </motion.div>

              <h3 className="mt-4 text-xl font-extrabold text-slate-800">
                Cùng lưu lại dấu ấn đặc biệt này nhé!
              </h3>

              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Mẹ hãy viết lời chúc dành cho bé, lấy stamp tương ứng và dán lên
                “Bức tường tuần tuổi của con” để nhận CDB Card cùng ưu đãi
                300.000đ.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onRestart}
                  className="min-h-14 rounded-2xl border-2 border-pink-200 bg-white px-8 text-base font-bold text-pink-500"
                >
                  KHÁM PHÁ LẠI
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="min-h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-8 text-base font-bold text-white shadow-lg shadow-pink-200/60"
                >
                  NHẬN QUÀ TẠI QUẦY
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
