"use client";

import { motion } from "framer-motion";
import { Check, Heart, PenLine, Sparkles, Star } from "lucide-react";
import type { AgeResult } from "../../lib/calculateAge";

type ResultScreenProps = {
  result: AgeResult;
  onRestart?: () => void;
};

export default function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const stage = result.stage;

  if (!stage) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fff9fc] px-6">
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
            onClick={onRestart}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-7 rounded-2xl bg-[#D90064] px-8 py-4 font-bold text-white shadow-lg shadow-[#D90064]/20"
          >
            KHÁM PHÁ LẠI
          </motion.button>
        </div>
      </main>
    );
  }

  const ageText = `Ngày thứ ${result.value} trong hành trình 1.000 ngày`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff9fc] via-white to-[#eef9ff] px-4 py-3 md:px-5 md:py-4">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[4%] top-[8%] text-[#f5d3e2]"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={34} strokeWidth={1.5} />
        </motion.div>

        <motion.div
          className="absolute right-[5%] top-[10%] text-[#a4e3fa]"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star size={32} fill="currentColor" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          className="absolute bottom-[7%] right-[5%] text-[#f5dce7]"
          animate={{
            y: [0, 8, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart size={38} fill="currentColor" strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-24px)] w-full max-w-6xl flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative shrink-0 overflow-hidden rounded-[24px] shadow-lg shadow-[#204060]/10"
        >
          {/* 50% Pink - 50% Blue with soft transition */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#E04F88_0%,#E56A99_28%,#C5B4D1_55%,#55BCE9_78%,#00A0F0_100%)]" />
          <div className="relative flex items-center justify-center gap-4 px-5 py-4 text-white md:gap-6 md:px-7 md:py-4">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
              }}
              src="/logo-ipd8.png"
              alt="IPD8"
              className="h-auto w-[120px] object-contain md:w-[145px]"
            />

            <div className="h-10 w-px bg-white/30" />

            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 md:text-xs">
                Kết quả khám phá
              </p>

              <h1 className="mt-0.5 text-xl font-extrabold leading-tight md:text-2xl">
                Bé đang ở <span className="text-white">{ageText}</span>
              </h1>

              <p className="mt-1 hidden text-xs text-white/80 md:block">
                Mỗi giai đoạn đều có một điều thật đặc biệt đang diễn ra trong
                hành trình lớn lên của con.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="grid flex-1 gap-4 py-4 md:grid-cols-[1fr_320px] md:gap-5 md:py-4">
          {/* LEFT */}
          <div className="flex min-h-0 flex-col gap-3">
            {/* Development */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-[22px] bg-[#eef4f9] p-4 md:p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D90064]/10 text-[#D90064]">
                  <Heart size={20} fill="currentColor" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#D90064]">
                    Điều bé đang phát triển
                  </p>

                  <h2 className="mt-0.5 text-lg font-extrabold text-[#204060] md:text-xl">
                    {stage.development}
                  </h2>
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600 md:text-[15px]">
                {stage.description}
              </p>
            </motion.div>

            {/* Wish */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-[22px] border border-[#D90064]/10 bg-gradient-to-br from-[#fff5fa] to-[#edfaff] p-4 md:p-5"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#D90064]">
                Lời chúc dành cho bé
              </p>

              <h2 className="mt-2 text-xl font-extrabold leading-tight text-[#204060] md:text-2xl">
                “{stage.wish}”
              </h2>
            </motion.div>

            {/* Extra content */}
            {stage.extraContent && stage.extraContent.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="min-h-0 flex-1 rounded-[22px] border border-slate-100 bg-white p-4 shadow-sm md:p-5"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#D90064]">
                  Nội dung khám phá
                </p>

                <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
                  {stage.extraContent.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 rounded-xl bg-[#eef4f9] px-3 py-2"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[#00A0F0]"
                      />

                      <span className="text-xs leading-5 text-slate-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex min-h-0 flex-col"
          >
            <div className="flex h-full flex-col rounded-[22px] border border-[#D90064]/10 bg-gradient-to-br from-[#fff5fa] via-white to-[#edfaff] p-4 shadow-sm md:p-5">
              {/* Title */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D90064]/10 text-[#D90064]">
                  <PenLine size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#D90064]">
                    Một món quà dành cho mẹ
                  </p>

                  <h2 className="mt-0.5 text-lg font-extrabold text-[#204060]">
                    Giấy điều ước
                  </h2>
                </div>
              </div>

              {/* Wish paper */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.45,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 120,
                }}
                className="relative mt-3 flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg shadow-[#204060]/10"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                    opacity: [0.06, 0.12, 0.06],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-[#D90064] blur-xl"
                />

                <img
                  src="/giay-dieu-uoc.png"
                  alt="Giấy điều ước"
                  className="relative z-10 max-h-[300px] w-full object-contain md:max-h-[320px]"
                />
              </motion.div>

              {/* Description */}
              <div className="mt-3 rounded-xl bg-white/80 px-3 py-2.5 text-center">
                <p className="text-xs font-bold leading-5 text-[#204060]">
                  Mẹ hãy viết một điều ước thật đặc biệt dành cho bé nhé!
                </p>

                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  Mẹ sẽ nhận tờ giấy điều ước bản thật tại quầy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="shrink-0 rounded-[20px] border-t border-slate-100 bg-[#eef4f9]/80 px-4 py-3"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D90064]/10 text-[#D90064]">
                <PenLine size={18} />
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-[#204060] md:text-base">
                  Viết một điều ước cho bé nhé!
                </h3>

                <p className="hidden text-xs text-slate-500 md:block">
                  Tờ giấy điều ước sẽ được trao cho mẹ tại quầy.
                </p>
              </div>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onRestart}
              className="flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D90064] to-[#00A0F0] px-5 text-xs font-extrabold text-white shadow-md shadow-[#D90064]/15 md:px-7 md:text-sm"
            >
              KHÁM PHÁ LẠI
            </motion.button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
