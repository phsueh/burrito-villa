import prisma from "../../../../lib/prisma"

export async function GET() {
    const res = await prisma.order.findMany({
      include: {
        items: true,
      }
    })
    const order = await res
    return Response.json({ order })
  }

export async function POST(request) {
  const order = await request.json();
  const {orderItem, totalCost} = order; 

  try {
    const createOrder = await prisma.order.create({
      data: {
        items: orderItem,
        totalCost: totalCost
      }
    });
    // return new Response("order created", {
    //   status: 201,
    // });
    const order = await createOrder;
    return Response.json("order created",{ order })
  } catch (error) {
    console.log("error creating order", error)
    return new Response("order not created", {
      status: 500, 
    });
  }

}

  