// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type RclLogosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function RclLogosvgIcon(props: RclLogosvgIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
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
          "M320 374H80V26h240zm-145.3-91.6c-7.2-14-11.3-28.8-21-39.9 3.7-3.8 8.6-7 10.8-11.5 6.7-14.2 4.8-33.7-18-38.8-14.9-3.4-30.1-1-45.8-1.5v91.5l22.5-4.7v-29c7.6-.6 12.1 2.7 14.8 8.7s4.7 11.5 7.2 17.1 5.2 7.8 10.3 8 12.2.1 19.2.1zm36.6-32.6c-.1 2.1-.1 3.5-.2 4.9-.3 5.1-2.6 7.5-7.2 7.7s-7.7-2.6-7.8-7.8q-.2-18 0-36c0-5.3 2.8-7.9 7.6-7.9s7.2 2.6 7.4 8.2c.1 2.1 0 4.3 0 7.1l23-4.8c2.7-13-5.2-23.8-16-28.1a38.9 38.9 0 00-21.8-2.1c-14.8 2.6-24.3 13.2-23.9 27.6.4 12.6.1 25.2 0 37.8a23.9 23.9 0 005.8 16c9 10.6 28 13.6 42 6.7 12.4-6.1 17.2-17.8 13.7-33.9zm53.6 11.6v-70.8l-22.5 4.7v86.9h56.2v-20.8zm-161-159.2c8.3 30.1 45.7 72.2 105.4 68.7 38.5-2.2 85.2-37.5 89.3-69h-9.8c-34.9 78.6-141.8 77.4-175.6.3zm194.9 207v-10.3H100.7v10.3zm-173-209.4c35.1-67.3 123.1-58.8 150.4 0h10.7c-5.7-14.7-14.8-26.3-26.4-36.1-17.2-14.7-37.7-21.5-59.9-21.3-42.4.3-75.4 29.3-84 57.4zm28.1 0c12.3-15 27.8-23.7 47.2-23.7s35.2 8.9 47.1 23.6h11.7l.8-1c-4.4-5-8.4-10.6-13.4-14.9a70.6 70.6 0 00-16.9-11.1A69.8 69.8 0 00211 67a75.5 75.5 0 00-20.7.2 68.7 68.7 0 00-19.3 6c-6 3-11.4 7.3-16.7 11.5s-9.2 8.7-11.2 15.1zm78.9 258.5c6.7-.5 12.7-.3 18.5-1.4 7.7-1.5 12.3-8.2 12.2-16.3s-4.6-14.2-12.3-15.6c-5.9-1.1-12.1-.9-18.4-1.3zm-30.9-34.7c-10.3-.1-18.3 7.4-18.3 17.2s7.6 17.5 18 17.5 17.6-7.1 17.8-16.9-7-17.6-17.5-17.8zm-47.1.1c-10.6-.2-18.2 6.8-18.3 17s7 17.4 17.1 17.6 18.3-7.1 18.5-17.1-7.1-17.3-17.3-17.5zm119.4 29.2c5.7 4.7 11.9 6.4 17.6 5.1s9.2-5.9 8.5-11.3-3.9-6.7-7.8-8l-9.8-3.2c.1-5.1 1.2-6.5 4.8-5.9s5.6 1.7 8.6 2.7l2.8-4.7c-4.8-3.9-10-4.5-15.5-3.6a9.3 9.3 0 00-8.1 9c-.4 4.8 1.4 7.5 6.4 9.5 2 .8 4.3 1.1 6.3 1.9s3.9 2.2 6.6 3.7c-6.2 7.5-11.7 2.5-17 .7zm-151.5-14.8H107v-7.9h18.4l-.5-5.7h-24.4v32.8h5.8l.7-12.7 16-.7zM228.9 99.8c-14.3-13.9-43.1-12.7-55.1 0z"
        }
        fill={"none"}
      ></path>

      <path
        d={
          "M174.7 282.4c-7 0-13.1.2-19.2-.1s-8.4-3.4-10.3-8-4.8-11.4-7.2-17.1-7.2-9.3-14.8-8.7v29l-22.5 4.7v-91.5c15.7.5 30.9-1.9 45.8 1.5 22.8 5.1 24.7 24.6 18 38.8-2.2 4.5-7.1 7.7-10.8 11.5 9.7 11.1 13.8 25.9 21 39.9zm-51.6-54.1c5.9-.6 11.1-.8 16-1.9s5-3.6 5.1-7.3-.7-5.6-3.7-6.8a28 28 0 00-17.4-.8z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M211.3 249.8l22.6-4.6c3.5 16.1-1.3 27.8-13.7 33.9-14 6.9-33 3.9-42-6.7a23.9 23.9 0 01-5.8-16c.1-12.6.4-25.2 0-37.8-.4-14.4 9.1-25 23.9-27.6a38.9 38.9 0 0121.8 2.1c10.8 4.3 18.7 15.1 16 28.1l-23 4.8c0-2.8.1-5 0-7.1-.2-5.6-2.5-8.1-7.4-8.2s-7.6 2.6-7.6 7.9q-.2 18 0 36c.1 5.2 3 7.9 7.8 7.8s6.9-2.6 7.2-7.7c.1-1.4.1-2.8.2-4.9zm53.6 11.6h33.7v20.8h-56.2v-86.9l22.5-4.7zm-161-159.2h9.3c33.8 77.1 140.7 78.3 175.6-.3h9.8c-4.1 31.5-50.8 66.8-89.3 69-59.7 3.5-97.1-38.6-105.4-68.7zm194.9 207H100.7v-10.3h198.1zm-173-209.4h-9.2c8.6-28.1 41.6-57.1 84-57.4 22.2-.2 42.7 6.6 59.9 21.3 11.6 9.8 20.7 21.4 26.4 36.1h-10.7c-27.3-58.8-115.3-67.3-150.4 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M153.9 99.8h-10.8c2-6.4 6.2-11.2 11.2-15.1S165 76.2 171 73.2a68.7 68.7 0 0119.3-6A75.5 75.5 0 01211 67a69.8 69.8 0 0119.4 5.7 70.6 70.6 0 0116.9 11.1c5 4.3 9 9.9 13.4 14.9l-.8 1h-11.7c-11.9-14.7-27.5-23.6-47.1-23.6s-34.9 8.7-47.2 23.7zm78.9 258.5v-34.6c6.3.4 12.5.2 18.4 1.3 7.7 1.4 12.2 7.8 12.3 15.6s-4.5 14.8-12.2 16.3c-5.8 1.1-11.8.9-18.5 1.4zm7-27.6v20.5c5.8.6 11.2 1.3 14.8-4.1a11 11 0 00-.1-12.4c-3.7-5.3-9-4.7-14.7-4zm-37.9-7.1c10.5.2 17.8 7.5 17.5 17.8s-7.7 17-17.8 16.9-18.1-7.5-18-17.5 8-17.3 18.3-17.2zm10.4 17.4c0-6.3-4.8-11.4-10.8-11.4a10.8 10.8 0 00-10.5 10.9c-.2 6.4 4.4 11.5 10.4 11.6a10.8 10.8 0 0010.9-11.1zm-57.5-17.3c10.2.2 17.5 7.7 17.3 17.5s-8 17.3-18.5 17.1-17.3-7.6-17.1-17.6 7.7-17.2 18.3-17zm-.4 5.9a11.1 11.1 0 00-11 11.1c0 6.2 4.8 11.4 10.7 11.5a11.1 11.1 0 0011-11.1c.1-6-4.9-11.4-10.7-11.5zm119.8 23.3l3.4-4.1c5.3 1.8 10.8 6.8 17-.7-2.7-1.5-4.6-2.8-6.6-3.7s-4.3-1.1-6.3-1.9c-5-2-6.8-4.7-6.4-9.5a9.3 9.3 0 018.1-9c5.5-.9 10.7-.3 15.5 3.6l-2.8 4.7c-3-1-5.7-2.2-8.6-2.7s-4.7.8-4.8 5.9l9.8 3.2c3.9 1.3 7.2 3.4 7.8 8s-2.7 10-8.5 11.3-11.9-.4-17.6-5.1zm-151.5-14.8l.3 5.8-16 .7-.7 12.7h-5.8v-32.8h24.4l.5 5.7H107v7.9z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M228.9 99.8h-55.1c12-12.7 40.8-13.9 55.1 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default RclLogosvgIcon
/* prettier-ignore-end */