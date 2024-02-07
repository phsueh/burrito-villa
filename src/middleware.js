import { NextResponse } from "next/server";

export function middleware(req, event) {
    let message = "do you see me?"
    return NextResponse.json( {message} )
}

export const config = {
    matcher: '/api/play',
}

// look into waitUntil and nextFetchEvent
// post an order and return with order id
// then post again to database with order 