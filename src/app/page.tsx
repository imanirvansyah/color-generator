"use client"
import { Button } from "@/components/atoms/button";
import { Navbar } from "@/components/fragments/navbar";
import { getColors } from "@/services/colors";
import { useEffect, useState } from "react";
import { rgbToHex } from "@/helpers/colors";



export default function Home() {
  const [color, setColor] = useState<string[]>([])

  const fetchColor = async () => {
    const colors = await getColors();
    setColor([])
    colors.map((color: number[]) => setColor(prev => [...prev, rgbToHex(color[0], color[1], color[2])]));
  }
  const handleClick = () => {
    fetchColor();
  }
  useEffect(() => {
    fetchColor();
  }, []);

  if (color.length > 0) {
    return (
      <div className="w-screen h-screen" style={{
        backgroundColor: color[4]
      }}>
        <Navbar onClick={handleClick} color={color[0]} />
        <div className="container mx-auto flex items-center justify-between w-full h-full">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold" style={{ color: color[0] }}>COLOR MATCH IS CONFUSING...</h1>
            <p className="text-lg my-5" style={{ color: color[0] }}>Say no more, just click the button below to get your best color ASAP</p>
            <Button onClick={handleClick} color={color[2]} />
          </div>
          <div className="flex justify-end flex-wrap gap-3 w-1/2">
            {color.map((color, index) => (
              <div
                key={index}
                style={{
                  border: "black solid 1px ",
                  backgroundColor: color,
                  width: '200px',
                  height: '200px',
                }}
              />
            ))}
          </div>

        </div>
      </div>
    );
  }
  return null;
}
