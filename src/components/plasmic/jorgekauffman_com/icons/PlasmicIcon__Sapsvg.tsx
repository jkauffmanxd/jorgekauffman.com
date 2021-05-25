// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type SapsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function SapsvgIcon(props: SapsvgIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 331.84 164.18"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <g data-name={"Layer 1"}>
          <path
            fillRule={"evenodd"}
            fill={"#004990"}
            d={"M0 164.15h167.7L331.84 0H0v164.15"}
          ></path>

          <path
            d={
              "M196.93 30.86h-32.66v77.66l-28.54-77.67h-28.29L83.07 95.79c-2.58-16.37-19.52-22-32.85-26.27-8.82-2.82-18.13-7-18-11.58.06-3.77 5-7.27 14.78-6.74 6.57.35 12.38.87 23.89 6.44l11.33-19.76a88.47 88.47 0 00-37-8.76h-.08c-13.9 0-25.49 4.52-32.66 11.93A27.61 27.61 0 004.65 60.1c-.18 10 3.49 17.13 11.23 22.81 6.5 4.78 14.85 7.88 22.2 10.17 9.06 2.8 16.46 5.24 16.37 10.45a7.52 7.52 0 01-2.13 5.09c-2.27 2.34-5.74 3.22-10.53 3.31-9.27.19-16.13-1.26-27-7.72l-10.09 20a75.5 75.5 0 0037 9.83h1.7c11.47-.2 20.72-3.49 28.12-9.43.4-.33.8-.68 1.19-1l-3.27 8.76H99l5-15.15a56.54 56.54 0 0034.46.14l4.8 15h48.38V101h10.56c25.51 0 40.61-13 40.61-34.76.01-24.24-14.66-35.38-45.88-35.38zm-75.49 66.47A29.74 29.74 0 01111 95.48l10.36-32.66h.21l10.15 32.75a30.05 30.05 0 01-10.28 1.76zm77.41-18.78h-7.2V52.22h7.2c9.6 0 17.24 3.19 17.24 13 0 10.13-7.64 13.32-17.24 13.32"
            }
            fill={"#fff"}
            fillRule={"evenodd"}
          ></path>

          <path
            d={
              "M207.84 153.51a8.64 8.64 0 118.67 8.89 8.62 8.62 0 01-8.67-8.89zm8.67 10.67a10.65 10.65 0 10-10.81-10.67 10.64 10.64 0 0010.81 10.67zm-2.26-9.83h2.14l3.23 5.31h2.09l-3.5-5.4c1.8-.21 3.19-1.18 3.19-3.38 0-2.41-1.44-3.49-4.33-3.49h-4.68v12.27h1.86zm0-1.59V149h2.54c1.27 0 2.65.27 2.65 1.8 0 1.9-1.4 2-3 2z"
            }
            fill={"#004990"}
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default SapsvgIcon
/* prettier-ignore-end */
