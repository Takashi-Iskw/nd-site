// src/app/(auth)/link/page.tsx
import LinkPageClient from '@/components/LinkPageClient/LinkPageClient';
// import { div } from 'framer-motion/client';

export const dynamic = 'force-dynamic';   // ★ これが有効になる

export default function LinkPage() {
  return (
  <div className="
       w-full                /* 画面幅いっぱい */
       max-w-screen-xl       /* 最大幅を1200pxくらいに */
       mx-auto               /* 中央寄せ */
       grid
       grid-rows-[900px_2fr_20px]
       min-h-screen
       p-8 pb-20 gap-16
       sm:p-20
     ">
    <LinkPageClient />
  </div>
  );
}
