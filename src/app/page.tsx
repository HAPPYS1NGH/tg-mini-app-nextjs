"use client"

// import { Image } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="p-24">
      <h1 className="text-center text-3xl p-20 font-bold lg:mb-32 ">
        Welcome to Arbitrum Starter Kit
        {/* <Image src='/arbitrum.svg' className="w-20 h-20 inline-block" /> */}
      </h1>
      <div className="grid xl:grid-cols-4 grid-cols-1 lg:grid-cols-2 space-x-3 ">
        <div className="p-4 mx-4 hover:bg-gray-100 hover:border-b-2 rounded-lg">
          <Link
            href="https://docs.arbitrum.io/welcome/get-started"
            target="_blank"
          >
            <h1 className="text-2xl font-bold">Arbitrum -&gt;</h1>
            <p className="text-sm text-gray-700">
              Learn about the formidable Layer 2 and how to develop
            </p>
          </Link>
        </div>
        <div className="p-4 mx-4 hover:bg-gray-100 hover:border-b-2 rounded-lg">
          <Link href="https://wagmi.sh/react/getting-started" target="_blank">
            <h1 className="text-2xl font-bold">Wagmi -&gt;</h1>
            <p className="text-sm text-gray-700">
              Type Safe, Extensible, and Modular by design.
            </p>
          </Link>
        </div>{" "}
        <div className="p-4 mx-4 hover:bg-gray-100 hover:border-b-2 rounded-lg">
          <Link href="https://ui.shadcn.com/docs" target="_blank">
            <h1 className="text-2xl font-bold">Shadcn -&gt;</h1>
            <p className="text-sm text-gray-700">
              Beautifully designed components that you can copy and paste into
              your apps.
            </p>
          </Link>
        </div>{" "}
        <div className="p-4 mx-4 hover:bg-gray-100 hover:border-b-2 rounded-lg">
          <Link href="https://arbitrum-faucet.vercel.app/" target="_blank">
            <h1 className="text-2xl font-bold">Faucet -&gt;</h1>
            <p className="text-sm text-gray-700">
              Get the faucets to start deploying the app to the actual testnet.
            </p>
          </Link>
        </div>
      </div>
    </main>
  )
}
