"use client";

import { WriteContract } from "@/containers/contract/WriteContract";
import { ReadContract } from "@/containers/contract/ReadContract";

import { useAccount } from "wagmi";
function ContractExample() {
  const { isConnected } = useAccount();
  return (
    <div className="h-screen -mt-20 flex flex-col gap-4 items-center justify-center text-center text-2xl">
      {isConnected ? (
        <>
          <ReadContract />
          <WriteContract />
        </>
      ) : (
        <div className="  ">Please Connect the Wallet</div>
      )}
    </div>
  );
}

export default ContractExample;
