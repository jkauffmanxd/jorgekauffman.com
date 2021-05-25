// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type DesignPencilsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function DesignPencilsvgIcon(props: DesignPencilsvgIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 21.168A9.966 9.966 0 0012 22a9.966 9.966 0 004-.832m-8 0A10.002 10.002 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.1-2.468 7.625-6 9.168m-8 0V14m0 0l4-7 4 7m-8 0s1.127 1 2 1 2-1 2-1 1.127 1 2 1 2-1 2-1m0 0v7.168"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  )
}

export default DesignPencilsvgIcon
/* prettier-ignore-end */
