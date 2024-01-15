import prisma from "../../../../lib/prisma"

export async function GET() {
    const res = await prisma.order.findMany()
    const orders = await res
    return Response.json({ orders })
  }

