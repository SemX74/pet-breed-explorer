import { catsApiRequest } from "@/features/api/requests/cats-api-request";

export async function GET() {
  const data = await catsApiRequest().get("breeds");

  return Response.json(data);
}
