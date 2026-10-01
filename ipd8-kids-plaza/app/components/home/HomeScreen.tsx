"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react";

type HomeScreenProps = {
  onStart: () => void;
};

export default function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff7fb] via-white to-[#fff8e9] px-8 py-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[8%] top-[14%] text-pink-200"
          animate={{
            y: [0, -14, 0],
            rotate: [0, 8, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={48} strokeWidth={1.5} />
        </motion.div>

        <motion.div
          className="absolute right-[9%] top-[18%] text-amber-200"
          animate={{
            y: [0, 12, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star size={42} fill="currentColor" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          className="absolute bottom-[15%] right-[12%] text-rose-200"
          animate={{
            y: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart size={54} fill="currentColor" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          className="absolute bottom-[18%] left-[10%] h-5 w-5 rounded-full bg-amber-200"
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.6,
            type: "spring",
            stiffness: 160,
          }}
          className="mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 scale-125 rounded-full bg-pink-100/60 blur-xl" />

            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-8 border-white bg-gradient-to-br from-pink-400 to-rose-500 shadow-xl shadow-pink-200/60">
              <Heart
                size={52}
                className="text-white"
                fill="currentColor"
                strokeWidth={1.8}
              />
            </div>

            <motion.div
              className="absolute -right-2 -top-1 rounded-full bg-amber-300 p-2 text-white shadow-md"
              animate={{
                rotate: [0, 12, -8, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={18} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur"
        >
          <Sparkles size={18} className="text-pink-500" />
          <span className="text-sm font-bold tracking-[0.18em] text-pink-500">
            IPD8 × KIDS PLAZA
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.55 }}
          className="text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-800 sm:text-5xl md:text-6xl"
        >
          CON BẠN ĐANG Ở
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
            NGÀY TUỔI THỨ MẤY?
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-slate-500 md:text-xl"
        >
          Cùng khám phá điều đặc biệt mà bé đang phát triển trong giai đoạn này
          nhé!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-400"
        >
          <span className="h-px w-10 bg-pink-200" />
          <span>Chỉ mất vài giây để khám phá</span>
          <span className="h-px w-10 bg-pink-200" />
        </motion.div>

        <motion.button
          type="button"
          onClick={onStart}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 18px 40px rgba(236, 72, 153, 0.25)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          className="group mt-8 flex min-h-[68px] min-w-[300px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-10 text-lg font-bold tracking-wide text-white shadow-xl shadow-pink-200/70"
        >
          <span>BẮT ĐẦU KHÁM PHÁ</span>

          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight size={24} strokeWidth={2.5} />
          </motion.span>
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-5 text-xs text-slate-400"
        >
          Trải nghiệm tương tác dành cho mẹ và bé
        </motion.p>
      </motion.section>
    </main>
  );
}
