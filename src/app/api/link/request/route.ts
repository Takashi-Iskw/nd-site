// app/api/link/request/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { putItem } from "@/lib/dynamo"; // ラッパー作っとけ

export async function POST(req: NextRequest) {
  // const session = await getServerSession();
  const session = await getServerSession(authOptions); 
  console.log("SESSION in api/link/request:", session)
  console.log("LINK_TABLE:", process.env.LINK_TABLE);

  if (!session) return NextResponse.json({ error: "unauth" }, { status: 401 });

  const { mcId } = await req.json();           // フォームで入力された MC ユーザー名
  if (!mcId) return NextResponse.json({ error: "noMcId" }, { status: 400 });

  // 6 桁乱数
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  // 15 min 後に TTL
  const expiresAt = Math.floor(Date.now() / 1000) + 15 * 60;

  const res = await putItem({
    TableName: process.env.LINK_TABLE!,
    Item: {
      code,
      userId: session.user.id,
      mcId,
      expiresAt,
      linked: false,
    },
  });

  console.log("PutItem result:", res);

  return NextResponse.json({ code });
}
