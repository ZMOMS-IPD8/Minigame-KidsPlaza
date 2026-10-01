"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  BadgeCheck,
  Check,
  CreditCard,
  Heart,
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
          <img
            src="/logo-ipd8.png"
            alt="IPD8"
            className="mx-auto mb-8 h-auto w-[220px] object-contain"
          />

          <h1 className="text-2xl font-bold text-[#204060]">
            Chưa tìm thấy giai đoạn phù hợp
          </h1>

          <p className="mt-3 text-slate-500">
            Mẹ hãy kiểm tra lại thông tin ngày đã nhập nhé.
          </p>

          <motion.button
            type="button"
            onClick={onBack}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-7 rounded-2xl bg-[#F00070] px-8 py-4 font-bold text-white shadow-lg shadow-[#F00070]/20"
          >
            NHẬP LẠI
          </motion.button>
        </div>
      </main>
    );
  }

  const ageText =
    result.unit === "week"
      ? `Tuần thai ${result.value}`
      : `${result.value} tháng tuổi`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff7fb] via-white to-[#eef9ff] px-6 py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[6%] top-[12%] text-[#f7b8d5]"
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
          <Sparkles size={44} strokeWidth={1.5} />
        </motion.div>

        <motion.div
          className="absolute right-[8%] top-[18%] text-[#8bdcff]"
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
          <Star size={42} fill="currentColor" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          className="absolute bottom-[12%] right-[10%] text-[#ffd2e8]"
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
          <Heart size={48} fill="currentColor" strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={onBack}
          className="mb-5 flex min-h-12 items-center gap-2 rounded-xl px-4 text-sm font-semibold text-[#204060] transition-colors hover:bg-white"
        >
          <ArrowLeft size={20} />
          Nhập lại thông tin
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="overflow-hidden rounded-[32px] border border-white/80 bg-white/95 shadow-2xl shadow-[#204060]/10 backdrop-blur"
        >
          <div className="bg-gradient-to-r from-[#F00070] via-[#F00080] to-[#00A0F0] px-7 py-8 text-center text-white md:px-10">
            <motion.img
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.6,
                type: "spring",
              }}
              src="/logo-ipd8.png"
              alt="IPD8 - Trung tâm 1.000 ngày vàng đầu đời"
              className="mx-auto mb-5 h-auto w-[190px] object-contain md:w-[230px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                Kết quả khám phá
              </p>

              <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">
                Bé đang ở {ageText}
              </h1>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/85 md:text-base">
                Mỗi giai đoạn đều có một điều thật đặc biệt đang diễn ra trong
                hành trình lớn lên của con.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-7 p-6 md:grid-cols-[1fr_280px] md:p-9">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl bg-[#eef4f9] p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F00070]/10 text-[#F00070]">
                    <Heart size={22} fill="currentColor" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#F00070]">
                      Điều bé đang phát triển
                    </p>

                    <h2 className="mt-1 text-xl font-extrabold text-[#204060]">
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
                className="mt-5 rounded-3xl border border-[#F00070]/15 bg-gradient-to-br from-[#fff0f7] to-[#eaf8ff] p-6"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-[#F00070]">
                  Lời chúc dành cho bé
                </p>

                <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#204060]">
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
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F00070]">
                    Nội dung khám phá
                  </p>

                  <div className="mt-4 grid gap-3">
                    {stage.extraContent.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-[#eef4f9] px-4 py-3"
                      >
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-[#00A0F0]"
                        />

                        <span className="text-sm leading-6 text-slate-600">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#204060]/50">
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
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-[#F00070]/25 blur-2xl"
                />

                <div className="relative flex h-48 w-48 rotate-[-5deg] flex-col items-center justify-center rounded-full border-[7px] border-dashed border-[#F00070]/50 bg-gradient-to-br from-[#fff0f7] to-[#eaf8ff] shadow-xl">
                  <motion.div
                    animate={{ rotate: [0, 4, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#F00070] to-[#00A0F0] text-white shadow-lg shadow-[#F00070]/20"
                  >
                    <Heart size={38} fill="currentColor" />
                  </motion.div>

                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#F00070]">
                    STAMP
                  </p>

                  <p className="text-4xl font-black text-[#204060]">
                    #{stage.stampNumber}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#204060]/70"
              >
                <BadgeCheck size={18} className="text-[#00A0F0]" />
                Dấu ấn đã được mở khóa
              </motion.div>
            </div>
          </div>

          <div className="border-t border-slate-100 bg-[#eef4f9]/70 px-6 py-7 md:px-9">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F00070]/10 text-[#F00070]"
              >
                <Heart size={28} fill="currentColor" />
              </motion.div>

              <h3 className="mt-4 text-xl font-extrabold text-[#204060]">
                Dấu ấn đặc biệt của bé đã được mở khóa!
              </h3>

              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Mẹ hãy viết lời chúc dành cho bé và lấy stamp{" "}
                <span className="font-bold text-[#F00070]">
                  #{stage.stampNumber}
                </span>{" "}
                để dán lên “Bức tường tuần tuổi của con”.
              </p>

              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                onClick={onRestart}
                className="mt-5 block w-full text-sm font-semibold text-[#204060]/60 transition-colors hover:text-[#F00070]"
              >
                Khám phá lại
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
