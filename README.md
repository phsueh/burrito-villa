This is Burrito Villa! A [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Approach and reflections

I choose Next.js because I wanted to use a framework that included front-end, back-end, and database capabilites. 

However, I discovered the "convenient" aspect of the framework had some draw backs such as route query. I ran into unfamiliar concepts and learned a lot, but fell short of implementing all the features. Before this challenge, I developed APIs and backend applications using Sequelize, Ruby on Rails, and Spring Boot. This challenge gave me a chance to see areas of improvement when spinning up an new application quickly.

Thanks for reading! 

Paul

## Getting Started

This project uses Prisma and Postgres. Both front-end and back-end are deployed on Vercel.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Second, download dependencies

## Testing Endpoints

### GET Burritos
- Sending a GET request to [api/burrito](https://burrito-villa.vercel.app/api/burrito) will return a list of burritos. 

### POST Order Items
- Using Postman or Insomnia a POST request can be sent to [api/orderItem](https://burrito-villa.vercel.app/api/orderItem) with the below payload

 ```
{
	"burrito": "chicken burrito",
	"quantity": 1,
	"orderId": 2
}
 ``` 

 Unfortunately, current implemenation is incomplete as the database will not persist item unless an order is present. Which is why an 'orderId' needs to be included in payload.  

### GET Order[id]
- Unable to implement endpoint

## Feature update
- Updating DB schema