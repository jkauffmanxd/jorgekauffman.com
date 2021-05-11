// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type XssvgIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function XssvgIcon(props: XssvgIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 480 480"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M63.92 430H40l145.18-199.5L66.74 73h121.61l55.89 73.19L339.63 73l-91.54 122.3L174.86 99H123.1l99.99 130.68L63.92 430zm79.81-28l92.18-118.82 71.21 94.68 59.13-1.28-99.82-130.25L426.65 50H440L295.68 246.97 413.93 402H291.86l-55.31-75.61L143.73 402z"
        }
      ></path>
    </svg>
  )
}

export default XssvgIcon
/* prettier-ignore-end */
