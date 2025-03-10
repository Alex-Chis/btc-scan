import prisma from "@/lib/db";

export async function GET(request: Request) {
  const days = await prisma.day.findMany();
  return Response.json(days);
}
