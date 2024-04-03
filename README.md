# Arbitrum Starter Kit

Welcome to the Arbitrum Starter Kit! This starter kit provides you with a solid foundation for building decentralized applications (dApps) on the Arbitrum network. It comes pre-configured with Next.js, Wagmi v2, Viem, RainbowKit, TypeScript, Tailwind CSS, and Shadcn, enabling you to quickly start developing your dApp.

## Getting Started

To get started with the Arbitrum Starter Kit, follow these steps:

1. Clone the repository or click on the Use this template button:

   ```
   https://github.com/HAPPYS1NGH/arbitrum-starter-kit
   ```

2. Navigate to the project directory:

   ```
   cd arbitrum-starter-kit
   ```

3. Create a `.env` or `.env.local` file in the root directory and obtain the WalletConnect project ID from [WalletConnect](https://cloud.walletconnect.com/). Add the following line to your `.env` or `.env.local` file:

   ```
   WALLET_CONNECT_PROJECT_ID=<your_wallet_connect_project_id>
   ```

4. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

5. Start the development server:

   ```
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

6. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Interacting with Contracts

This starter kit provides hooks from Wagmi v2 for interacting with smart contracts on the Arbitrum network. You can use these hooks to read and write data to contracts.

## Directory Structure

The project follows a standard directory structure for a Next.js application. Here's an overview of the directory structure:

```
├── README.md
├── components.json
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── arbitrum.svg
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── read
│   │   │   └── page.tsx
│   │   └── write
│   │       └── page.tsx
│   ├── components
│   │   ├── shared
│   │   │   └── Navbar.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       └── sonner.tsx
│   ├── containers
│   │   ├── home
│   │   │   └── Profile.tsx
│   │   ├── read
│   │   │   └── ReadContract.tsx
│   │   └── write
│   │       └── WriteContract.tsx
│   ├── lib
│   │   └── utils.ts
│   ├── providers
│   │   ├── Layout.tsx
│   │   └── Web3Provider.tsx
│   └── utils
│       └── config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Support

If you encounter any issues or have questions regarding the Arbitrum Starter Kit, please don't hesitate to reach out to us:

- Twitter: https://twitter.com/happys1ngh
- GitHub Issues: [arbitrum-starter-kit](https://github.com/HAPPYS1NGH/arbitrum-starter-kit/issues)

Happy coding! 🚀
