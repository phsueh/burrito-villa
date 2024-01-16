'use client'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          check out the Burrito Villa GitHub repo&nbsp;
          <code className="font-mono font-bold underline">
            <a href="https://github.com/phsueh/burrito-villa/" target="_blank">here</a>
            </code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a className="font-mono font-bold underline"   href="https://paulhsueh-dev.vercel.app/" target="_blank">
            By Paul Hsueh
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center">

      <div className="grid grid-cols-2 gap-8 p-8 bg-white rounded-lg shadow-md">
    

    <div className="col-span-1 flex flex-col items-center justify-center">
      <p className="text-2xl font-bold mb-4">Menu</p>
      <p>feature incomplete</p>


      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Order</button>
    </div>

    <div className="col-span-1 flex flex-col items-center justify-center">
      <p className="text-2xl font-bold mb-4">Order</p>
      <p>feature incomplete</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded">Submit Order</button>
    </div>

  </div>
        
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="http://burrito-villa.vercel.app/api/orderItem"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-300 hover:bg-green-100 hover:dark:border-green-700 hover:dark:bg-green-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            api/orderItem{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Returns a list of all ordered items. After clicking "add to order" a new order time is added to an ongoing order. 
          </p>
        </a>

        <a
          href="http://burrito-villa.vercel.app/api/burrito"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-300 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            api/burrito{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Returns a list of burrito products
          </p>
        </a>

        <a
          href="http://burrito-villa.vercel.app/api/orders"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-300 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            api/orders{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Returns a list of orders
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-red-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            api/orders/id{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Endpoint not successfully implemented within time limit
          </p>
        </a>
      </div>
    </main>
  )
}
