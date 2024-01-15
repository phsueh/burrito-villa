import prisma from "../../../../lib/prisma"

export async function GET() {
    const res = await prisma.orderItem.findMany()
    const orderItem = await res
    return Response.json({ orderItem })
  }

export async function POST(req) {
    const { burrito, quantity, order, orderId } = req.json()

    const result = await prisma.orderItem.create({
        data: {
            burrito,
            quantity,
            order,
            orderId
        }
    });
    res.json(result)
}