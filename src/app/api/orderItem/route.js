import prisma from "../../../../lib/prisma";

export async function GET() {
  const res = await prisma.orderItem.findMany();
  const orderItem = await res;
  return Response.json({ orderItem });
}

export async function POST(request) {
  const orderItem = await request.json();

  try {
    const createOrderItem = await prisma.orderItem.createMany({
      data: orderItem
    });
    return Response.json(createOrderItem);
  } catch (error) {
    console.log("error creating orderItem", error);
    return Response("order item not created", {
      status: 500
    });
  }
}
