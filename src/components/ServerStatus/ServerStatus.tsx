'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

/**
 * ServerStatus – 地球＋宇宙の背景込みで使えるサーバー稼働状況パネル。
 *
 * Props:
 * - bgSrc     : 背景画像のパス (public/ 内や外部 URL)
 * - status    : 'online' | 'offline'
 * - address   : 表示するサーバーアドレス
 */
export type ServerStatusProps = {
  bgSrc: string
  status: 'online' | 'offline'
  address: string
}

export default function ServerStatus({ bgSrc, status, address }: ServerStatusProps) {
  const isOnline = status === 'online'

  return (
    // <div className="relative w-full h-full overflow-hidden text-[#00FF7F] font-bold select-none">
    <div className="w-full h-full overflow-hidden text-[#00FF7F] font-bold select-none">
      {/* ───────── 背景 ───────── */}
      <Image
        src={bgSrc}
        alt="Earth & space background"
        fill
        priority
        className="object-cover object-center pointer-events-none"
      />
      {/* 半透明ブラック＋ブラーで文字を読みやすくするなら ↓ ラップを追加 */}
      {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" /> */}

      {/* ───────── タイトル ───────── */}
      <motion.h1
        className="absolute top-80 left-1/2 -translate-x-1/2 text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_0_12px_#00FF7F] tracking-widest"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Server Status
      </motion.h1>

      {/* ───────── レーザーライン ─────────
      <motion.div
        className="absolute top-[140px] left-0 w-full h-[2px] bg-[#00FF7F]/60 blur-sm"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        style={{ transformOrigin: 'center' }}
      /> */}

      {/* ───────── ステータスカード ───────── */}
      <motion.div
        className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 rounded-xl border border-[#00FF7F]/70 bg-black/30 backdrop-blur-md px-8 py-6 flex flex-col gap-5 w-[260px] sm:w-[320px] shadow-[0_0_24px_#00FF7F55]"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
      >
        {/* ── ステータス行 ── */}
        <div className="flex items-center gap-4">
          {/* 点滅ドット */}
          <span className="relative flex h-4 w-4">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isOnline ? 'bg-[#00FF7F]' : 'bg-red-500'} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-4 w-4 ${isOnline ? 'bg-[#00FF7F]' : 'bg-red-500'}`}></span>
          </span>
          <span className="text-2xl tracking-wide">
            {isOnline ? 'Active' : 'Stopped'}
          </span>
        </div>

        <hr className="border-[#00FF7F]/25" />

        {/* ── アドレス行 ── */}
        <div className="flex flex-col">
          <span className="text-sm tracking-widest">Server Address</span>
          <span className="text-3xl md:text-4xl font-mono mt-1">{address}</span>
        </div>
      </motion.div>
    </div>
  )
}
