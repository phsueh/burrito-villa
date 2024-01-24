import prisma from "../../../../../lib/prisma";

export async function GET() {
  const { id } = Request.query.id
  console.log(Request)

  try {
    const order = await prisma.order.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!order) {
      return new Response("order not found", {
        status: 404,
      })
    }
    return new Response("order found", {
        status: 200,
      })
  } catch (error) {
    console.error("Error fetching order:", error);
    return new Response("internal server error", {
        status: 500, 
    })
  }
}