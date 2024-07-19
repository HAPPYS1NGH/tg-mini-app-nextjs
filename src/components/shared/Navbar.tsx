import React from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <nav className="flex items-center mx-8 my-4">
      <div className="flex space-x-4 ">
        <Link href="/" className="text-gray-900 hover:text-gray-700">
          Home
        </Link>
        <Link href="/contract" className="text-gray-900 hover:text-gray-700">
          Contract
        </Link>
      </div>
      <div className="ml-auto flex items-center ">
        <ConnectButton accountStatus={"avatar"} chainStatus={"icon"} />
      </div>
    </nav>
  );
};

export default Navbar;
