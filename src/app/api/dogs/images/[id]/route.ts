import { dogsApiRequest } from "@/features/api/requests/dogs-api-request";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const data = await dogsApiRequest().get(`images/${id}`);

  return Response.json(data);
}
