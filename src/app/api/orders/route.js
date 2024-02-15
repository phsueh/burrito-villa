import prisma from "../../../../lib/prisma";

export async function GET() {
  const res = await prisma.order.findMany({
    include: {
      items: true,
    },
  });
  const order = await res;
  return Response.json({ order });
}

export async function POST(request) {
  const order = await request.json();
  const { orderItem, totalCost } = order;
  
  try {
    const createOrder = await prisma.order.create({
        data: {
          totalCost: totalCost,
        },
      })
      .then((orderData) => {
        const orderId = orderData.id;
        order.orderItem.map((items) => (items.orderId = orderId));
        const createOrderItem = fetch("http://localhost:3000/api/orderItem", {
          method: "POST",
          body: JSON.stringify(
            order.orderItem
          ),
        });
        return orderId
      });

    return Response.json( {order : createOrder} );

  } catch (error) {
    console.log("error creating order", error);
    return new Response("order not created", {
      status: 500,
    });
  }
}