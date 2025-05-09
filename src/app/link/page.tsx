// src/app/(auth)/link/page.tsx
import LinkPageClient from '@/components/LinkPageClient/LinkPageClient';

export const dynamic = 'force-dynamic';   // ★ これが有効になる

export default function LinkPage() {
  return <LinkPageClient />;
}
