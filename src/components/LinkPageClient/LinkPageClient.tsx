// src/components/LinkPageClient.tsx
'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LinkPageClient() {
  const { data: session } = useSession();
  const router = useRouter();
  const [mcId, setMcId] = useState('');
  const [code, setCode] = useState<string | null>(null);

  if (!session) return <p>Loading...</p>;

  const requestCode = async () => {
    const res = await fetch('/api/link/request', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mcId }),
    });
    if (res.ok) {
      const { code } = await res.json();
      setCode(code);
    }
  };
  
  return (
    <div className="flex flex-col gap-8 max-w-md mx-auto py-20">
      <h1 className="text-2xl font-bold">Minecraft アカウント連携</h1>

      {code ? (
        <>
          <p className="text-lg">
            <span className="font-mono text-3xl">{code}</span> を
            <br />
            サーバー内で <code>/link {code}</code> と入力
          </p>
          <button
            className="btn"
            onClick={() => router.push("/dashboard")}
          >
            ダッシュボードへ戻る
          </button>
        </>
      ) : (
        <>
          <label className="flex flex-col gap-2">
            <span>Minecraft ユーザー名</span>
            <input
              className="input"
              value={mcId}
              onChange={(e) => setMcId(e.target.value)}
            />
          </label>
          <button className="btn" onClick={requestCode}>
            認証コードを発行
          </button>
        </>
      )}
    </div>
  );
}
