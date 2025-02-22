"use client"
import { HeroSection } from "@/components/fragments/hero-section";
import { Navbar } from "@/components/fragments/navbar";
import { useState } from "react";
import { ResultSection } from "@/components/fragments/result-section";
export interface IPalette {
  hex: string, name: string
}

export default function Home() {
  const [pallete, setPallete] = useState<IPalette[]>(defaultColor);

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row items-end p-5 h-full">
        <HeroSection isShowFullColor={true} pallete={pallete} setPallete={setPallete} />
        <ResultSection pallete={pallete} />
      </div>
    </div>
  );

}

const defaultColor = [
  {
    hex: "#F95E06",
    name: "Blaze Orange"
  },
  {
    hex: "#FB7E37",
    name: "Crusta"
  },
  {
    hex: "#FD9E68",
    name: "Atomic Tangerine"
  },
  {
    hex: "#FEBE9A",
    name: "Peach Orange"
  },
  {
    hex: "#FFDFCC",
    name: "Tuft Bush"
  }
]