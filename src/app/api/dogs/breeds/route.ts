import { dogsApiRequest } from "@/features/api/requests/dogs-api-request";

export async function GET() {
  const data = await dogsApiRequest().get("breeds");

  return Response.json(data);
}
