// app/api/link/confirm/route.ts
import { NextRequest, NextResponse } from "next/server";
import { updateItem, getItem } from "@/lib/dynamo";

export async function POST(req: NextRequest) {
  const { code, mcUUID } = await req.json();
  if (!code || !mcUUID) return NextResponse.json({ error: "bad" }, { status: 400 });

  // const item = await getItem({ TableName: process.env.LINK_TABLE!, Key: { code } });
  const item = await getItem<{ linked?: boolean; expiresAt?: number }>({
    TableName: process.env.LINK_TABLE!,
    Key: { code },
  });
  
  if (!item || item.linked || (item.expiresAt ?? 0) < Date.now() / 1000) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // 重複リンクを防ぐチェックは省略。必要なら mcUUID GSI 見ろ
  await updateItem({
    TableName: process.env.LINK_TABLE!,
    Key: { code },
    UpdateExpression: "SET linked = :t, mcUUID = :u",
    ExpressionAttributeValues: { ":t": true, ":u": mcUUID },
  });

  return NextResponse.json({ ok: true });
}
