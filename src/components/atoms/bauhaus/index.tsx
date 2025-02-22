import * as React from "react"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bauhaus: React.FC<{ color: { hex: string, name?: string }[] }> = ({ color }) => {
  return (
    <svg
      width={482}
      height={822}
      viewBox="0 0 482 822"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_24_152)">
        <path
          transform="matrix(0 -1 -1 0 482 822)"
          fill={color[0].hex}
          d="M0 0H822V482H0z"
        />
        <ellipse
          cx={519.5}
          cy={519.5}
          rx={519.5}
          ry={519.5}
          transform="matrix(0 -1 -1 0 494 1314)"
          fill={color[1].hex}
        />
        <ellipse
          cx={448.5}
          cy={448.5}
          rx={448.5}
          ry={448.5}
          transform="matrix(0 -1 -1 0 423 1276)"
          fill={color[2].hex}
        />
        <ellipse
          cx={408.5}
          cy={408.5}
          rx={408.5}
          ry={408.5}
          transform="matrix(0 -1 -1 0 365 1253)"
          fill={color[0].hex}
        />
        <ellipse
          cx={364.5}
          cy={364.5}
          rx={364.5}
          ry={364.5}
          transform="matrix(0 -1 -1 0 312 1209)"
          fill={color[3].hex}
        />
        <ellipse
          cx={305.5}
          cy={306}
          rx={305.5}
          ry={306}
          transform="matrix(0 -1 -1 0 239 1152)"
          fill={color[4].hex}
        />
        <ellipse
          cx={248.5}
          cy={248.5}
          rx={248.5}
          ry={248.5}
          transform="matrix(0 -1 -1 0 182 1095)"
          fill={color[1].hex}
        />
        <ellipse
          cx={196}
          cy={195.5}
          rx={196}
          ry={195.5}
          transform="matrix(0 -1 -1 0 127 1041)"
          fill={color[0].hex}
        />
        <ellipse
          cx={147.5}
          cy={147.5}
          rx={147.5}
          ry={147.5}
          transform="matrix(0 -1 -1 0 80 993)"
          fill={color[3].hex}
        />
        <ellipse
          cx={98}
          cy={98.5}
          rx={98}
          ry={98.5}
          transform="matrix(0 -1 -1 0 31 944)"
          fill={color[0].hex}
        />
      </g>
      <defs>
        <clipPath id="clip0_24_152">
          <path
            fill="#fff"
            transform="matrix(0 -1 -1 0 482 822)"
            d="M0 0H822V482H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Bauhaus
