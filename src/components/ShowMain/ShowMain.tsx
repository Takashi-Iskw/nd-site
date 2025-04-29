"use client";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

// Next.js の SSR で video ライブラリが落ちないよう dynamic import
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

/**
 * ShowMain – 斜めグリーンベルト & 無限スクロール文字 + 左説明 / 右メディア
 *
 * Props
 *  - backdropLabel : ベルトを流れる大文字
 *  - title         : 見出し
 *  - description   : 説明文
 *  - mediaSrc      : 画像 or mp4 のパス (public/ 配下 or URL)
 *  - isVideo       : true なら <video> / ReactPlayer を使う
 *  - minH          : セクション全体の最小高さ（Tailwind クラス値）
 */
export default function ShowMain({
  backdropLabel,
  title,
  description,
  mediaSrc,
  isVideo = true,
  minH = "min-h-[640px] md:min-h-[800px]", // デフォルト高さ
}: {
  backdropLabel: string;
  title: string;
  description: string;
  mediaSrc: string;
  isVideo?: boolean;
  /** Tailwind の高さクラス値 (例: "h-[800px]") */
  minH?: string;
}) {
  /* ===== Scroll-in View Detection ===== */
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const cardCtrl = useAnimation();

  /* ===== When in view => animate fade‑in ===== */
  if (inView) {
    cardCtrl.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    });
  }

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={cardCtrl}
      className={`relative isolate mx-auto my-8 w-full max-w-6xl overflow-hidden rounded-2xl bg-[#0e151e] p-12 shadow-xl ${minH}`}
    >
      {/* === Diagonal Belt === */}
      <div className="pointer-events-none absolute -top-16 left-6 -z-10 h-48 w-[150%] -rotate-6 origin-left bg-[#00FF7F]">
        {/* Marquee */}
        <motion.div
          className="whitespace-nowrap text-[22vw] font-black leading-none text-black/90"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          {Array.from({ length: 4 })
            .map(() => backdropLabel.toUpperCase())
            .join("    ")}
        </motion.div>
      </div>

      {/* === Content === */}
      <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-2">
        {/* Text */}
        <div className="flex flex-col justify-center gap-4 text-white">
          <h2 className="text-5xl font-extrabold">{title}</h2>
          {/* 改行保持 */}
          <p className="whitespace-pre-line text-lg leading-relaxed text-gray-300">{description}</p>
          <Link href="/mods" className="group relative mt-8 inline-block overflow-hidden rounded-lg border border-[#00FF7F] px-8 py-3 font-semibold text-[#00FF7F] transition-colors">
            <span className="relative z-10 transition-colors group-hover:text-black">Modの詳細</span>
            <span className="absolute inset-0 translate-y-full bg-[#00FF7F] transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
        </div>


        {/* Media */}
        <div className="flex items-center justify-center">
          {isVideo ? (
            <ReactPlayer
              url={mediaSrc}
              playing
              loop
              muted
              width="100%"
              height="100%"
              style={{ borderRadius: "0.75rem", overflow: "hidden" }}
            />
          ) : (
            <Image
              src={mediaSrc}
              alt={title}
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />
          )}
        </div>
      </div>
    </motion.section>
  );
}

