import { defineChain } from "viem"

export const arbitrumStylus = defineChain({
  id: 23011913,
  name: "Stylus Testnet	",
  network: "arbitrum-stylus",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://stylus-testnet.arbitrum.io/rpc"],
      webSocket: ["wss://stylus-testnet.arbitrum.io/rpc"],
    },
    public: {
      http: ["https://stylus-testnet.arbitrum.io/rpc"],
      webSocket: ["wss://stylus-testnet.arbitrum.io/rpc"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://stylus-testnet-explorer.arbitrum.io/",
    },
  },
  // contracts: {
  //   multicall3: {
  //     address: '0xcA11bde05977b3631167028862bE2a173976CA11',
  //     blockCreated: 5882,
  //   },
  // },
})
