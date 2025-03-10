"use client";

import { montserrat } from "@/app/fonts/fonts";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center mx-2 py-2 text-white">
        <Button
          className="hover:bg-white hover:text-blue-950"
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </Button>
        <h2 className={`${montserrat.className} text-2xl`}>Btc Scanner</h2>
        <Image src="/avatar.webp" width={40} height={40} alt="avatar" />
      </div>
      <div className="text-white">
        {isOpen && (
          <h2 className="text-center text-2xl hover:outline">Item 1</h2>
        )}
      </div>
    </>
  );
}
