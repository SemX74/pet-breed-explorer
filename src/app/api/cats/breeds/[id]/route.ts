import { catsApiRequest } from "@/features/api/requests/cats-api-request";
import { NextResponse } from "next/server";

export async function GET(
  _: NextResponse,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const data = await catsApiRequest().get(`breeds/${id}`);

  return Response.json(data);
}
