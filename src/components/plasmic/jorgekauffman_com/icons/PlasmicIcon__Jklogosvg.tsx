// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type JklogosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function JklogosvgIcon(props: JklogosvgIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 400 400"}
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
        d={
          "M288.6 247c-1.7-1.3-4-4.5-6.8-9.7-2.8-5.1-6.9-12.8-12.1-22.9-8.3-16.1-15.4-29.4-21.5-39.8-6-10.4-11.8-18.4-17.4-24l38.7-46.8 22.2-3.7V80.2h-74.9l.1 20.1 19.4 3.7-53.2 74.3v-74.5l18.4-3.6V80h-87v20.1l19.5 3.7v122.7c0 19.4-1.7 34.1-5 44-2.9 8.6-7 15.6-12.3 21.2-5.3 5.6-10.9 9.5-16.8 11.8l10.6 16.5c18.9-3 34-9.3 45.4-18.8 11.4-9.5 19.2-21.2 23.3-35 2.4-8.7 3.7-28.4 3.9-59.1l16.8-21c3.2 4.9 6.4 10.9 9.8 18.1 3.4 7.2 7.4 16.1 12 26.6 5.6 13 10 22.5 13.2 28.7 3.2 6.2 5.8 9.2 7.8 9.2H300v-18.8l-11.4-2.9z"
        }
      ></path>
    </svg>
  )
}

export default JklogosvgIcon
/* prettier-ignore-end */
