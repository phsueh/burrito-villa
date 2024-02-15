import prisma from "../../../../lib/prisma"

export async function GET() {
    const res = await prisma.burrito.findMany()
    const burritos = await res
    return Response.json({ burritos })
  }