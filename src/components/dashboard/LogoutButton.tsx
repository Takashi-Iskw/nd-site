'use client'

import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    // TODO: 認証ライブラリ側でサインアウト処理
    // signOut()
    router.push('/')
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#dc143c] text-[#dc143c] hover:bg-[#dc143c] hover:text-black transition-colors duration-300 backdrop-blur-sm"
    >
      <LogOut size={18} />
      ログアウト
    </button>
  )
}