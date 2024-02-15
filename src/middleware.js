import { NextResponse } from "next/server";

export function middleware(req, event) {
    let message = "do you see me?"
    return NextResponse.json( {message} )
}

export const config = {
    matcher: '/api/play',
}