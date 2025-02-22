"use client"

import Bauhaus from "@/components/atoms/bauhaus";
import { ColorPicker } from "@/components/atoms/color-picker";
import { isColorDark } from "@/helpers/colors";
import { getColors } from "@/services/colors";
import { Color } from "@/services/colors.type";
import clsx from "clsx";
import { useState } from "react";
import { IPalette } from "@/app/page";

export const HeroSection: React.FC<{
  isShowFullColor: boolean;
  pallete: IPalette[];
  setPallete: (v: IPalette[]) => void;
}> = ({ isShowFullColor, pallete, setPallete }) => {
  const [color, setColor] = useState("#F95E06");
  const [isLoading, setIsLoading] = useState(false);

  const handleColor = async () => {
    setIsLoading(true);
    const sanitizedColor = color.replace(/^#/, '');
    try {
      const data = await getColors(sanitizedColor);
      if (!!data) {
        const colorSet = data.colors.map((color: Color) => { return { hex: color.hex.value, name: color.name.value } })
        setPallete(colorSet);
      }
    } catch (error) {
      console.error('Error fetching colors:', error);
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <div className={clsx("flex items-center gap-5 w-full md:h-full mt-24 mb-12", isShowFullColor ? "justify-between" : "justify-center")}>
      {!isShowFullColor && <Bauhaus color={pallete} />}
      <div className={clsx("my-3 w-full md:max-w-[50%]")}>
        <h1 className={clsx("text-3xl/[157%] md:text-5xl/[157%] text-center md:text-start uppercase font-bold tracking-widest")}>Color pallete never as easy as before</h1>
        <p className={clsx("font-light tracking-wider text-center md:text-start")}>just choose your base color and leave the rest to us</p>
        <div className={clsx("my-6 text-center md:text-start")}>
          <ColorPicker value={color} onChange={setColor} />
        </div>
        <div className={clsx("text-center md:text-start")}>
          <button
            className={clsx(
              "tracking-[.5em] text-sm font-bold rounded-md py-2 px-10",
              !isColorDark(pallete[0].hex) ? "text-background" : "text-foreground",
            )}
            style={{
              backgroundColor: pallete.length > 0 ? pallete[0].hex : "#FC5D01",
            }}
            onClick={handleColor}
            disabled={isLoading}>
            {isLoading ? "LOADING" : "GENERATE"}
          </button>
        </div>
      </div>
    </div>
  )
}
