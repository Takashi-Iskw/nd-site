// app/login/page.tsx
'use client';

// import PixelCard from '@/components/PixelCard/PixelCard';
import dynamic from 'next/dynamic';
import { signIn } from 'next-auth/react';

const PixelCard = dynamic(
  () => import('@/components/PixelCard/PixelCard'),
  { ssr: false }      //  ← これで絶対サーバー側に来ない
);

export default function LoginPage() {

  return (
    <div className="w-full max-w-screen-xl mx-auto grid grid-rows-[900px_2fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        {/* ボタン扱いにするため <button> でラップ */}
        <button
          onClick={() =>
            signIn('cognito', {
              // Hosted UI をスキップして Google へ直行
              authorizationParams: { identity_provider: 'Google' },
              callbackUrl: '/',          // ログイン後に戻す URL
            })
          }
        >
          <PixelCard
            variant="blue"
            gap={8}
            speed={30}
            colors="#e0f2fe,#7dd3fc,#0ea5e9"
            className="relative flex items-center justify-center w-80 h-80 cursor-pointer select-none"
            noFocus
          >
            <span className="text-3xl font-bold tracking-widest pointer-events-none">
              LOGIN
            </span>
          </PixelCard>
        </button>
        <button onClick={() => signIn('google')}>Google 直ログイン</button>

      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" />
    </div>
  );
}

