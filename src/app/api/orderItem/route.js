import prisma from "../../../../lib/prisma";

export async function GET() {
  const res = await prisma.orderItem.findMany();
  const orderItem = await res;
  return Response.json({ orderItem });
}

export async function POST(request) {
  const orderItem = await request.json();
  const {burrito, quantity, orderId} = orderItem
  try { 
    const createOrderItem = await prisma.orderItem.create({
      data: {
        burrito: burrito,
        quanity: quantity,
        orderId: orderId
      },
    });
    return new Response("order item created", {
      status: 201,
    });
  } catch (error) {
    console.log("error creating orderItem", error)
    return new Response("order item not created", {
      status: 500,
    });
  }
}
