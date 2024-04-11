"use client"
import * as React from "react"
import { useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi"
import { toast } from "sonner"

import { counterAbi } from "@/constants/abi"

export function WriteContract() {
  const { data: hash, isPending, writeContract } = useWriteContract()

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const tokenId = formData.get("value") as string
    console.log(tokenId)
    writeContract({
      address: "0x3e9C748E9DBB864Ee4dE65FA16343Cde878DF7D0",
      abi: counterAbi,
      functionName: "setNumber",
      args: [BigInt(tokenId)],
    })
  }

  const {
    isLoading: isConfirming,
    error,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed) {
      toast.success("Transaction Successful")
    }
    if (error) {
      toast.error("Transaction Failed")
    }
  }, [isConfirmed, error])

  return (
    <form onSubmit={submit}>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input name="value" placeholder="5" required />
        <Button disabled={isPending || isConfirming} type="submit">
          {isPending ? "Confirming..." : "Set Number"}
        </Button>
      </div>
    </form>
  )
}
