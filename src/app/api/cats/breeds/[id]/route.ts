import { catsApiRequest } from "@/features/api/requests/cats-api-request";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const data = await catsApiRequest().get(`breeds/${id}`);

  return Response.json(data);
}
