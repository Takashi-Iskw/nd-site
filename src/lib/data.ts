// src/lib/data.ts
import { queryByUser } from "@/lib/dynamo";

export async function fetchLinkStatus(userId: string) {
  const res = await queryByUser({
    KeyConditionExpression: "userId = :u",
    ExpressionAttributeValues: { ":u": userId },
  });

  interface LinkItem { linked?: boolean }
    const items = res.Items as LinkItem[] | undefined;
    return items?.some((i) => i.linked) ?? false;
}
