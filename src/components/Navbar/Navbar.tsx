'use client'

import Link from 'next/link'
import { useState } from 'react'

/**
 * 共通ヘッダー (透明ナビバー)
 *
 * - ロゴ: 左上 (root へのリンク)
 * - メニュー: Mods / Server / Media / Blog / Dashboard|Login
 * - Mods はホバーでドロップダウン
 * - ホバー時に文字周囲 & ナビバー下辺に黄緑レーザー枠 (0.5s)
 * - `username` props があればログイン済みとして表示
 */
export type NavbarProps = {
  username?: string | null
}

const mods = [
  { name: 'Resistance', href: '/mods/resistance' },
  { name: 'Pirates', href: '/mods/pirates' },
]

export default function Navbar({ username }: NavbarProps) {
  const [modsOpen, setModsOpen] = useState(false)
  const [laser, setLaser] = useState(false) // true にすると下線レーザーを表示

  return (
    <header
      className={
        `fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-0 h-20 ` +
        `backdrop-blur-md transition-colors` +
        ` before:absolute before:inset-0 before:-z-10 before:bg-black/0` + // 透明 (クリック透過防止用)
        ` after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-[#00FF7F] ` +
        ` after:origin-left after:transform after:transition-transform after:duration-500 ` +
        (laser ? 'after:scale-x-100' : 'after:scale-x-0')
      }
    >
      {/* ─ Logo ─ */}
      <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80">
        <img src="/newbie_dynamics_seal_bgremoved.png" alt="Logo" className="h-16 w-16" />
      </Link>

      {/* ─ Menu ─ */}
      <nav className="relative">
        <ul className="flex gap-8 text-white uppercase tracking-wide">
          <NavItem
            label="Mods"
            href="#"
            onHover={setLaser}
            onClick={() => setModsOpen((v) => !v)}
          />
          <NavItem label="Server" href="/server" onHover={setLaser} />
          <NavItem label="Media" href="/media" onHover={setLaser} />
          <NavItem label="Blog" href="/blog" onHover={setLaser} />
          {username ? (
            <NavItem label={username} href="/dashboard" onHover={setLaser} />
          ) : (
            <NavItem label="Login" href="/login" onHover={setLaser} />
          )}
        </ul>

        {/* ─ Mods dropdown ─ */}
        {modsOpen && (
          <ul
            onMouseLeave={() => setModsOpen(false)}
            className="absolute left-0 mt-2 flex flex-col rounded-lg bg-black/80 backdrop-blur-lg ring-1 ring-lime-400/50 shadow-lg"
          >
            {mods.map((m) => (
              <li key={m.name}>
                <Link
                  href={m.href}
                  className="block whitespace-nowrap px-6 py-3 text-white hover:bg-lime-500/10"
                >
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

/* ──────────────────────────────────────────────── */

interface NavItemProps {
  label: string
  href: string
  onHover: (state: boolean) => void
  onClick?: () => void
}

function NavItem({ label, href, onHover, onClick }: NavItemProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <li
      className="relative "
      onMouseEnter={() => {
        setHovered(true)
        onHover(true)
      }}
      onMouseLeave={() => {
        setHovered(false)
        onHover(false)
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        className={
            `block px-2 py-1 ` +
            (hovered
                ? 'bg-[#00FF7F] text-black'   /* 黄緑背景＋文字色黒 */
                : '')
        }
      >
        {/* テキスト & 枠線エフェクト */}
        <span
          className={
            `relative inline-block transition-colors duration-300 ` +
            (hovered ? 'text-00FF7F' : '')
          }
        >
          {label}
          {/* ★ レーザー枠 */}
          <span
            // className={
            // `pointer-events-none absolute inset-0 rounded-md ring-4 ring-[#00FF7F] ` +
            //   `transition-[clip-path] duration-500 ` +
            //   (hovered
            //     ? 'clip-path-inset-0'
            //     : 'clip-path-inset-[calc(100%_-_2px)_0_0_0]')
            // }
            className={
                `transition-[clip-path] duration-500 ` +
                (hovered
                ? 'clip-path-inset-0'
                : 'clip-path-inset-[calc(100%_-_2px)_0_0_0]')
            }
          />
        </span>
      </Link>
    </li>
  )
}

/*
────────────────── Tailwind 拡張例 ──────────────────
※ tailwind.config.js に次を追加して、clip-path のユーティリティを有効化すると
   上記レーザー枠のアニメーションが滑らかになります。

module.exports = {
  theme: {
    extend: {
      clipPath: {
        'inset-0': 'inset(0 0 0 0)',
        'inset-[calc(100%_-_2px)_0_0_0]': 'inset(calc(100% - 2px) 0 0 0)',
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
}
*/