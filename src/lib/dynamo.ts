import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    PutCommand,
    GetCommand,
    UpdateCommand,
    QueryCommand,            // ★追加
  } from "@aws-sdk/lib-dynamodb";
  import type {
    PutCommandInput,
    GetCommandInput,
    UpdateCommandInput,
    QueryCommandInput,       // ★型も追加
  } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.REGION,
  ...(process.env.NODE_ENV === "development" && {
    endpoint: "http://localhost:8000",
    credentials: { accessKeyId: "dummy", secretAccessKey: "dummy" },
  }),
});

export const ddb = DynamoDBDocumentClient.from(client);

export const putItem = (params: PutCommandInput) =>
  ddb.send(new PutCommand(params));

export const getItem = async <T = unknown>(params: GetCommandInput) =>
  (await ddb.send(new GetCommand(params))).Item as T | undefined;

export const updateItem = (params: UpdateCommandInput) =>
  ddb.send(new UpdateCommand(params));

// export const queryByUser = (userId: string) =>
//     ddb.send(new QueryCommand({
//       TableName: process.env.LINK_TABLE!,
//       IndexName: "userId-code-index",
//       KeyConditionExpression: "userId = :u",
//       ExpressionAttributeValues: { ":u": userId },
//     }));

export const queryByUser = (
    params: Omit<QueryCommandInput, "TableName" | "IndexName">
  ) =>
    ddb.send(
      new QueryCommand({
        TableName: process.env.LINK_TABLE!,
        IndexName: "userId-code-index",
        ...params,
      })
    );
    