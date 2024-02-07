export async function GET() {
    let message = "Hello World"
    return Response.json( {message} )
}