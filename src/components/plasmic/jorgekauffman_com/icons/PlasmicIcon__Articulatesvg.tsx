// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type ArticulatesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function ArticulatesvgIcon(props: ArticulatesvgIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 400 400"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M339.7 208.7c1.1-10.7-5.3-18.3-15.8-19.8-9-1.3-18 5.3-19.5 14.3-1.7 10.2 4 19.1 13.6 21.1 8.8 1.8 18-2.7 19.7-9.8h-7.2c-3.2 3.8-7.3 4.8-11.9 3.4-4.1-1.3-6.5-4.4-7.1-9.2h28.2zm-243 15c-.5-7.7-.2-15.3-1.6-22.6-1.4-7.5-8.7-12.2-16.6-12.4-7.8-.2-14.9 4.6-17.3 11.7-2.6 7.6-.3 16 5.6 20.5 6.6 5 13.9 5.1 20.9.2.3-.2.7-.2 1.1-.3.2 1.1.4 2.1.5 3 2.4-.1 4.5-.1 7.4-.1zm183.9.1c0-6.1.1-11.8 0-17.5-.3-9.3-5.6-15.4-14.7-17.2-8-1.5-15.8 2.3-19.3 9.4-3.7 7.4-1.9 16.6 4.2 21.9 6.1 5.3 14.3 5.6 21.3.9.4-.3.9-.4 1.4-.6.3 1.2.5 2.2.7 3.1h6.4zm-84.3-34.1c0 7.4-.3 14.3.1 21.2.3 5.4 2.6 10.1 7.9 12.4 5.3 2.3 10.4 1.8 14.9-2.1.2-.1.5-.1.9-.2.2.9.3 1.9.5 2.7h6.8v-33.9h-7.1c0 6.6.2 13-.1 19.4-.2 5.5-4.4 9.4-9.5 9.2-4.6-.2-7-3.2-7.2-9.2v-19.5h-7.2zm-5 11.7c-1.3-8.5-10.5-13.2-18-12.5-11.1 1-16.8 8.4-16.8 17.9 0 9.8 6.2 16.7 15.9 17.9 8.9 1 17-4.1 18.7-11.8h-6.7c-5.6 6.4-12.4 7.4-17.3 2.7-4.9-4.8-4.6-13.4.6-17.9 5.2-4.5 11.8-3 16.9 3.8 2.3-.1 4.5-.1 6.7-.1zm-67-22.5V211c0 10.9 5 14.9 15.9 12.6v-5.4c-1.5 0-2.8.1-4.1 0-2.6-.2-4.3-1.6-4.4-4.2-.1-6 0-11.9 0-18.4h8.6v-6h-8.8V179c-2.6-.1-4.7-.1-7.2-.1zm176.8 39.3h-3.7c-2.7 0-4.6-1.4-4.7-3.9-.3-6.2-.1-12.4-.1-19h8.4v-6h-8.6v-10.4h-7v33c0 10.1 5.9 14.3 15.8 11.4-.1-1.6-.1-3.3-.1-5.1zm-61.1 5.6V179h-6.8v44.8h6.8zm-131.1 0c0-6.2-.1-12.1 0-17.9.1-5.9 2.4-8.8 8-10.2.9-.2 1.7-.5 2.4-.7v-6.4c-3.8 1.5-7 2.8-10.2 4.1-.1-.8-.3-1.9-.4-3H102v34c2.2.1 4.3.1 6.9.1zm36.5-34.2v34h6.7v-34h-6.7zm100-5.7H280v-5h-34.6v5zm-96.9.9c3.2-.1 5.1-1.6 5.1-4.6.1-3-1.6-4.8-4.5-4.9-2.9-.1-4.7 1.5-4.8 4.6-.1 2.9 1.6 4.5 4.2 4.9z"
        }
        fill={"#fefefe"}
      ></path>

      <path
        d={
          "M339.7 208.7h-28.2c.7 4.8 3.1 7.9 7.1 9.2 4.5 1.5 8.7.4 11.9-3.4h7.2c-1.7 7.1-10.9 11.7-19.7 9.8-9.7-2-15.4-10.8-13.6-21.1 1.5-9 10.5-15.6 19.5-14.3 10.5 1.5 16.9 9.1 15.8 19.8zm-7.5-5.2c-1.7-5.7-5.3-8.4-10.5-8.3-5 .1-8.4 3-9.7 8.3h20.2zM96.7 223.7h-7.4c-.2-.9-.3-1.9-.5-3-.4.1-.8.1-1.1.3-7.1 4.9-14.3 4.8-20.9-.2-5.9-4.5-8.2-12.9-5.6-20.5 2.4-7 9.5-11.8 17.3-11.7 7.9.2 15.2 4.8 16.6 12.4 1.5 7.4 1.2 15 1.6 22.7zm-29.2-16.9c0 7 4.4 11.6 10.9 11.6 6.3 0 10.7-4.7 10.7-11.4.1-6.8-4.4-11.8-10.7-11.8-6.5-.2-10.9 4.6-10.9 11.6zm213.1 17h-6.4c-.2-1-.4-1.9-.7-3.1-.5.2-1 .4-1.4.6-7 4.8-15.2 4.4-21.3-.9-6.1-5.3-7.8-14.4-4.2-21.9 3.5-7.1 11.3-11 19.3-9.4 9.1 1.8 14.4 7.8 14.7 17.2.1 5.7 0 11.4 0 17.5zm-17.8-5.5c6.2 0 11.1-5.3 11-11.7-.1-6.5-5.1-11.6-11.3-11.5-6 .1-10.7 5.2-10.7 11.6-.1 6.6 4.7 11.7 11 11.6zm-66.5-28.6h7.2v19.5c.1 6 2.5 9 7.2 9.2 5.1.2 9.4-3.7 9.5-9.2.2-6.4.1-12.7.1-19.4h7.1v33.9h-6.8c-.1-.8-.3-1.7-.5-2.7-.4.1-.7.1-.9.2-4.5 3.9-9.6 4.4-14.9 2.1-5.4-2.3-7.6-7-7.9-12.4-.4-6.9-.1-13.8-.1-21.2zm-5 11.7h-6.7c-5.2-6.8-11.7-8.3-16.9-3.8-5.2 4.5-5.4 13.1-.6 17.9 4.8 4.7 11.7 3.7 17.3-2.7h6.7c-1.7 7.7-9.7 12.8-18.7 11.8-9.8-1.1-15.9-8.1-15.9-17.9 0-9.4 5.7-16.8 16.8-17.9 7.6-.6 16.8 4.1 18 12.6zm-67-22.5h7.1v10.6h8.8v6h-8.6c0 6.5-.1 12.4 0 18.4.1 2.6 1.8 4.1 4.4 4.2 1.3.1 2.6 0 4.1 0v5.4c-10.9 2.3-15.9-1.7-15.9-12.6.1-10.5.1-21.2.1-32z"
        }
      ></path>

      <path
        d={
          "M301.1 218.2v5.2c-9.8 2.9-15.7-1.4-15.8-11.4v-33h7v10.4h8.6v6h-8.4c0 6.6-.2 12.8.1 19 .1 2.5 2 3.9 4.7 3.9 1.3-.1 2.4-.1 3.8-.1z"
        }
        fill={"#010101"}
      ></path>

      <path d={"M240 223.8h-6.8V179h6.8v44.8z"}></path>

      <path
        d={
          "M108.9 223.8h-7v-34h6.7c.2 1.1.3 2.2.4 3 3.3-1.3 6.5-2.6 10.2-4.1v6.4c-.7.2-1.5.5-2.4.7-5.6 1.4-8 4.3-8 10.2 0 5.7.1 11.5.1 17.8z"
        }
        fill={"#010101"}
      ></path>

      <path d={"M145.4 189.6h6.7v34h-6.7v-34z"}></path>

      <path d={"M245.4 183.9v-5H280v5h-34.6z"} fill={"#060606"}></path>

      <path
        d={
          "M148.5 184.8c-2.6-.4-4.3-1.9-4.2-5 .1-3 2-4.7 4.8-4.6 2.9.1 4.6 2 4.5 4.9 0 3.1-1.9 4.5-5.1 4.7z"
        }
        fill={"#040404"}
      ></path>

      <path
        d={"M332.2 203.5H312c1.3-5.3 4.7-8.2 9.7-8.3 5.2-.2 8.8 2.5 10.5 8.3z"}
        fill={"#f9f9f9"}
      ></path>

      <path
        d={
          "M67.5 206.8c0-6.9 4.5-11.7 10.8-11.6 6.3.1 10.8 5 10.7 11.8-.1 6.6-4.5 11.3-10.7 11.4-6.5 0-10.8-4.7-10.8-11.6zm195.3 11.5c-6.3 0-11.1-5-11-11.6 0-6.4 4.7-11.5 10.7-11.6 6.2-.1 11.2 5 11.3 11.5.1 6.4-4.9 11.7-11 11.7z"
        }
        fill={"#fefefe"}
      ></path>
    </svg>
  )
}

export default ArticulatesvgIcon
/* prettier-ignore-end */
