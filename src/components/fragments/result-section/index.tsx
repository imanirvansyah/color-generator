import { isColorDark } from "@/helpers/colors";
import clsx from "clsx";
import { IPalette } from "@/app/page";

export const ResultSection: React.FC<{
  pallete: IPalette[];
}> = ({ pallete }) => {
  return (
    <div className="flex flex-wrap gap-3 w-full h-full ">
      {pallete.length > 0 &&
        pallete.map((c, i) => <div key={i} style={{ backgroundColor: `${c.hex}` }} className="relative md:flex-1 w-full flex items-center" >
          <div className="md:absolute md:bottom-5 w-full">
            <p className={clsx("text-center font-bold", !isColorDark(c.hex) ? "text-background" : "text-foreground")}>{c.name}</p>
            <p className={clsx("text-sm text-center", !isColorDark(c.hex) ? "text-background" : "text-foreground")}>{c.hex}</p>

          </div>
        </div>)}
    </div>
  )
}
