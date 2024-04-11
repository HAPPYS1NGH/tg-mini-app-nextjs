"use client"
import { useReadContract } from "wagmi"

import { counterAbi } from "@/constants/abi"
import { counterAddress } from "@/constants"

export function ReadContract() {
  const {
    data: counter,
    status,
    isLoading,
    error,
  } = useReadContract({
    abi: counterAbi,
    address: counterAddress,
    functionName: "number",
  })
  console.log(counter, status, isLoading, error)

  return (
    <div>
      {isLoading ? <div>Loading</div> : <p>Counter: {counter?.toString()}</p>}
    </div>
  )
}
