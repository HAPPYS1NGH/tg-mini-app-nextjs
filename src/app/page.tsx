"use client";

import { useUtils } from "@telegram-apps/sdk-react";
import Link from "next/link";

export default function Home() {
  const utils = useUtils();
  return (
    <main className="">
      <h1 className="text-center text-2xl p-5 font-bold  ">
        Welcome to Mini App Starter Kit
      </h1>
      <div className="grid xl:grid-cols-4 grid-cols-1 lg:grid-cols-2  gap-4 ">
        <div className="p-4 mx-4 hover:bg-gray-200 w-fit bg-gray-100 hover:border-b-2 rounded-lg">
          <Link
            href="https://docs.arbitrum.io/welcome/get-started"
            target="_blank"
          >
            <h1 className="text-xl font-bold">Arbitrum -&gt;</h1>
            <p className="text-sm text-gray-700">
              Learn about the formidable Layer 2 and how to develop
            </p>
          </Link>
        </div>
        <div className="p-4 mx-4 hover:bg-gray-200 w-fit bg-gray-100 hover:border-b-2 rounded-lg">
          <Link href="https://wagmi.sh/react/getting-started" target="_blank">
            <h1 className="text-xl font-bold">Wagmi -&gt;</h1>
            <p className="text-sm text-gray-700">
              Type Safe, Extensible, and Modular by design.
            </p>
          </Link>
        </div>{" "}
        <div className="p-4 mx-4 hover:bg-gray-200 w-fit bg-gray-100 hover:border-b-2 rounded-lg">
          <Link href="https://ui.shadcn.com/docs" target="_blank">
            <h1 className="text-xl font-bold">Shadcn -&gt;</h1>
            <p className="text-sm text-gray-700">
              Beautifully designed components that you use in your apps.
            </p>
          </Link>
        </div>{" "}
        <div className="p-4 mx-4 hover:bg-gray-200 w-fit bg-gray-100 hover:border-b-2 rounded-lg">
          <Link href="https://arbitrum-faucet.vercel.app/" target="_blank">
            <h1 className="text-xl font-bold">Faucet -&gt;</h1>
            <p className="text-sm text-gray-700">
              Get the faucets to start deploying the app to the actual testnet.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
