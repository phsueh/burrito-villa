import prisma from "../../../../../lib/prisma";

export async function GET(request, { params }) {
  const orderNumber = parseInt(params.id);

  try {
    const order = await prisma.order.findUnique({
      where: {
        id: orderNumber
      },
      include: {
        items: true 
      }
    });

    if (!order) {
      return Response.json( ["order not found"] );
    }

    return Response.json( {order} );
  } catch (error) {
    console.error("Error fetching order:", error);
    return newResponse("internal server error", {
        status: 500
    });
  }
}