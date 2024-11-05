import { dogsApiRequest } from "@/features/api/requests/dogs-api-request";
import { NextResponse } from "next/server";

export async function GET(
  _: NextResponse,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const data = await dogsApiRequest().get(`breeds/${id}`);

  return Response.json(data);
}
