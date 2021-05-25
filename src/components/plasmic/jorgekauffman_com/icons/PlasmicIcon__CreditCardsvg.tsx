// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type CreditCardsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function CreditCardsvgIcon(props: CreditCardsvgIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M7 15a1 1 0 100-2 1 1 0 000 2z"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M2 9V5.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6V9M2 9v9.4a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6V9M2 9h20"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  )
}

export default CreditCardsvgIcon
/* prettier-ignore-end */
