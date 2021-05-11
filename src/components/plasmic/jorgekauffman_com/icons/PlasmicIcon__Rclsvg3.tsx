// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Rclsvg3IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Rclsvg3Icon(props: Rclsvg3IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 539.3 841.9"}
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
          "M170.6 497c.6-.3 1.2-.5 1.8-.8 12.3-4.2 20.9-12.5 26-24.3 4.9-11.1 6.3-22.9 4.9-35-2-16.8-10.5-29.3-25.2-37.4-14.2-7.9-29.8-11.1-45.8-11.5-22.9-.4-45.7-.1-68.6-.1-.7 0-1.4.1-2.1.2v194.3c15.9-3.4 31.7-6.7 47.6-10.1v-60.7c.9-.2 1.5-.5 2.2-.5 10.8-.7 20.6 4.3 25.9 14 1.5 2.8 2.9 5.7 4.1 8.7 5.1 11.7 10.1 23.5 15.1 35.2 1.4 3.4 3.6 6.2 6.6 8.4 5.3 3.9 11.4 5.3 17.8 5.4 11.6.1 23.2 0 34.8 0 .8 0 1.6-.1 2.7-.1-.4-1-.7-1.8-1.1-2.6-7.6-16.1-15.3-32.2-22.9-48.3-3-6.2-5.8-12.5-9-18.6-3.4-6.4-7.7-12.2-14.3-15.7-.2 0-.3-.2-.5-.5zm122.2-32.5c.8-.1 1.3 0 1.8-.1 15.6-3.2 31.1-6.4 46.7-9.6 3.4-.7 3.4-.7 3.5-4.2.2-5.4-.2-10.7-1.4-16-2.6-12-8.1-22.3-17.5-30.4-11.4-10-25-14.5-39.9-15.7-10.4-.8-20.6.1-30.6 2.8-5.7 1.6-11.5 3.1-16.5 6.2-17.6 11-27.1 27-27.3 47.7-.4 28.1-.1 56.2-.1 84.2 0 1.8.1 3.5.4 5.3 2.9 17.1 11.7 30.2 26.8 38.9 13.2 7.6 27.8 10.2 42.8 10.2 3.6 0 7.2-.7 10.7-1.3 10.2-1.9 19.9-5.3 28.6-11.2 13.6-9.3 21.5-22 23.1-38.5.9-9.5.7-19 .5-28.5 0-.5-.2-.9-.3-1.8-17.1 3.4-34.1 6.9-51.2 10.4-.1 1.1-.1 2.1-.1 3-.1 4 .1 8-.2 12-.5 5.9-4 9.7-9.8 10.9-1.9.4-3.8.4-5.7.4-7.9.2-14-5.2-14-14-.1-26.6 0-53.3 0-79.9 0-5.5 2.8-9.5 7.9-11.4 3.8-1.4 7.8-1.8 11.8-1.1 5 .9 8.4 3.7 9.7 8.8.4 1.5.5 3 .5 4.5.1 4.9 0 9.8.1 14.6-.3 1.3-.3 2.4-.3 3.8zm64.4 117.9c2.1.7 118.9.7 121 .1.5-2 .5-42-.1-44.3h-66.8c-4.6 0-4.1.3-4.1-4.1v-146c-16.9 3.4-33.4 6.8-50 10.2v184.1zM64.6 200.8c.1.5.1.7.1.9l.6 2.1c6.9 18.9 16 36.6 27.7 52.9 21.3 29.7 48.2 53 80.8 69.6 31.3 16 64.5 24 99.7 24.1 12.2 0 24.2-.9 36.3-3 17.8-3 35-8.1 51.5-15.4 29.8-13.2 55.3-32.1 76.8-56.6 18.8-21.4 32.8-45.6 42.5-72.4.3-.7.4-1.5.7-2.3H456c-.3.7-.7 1.3-.9 1.9-11 27.3-27.1 51-48.8 70.9-32.6 30-71.2 46.6-115.2 50.8-7.9.8-15.8 1-23.7.7-12.5-.4-24.8-1.8-37-4.5-31.4-6.9-59.5-20.6-84-41.5-24.2-20.6-42.3-45.6-54.3-75-.5-1.2-1-2.3-1.5-3.4-8.8.2-17.3.2-26 .2zm26.8-.8c.8.1 1.4.3 2 .3h22.3c1.4 0 2.2-.5 2.7-1.8 3.4-7.3 7.6-14.2 12.2-20.9 14.1-20.7 31.5-38 52.8-51.3 25.4-15.9 53.3-24 83.2-25.3 6.7-.3 13.4-.4 20.1.2 11.2 1 22.1 3 32.9 6.2 30.7 9 57 25.1 78.7 48.6 11.5 12.4 20.9 26.2 28.7 41.2.9 1.8 2 2.5 4.1 2.4 7-.1 13.9 0 20.9-.1.8 0 1.7-.1 2.9-.1-.8-2.1-1.5-3.9-2.3-5.6-8.8-19.8-20.6-37.5-35.2-53.5-20.3-22.2-44.4-38.9-72.4-49.9-20.4-8-41.5-12.5-63.3-14.1-11.1-.9-22.2-.4-33.2 1.2-11.2 1.6-22.1 4.1-32.9 7.6-34.7 11.2-64.2 30.6-88.3 58-14.4 16.5-25.9 34.9-35.1 54.7-.3.7-.5 1.3-.8 2.2zM61.1 639.7h417.5c-.1-8.3.1-16.4-.1-24.6H61.2c-.2 8.2 0 16.3-.1 24.6zm338.1-439.2c-.1-.5-.1-.8-.2-1-.4-.8-.8-1.5-1.3-2.3-5-8.2-10.8-15.7-17.3-22.7-14.6-15.8-31.6-28.1-51.3-36.7-13.6-5.9-27.8-9.5-42.5-11.2-10.2-1.2-20.4-1.3-30.6.2-12.3 1.8-24.2 4.9-35.8 9.5-31.1 12.3-55.3 32.8-72.7 61.3-.4.6-.6 1.2-1 2 .5.1.8.2 1.1.2h25.7c1.2 0 1.9-.6 2.5-1.4 12.1-15 26.9-26.8 44.2-35.5 12.1-6.1 24.9-10 38.3-11.7 7.1-.9 14.2-1.2 21.3-.7 9.5.7 18.8 2.5 28 5.2 25.3 7.6 46.3 21.2 61.6 43.2.8 1.1 1.6 1.5 3 1.5 5.2-.1 10.4 0 15.6 0 3.7.1 7.4.1 11.4.1zM136.1 707.1c.3 12.1 6.7 23.3 19.7 30.3 7.3 3.9 15.2 5.1 23.5 4.1 10.4-1.2 19-5.8 25.5-14 6.5-8.3 8.9-17.7 7.6-28.1-1.4-11-6.8-19.7-16-25.8-8.7-5.8-18.4-7.4-28.7-5.8-18.3 2.7-31.5 18.1-31.6 39.3zm140.2 35.5c6.3.1 14.8-2.6 22-8.7 9.3-7.8 13.8-17.9 13.4-30-.4-12.4-5.6-22.3-15.9-29.4-8.3-5.6-17.5-7.6-27.4-6.3-12.5 1.5-22 7.6-28.5 18.4-3.8 6.4-5.2 13.5-4.8 20.9.4 8.3 3.2 15.6 8.6 21.9 7.8 9 17.8 13.2 32.6 13.2zm61.7-2h27.1c2.7 0 5.5-.1 8.1-.5 9.6-1.6 17.7-5.8 23.8-13.6 4.2-5.4 6.5-11.5 7.1-18.3.9-11-1.9-20.8-9.8-28.7-7.6-7.7-17.2-10.8-27.8-11-8.8-.2-17.6 0-26.4 0-.7 0-1.4.1-2.1.2v71.9zm87-10c.1.3.2.5.3.6.3.3.6.6.9.8 10.9 8.7 23.3 11.8 36.9 9.4 12.6-2.2 19.5-11.4 18.5-24.2-.3-3.8-1.6-7.1-4.2-10-2.8-3-6.2-5-10-6.3-4.6-1.6-9.3-2.8-13.9-4.3-2.4-.7-4.7-1.6-7-2.5-1.5-.6-2.6-1.8-3.2-3.4-1.3-3.8.6-7.5 4.7-8.5 2.1-.5 4.4-.6 6.6-.5 5.4.4 10.1 2.8 14.6 5.6.7.4 1.3.8 2 1.2 2.6-3.1 7.1-9.8 7.8-11.6-.1-.1-.2-.3-.3-.4-10.3-7.6-21.8-10.3-34.2-7.5-11.7 2.6-18.1 12.2-16.7 24.1.5 4.7 2.4 8.8 6.4 11.6 2.3 1.7 4.9 3.1 7.6 4.1 4.3 1.5 8.7 2.5 13.1 3.9 2.8.9 5.6 2 8.3 3.1 1.5.6 2.6 1.8 3.1 3.5.9 3.1-.1 6-2.9 7.6-2.1 1.3-4.5 1.6-6.9 1.7-6.1.2-11.6-1.7-16.8-4.9-1.8-1.1-3.6-2.4-5.6-3.7-3.2 3.6-6.2 7.2-9.1 10.6zm-88.9-530.4c.2-.3.3-.5.5-.8-.4-.2-.8-.3-1.1-.5-2.8-2.1-5.5-4.4-8.4-6.4-12.3-8.3-25.9-13.4-40.6-15.7-5.8-.9-11.6-1.5-17.4-1.1-12 .8-23.5 3.7-34.6 8.2-8.7 3.5-16.8 8.2-23.8 14.6-.4.4-.7.9-1.4 1.6 42.6.1 84.7.1 126.8.1zM115.9 669.1c-2.8-.5-52.5-.4-54.3 0-.6 2.5-.5 69.7.1 71.5 2.5.5 12.9.4 14.9-.2V722c0-3-.2-6 .2-9.3h34.1c.2-.5.4-.8.4-1 0-3.8.1-7.5.1-11.3 0-1.1-.6-1.6-1.7-1.6H79.9c-1 0-2-.2-3.1-.3v-15.7c1.3-.1 2.3-.2 3.4-.2h32.6c1 0 2-.2 3-.3.1-4.5.1-8.8.1-13.2zm398.4 10.7c.2-.7.4-1.1.4-1.5l-.6-10.8c0-.2-.1-.5-.1-.7-.3-.9-1.2-1.1-1.8-.3-.3.4-.4.9-.6 1.3-.8 2.3-1.6 4.7-2.5 7-.3.8-.7 1.6-1.2 2.8-.4-1-.7-1.5-.9-2.1-.9-2.8-1.9-5.6-2.8-8.4-.2-.7-.6-1.3-1.3-1-.4.1-.7.8-.8 1.2-.3 3.7-.6 7.5-.8 11.2 0 .3.2.7.4 1.5 1.3-2.1.9-3.9 1-5.6.1-1.9.2-3.7.2-5.6.2 0 .4-.1.6-.1 1.7 3.6 2.3 7.6 4 11.1h.5c1.5-3.9 2.9-7.8 4.4-11.7.2 0 .4.1.6.1.1 1.2.2 2.5.3 3.7.1 1.4.1 2.7.2 4.1.1 1.2-.5 2.5.8 3.8zm-15.2-12.9c-2.1-1.1-7.9-1.1-9.8-.1 1.7.2 3 .3 4.5.4 0 .9.1 1.8.1 2.6v8.4c0 .6-.1 1.3 1 1.5.4-4.2-.1-8.3.3-12.5 1.5-.1 2.7-.2 3.9-.3z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M170.6 497c.2.3.3.5.5.6 6.7 3.5 11 9.2 14.3 15.7 3.2 6.1 6 12.4 9 18.6 7.7 16.1 15.3 32.2 22.9 48.3.4.8.6 1.6 1.1 2.6-1.1.1-1.9.1-2.7.1-11.6 0-23.2.1-34.8 0-6.4 0-12.5-1.5-17.8-5.4-3-2.2-5.2-5-6.6-8.4-5-11.8-10-23.5-15.1-35.2-1.3-2.9-2.6-5.8-4.1-8.7-5.2-9.8-15-14.7-25.9-14-.7 0-1.4.3-2.2.5v60.7c-15.9 3.4-31.7 6.7-47.6 10.1V388.2c.7-.1 1.4-.2 2.1-.2 22.9 0 45.7-.3 68.6.1 16 .3 31.6 3.6 45.8 11.5 14.7 8.2 23.2 20.7 25.2 37.4 1.4 12.1 0 23.8-4.9 35-5.1 11.8-13.8 20-26 24.3-.6.1-1.2.4-1.8.7zM110 466.1c.8 0 1.7.1 2.5.1 6.6 0 13.3.1 19.9 0 2.6-.1 5.3-.4 7.8-1.1 5.8-1.6 10.1-5.1 11.8-11.1.5-1.9.7-3.9.8-5.9.2-5.6-2.4-9.7-7.3-12.2-3-1.6-6.3-2.3-9.7-2.4-6.6-.2-13.3-.3-19.9-.4H110c-.7 2.3-.7 30.6 0 33z"
        }
      ></path>

      <path
        d={
          "M292.8 464.5v-3.6c0-4.9 0-9.8-.1-14.6 0-1.5-.2-3-.5-4.5-1.3-5.1-4.7-7.9-9.7-8.8-4-.7-8-.3-11.8 1.1-5.1 1.9-7.9 5.9-7.9 11.4 0 26.6-.1 53.3 0 79.9 0 8.8 6.1 14.2 14 14 1.9 0 3.9 0 5.7-.4 5.8-1.2 9.3-5 9.8-10.9.4-4 .2-8 .2-12 0-.9.1-1.9.1-3 17.1-3.5 34.1-6.9 51.2-10.4.2.8.3 1.3.3 1.8.2 9.5.4 19-.5 28.5-1.5 16.5-9.5 29.2-23.1 38.5-8.7 5.9-18.3 9.3-28.6 11.2-3.5.6-7.1 1.3-10.7 1.3-15.1 0-29.6-2.6-42.8-10.2-15.1-8.7-23.9-21.8-26.8-38.9-.3-1.7-.4-3.5-.4-5.3 0-28.1-.3-56.2.1-84.2.3-20.8 9.8-36.7 27.3-47.7 5-3.1 10.8-4.7 16.5-6.2 10-2.8 20.3-3.7 30.6-2.8 14.8 1.2 28.4 5.7 39.9 15.7 9.3 8.1 14.9 18.4 17.5 30.4 1.1 5.3 1.5 10.6 1.4 16-.1 3.5-.1 3.5-3.5 4.2-15.6 3.2-31.1 6.4-46.7 9.6-.2-.1-.7-.2-1.5-.1zm64.4 117.9V398.3c16.6-3.4 33.1-6.7 50-10.2v146c0 4.4-.5 4.1 4.1 4.1h66.8c.6 2.2.6 42.3.1 44.3-2.1.6-118.9.6-121-.1zM64.6 200.8h25.8c.5 1.1 1 2.3 1.5 3.4 12.1 29.4 30.1 54.5 54.3 75 24.5 20.8 52.6 34.6 84 41.5 12.2 2.7 24.6 4.1 37 4.5 7.9.2 15.8 0 23.7-.7 44-4.2 82.5-20.9 115.2-50.8 21.7-19.9 37.8-43.6 48.8-70.9.3-.7.6-1.3.9-1.9h25.3c-.3.9-.4 1.6-.7 2.3-9.6 26.8-23.7 51-42.5 72.4-21.5 24.5-47 43.4-76.8 56.6-16.5 7.3-33.7 12.4-51.5 15.4-12 2-24.1 3-36.3 3-35.1-.1-68.4-8.1-99.7-24.1-32.6-16.6-59.5-39.9-80.8-69.6-11.7-16.3-20.9-34-27.7-52.9l-.6-2.1c.2-.3.2-.6.1-1.1zm26.8-.8c.3-.9.5-1.5.8-2.2 9.2-19.9 20.7-38.2 35.1-54.7 24.1-27.5 53.5-46.8 88.3-58 10.7-3.5 21.7-6 32.9-7.6 11-1.6 22.1-2 33.2-1.2 21.8 1.7 43 6.1 63.3 14.1 28 11 52.1 27.7 72.4 49.9 14.5 16 26.4 33.7 35.2 53.5.8 1.7 1.4 3.5 2.3 5.6-1.2.1-2.1.1-2.9.1-7 0-13.9-.1-20.9.1-2 0-3.1-.6-4.1-2.4-7.8-15-17.2-28.8-28.7-41.2-21.7-23.5-48-39.7-78.7-48.6-10.8-3.1-21.7-5.2-32.9-6.2-6.7-.6-13.4-.4-20.1-.2-29.9 1.3-57.7 9.3-83.2 25.3-21.3 13.3-38.7 30.6-52.8 51.3-4.6 6.7-8.7 13.6-12.2 20.9-.6 1.3-1.3 1.8-2.7 1.8H93.4c-.6 0-1.2-.2-2-.3zM61.1 639.7c0-8.3-.1-16.4.1-24.6h417.3c.2 8.2 0 16.4.1 24.6H61.1z"
        }
      ></path>

      <path
        d={
          "M399.2 200.5h-27.1c-1.3 0-2.2-.4-3-1.5-15.2-21.9-36.3-35.6-61.6-43.2-9.1-2.7-18.5-4.5-28-5.2-7.1-.5-14.2-.2-21.3.7-13.4 1.7-26.2 5.6-38.3 11.7-17.2 8.7-32 20.4-44.2 35.5-.7.8-1.3 1.5-2.5 1.4-8.6-.1-17.1 0-25.7 0-.3 0-.6-.1-1.1-.2l1-2c17.4-28.6 41.7-49 72.7-61.3 11.6-4.6 23.5-7.7 35.8-9.5 10.2-1.5 20.4-1.4 30.6-.2 14.7 1.7 28.9 5.3 42.5 11.2 19.7 8.5 36.8 20.9 51.3 36.7 6.5 7 12.3 14.5 17.3 22.7.5.7.9 1.5 1.3 2.3.3.2.2.4.3.9zM136.1 707.1c0-21.2 13.3-36.6 31.7-39.4 10.2-1.5 19.9 0 28.7 5.8 9.2 6.2 14.6 14.8 16 25.8 1.3 10.4-1.1 19.9-7.6 28.1-6.5 8.3-15.1 12.8-25.5 14-8.2 1-16.1-.2-23.5-4.1-13.1-6.8-19.5-18-19.8-30.2zm38.4-25.6c-5.2 0-9.9 1.4-13.6 4.5-7.6 6.4-10 14.7-7.9 24.2 3.6 16 20.8 22 33.2 14.1 8.6-5.5 11.3-13.9 10-23.7-1.4-11-10.8-19.1-21.7-19.1zm101.8 61.1c-14.8 0-24.8-4.2-32.5-13.1-5.4-6.2-8.2-13.6-8.6-21.9-.4-7.5 1-14.5 4.8-20.9 6.4-10.8 16-16.9 28.5-18.4 9.9-1.2 19.1.7 27.4 6.3 10.3 7 15.5 17 15.9 29.4.4 12.1-4.1 22.2-13.4 30-7.3 6-15.8 8.7-22.1 8.6zm-25.1-36.4c.3 1.4.4 4 1.2 6.4 2.6 8.1 8 13.4 16.3 15.2 8.4 1.8 15.8-.4 21.4-7.1 5.4-6.5 6.8-14 4.5-22.1-4.5-16.3-23.1-20.9-34.5-12.2-6 4.7-8.7 11.1-8.9 19.8zm86.8 34.4v-72c.7-.1 1.4-.2 2.1-.2 8.8 0 17.6-.1 26.4 0 10.6.2 20.2 3.3 27.8 11 7.9 8 10.8 17.7 9.8 28.7-.6 6.8-2.9 12.9-7.1 18.3-6.1 7.7-14.2 12-23.8 13.6-2.7.4-5.4.5-8.1.5-8.1.1-16.2 0-24.2 0-.8.1-1.7.1-2.9.1zm15.7-58c-.5 3.8-.3 42.1.2 43.9.4.1.9.2 1.4.2 4.1 0 8.2.1 12.2 0 4.1-.2 8-1.2 11.5-3.6 5.7-3.9 8.5-9.4 9.1-16.1 1.2-12.7-6.8-24.4-21.6-24.5h-10.8c-.7 0-1.3.1-2 .1zm71.3 48c2.9-3.5 5.9-7 8.9-10.6 2 1.3 3.8 2.6 5.6 3.7 5.1 3.2 10.6 5.1 16.8 4.9 2.4-.1 4.8-.4 6.9-1.7 2.8-1.7 3.9-4.5 2.9-7.6-.5-1.7-1.6-2.8-3.1-3.5-2.7-1.2-5.5-2.2-8.3-3.1-4.3-1.4-8.8-2.4-13.1-3.9-2.7-1-5.2-2.4-7.6-4.1-3.9-2.8-5.8-6.9-6.4-11.6-1.4-11.9 5-21.5 16.7-24.1 12.5-2.8 23.9-.1 34.2 7.5.1.1.2.2.3.4-.6 1.8-5.1 8.5-7.8 11.6-.6-.4-1.3-.8-2-1.2-4.5-2.8-9.2-5.2-14.6-5.6-2.2-.2-4.5 0-6.6.5-4.1 1-6 4.7-4.7 8.5.6 1.6 1.7 2.8 3.2 3.4 2.3 1 4.6 1.8 7 2.5 4.6 1.5 9.3 2.7 13.9 4.3 3.8 1.3 7.3 3.3 10 6.3 2.6 2.8 3.9 6.2 4.2 10 1 12.7-5.9 22-18.5 24.2-13.6 2.4-26-.8-36.9-9.4-.3-.2-.6-.5-.9-.8.1-.1 0-.2-.1-.6z"
        }
      ></path>

      <path
        d={
          "M336.1 200.2H209.4c.6-.7.9-1.2 1.4-1.6 7-6.4 15-11.1 23.8-14.6 11.1-4.5 22.6-7.3 34.6-8.2 5.8-.4 11.7.2 17.4 1.1 14.6 2.3 28.2 7.4 40.6 15.7 2.9 2 5.6 4.2 8.4 6.4.3.2.7.3 1.1.5-.3.1-.4.4-.6.7zM115.9 669.1v13.3c-1.1.1-2 .3-3 .3H80.3c-1.1 0-2.2.1-3.4.2v15.7c1.1.1 2.1.3 3.1.3h29.8c1.1 0 1.7.5 1.7 1.6 0 3.8 0 7.5-.1 11.3 0 .2-.2.4-.4 1H76.9c-.3 3.3-.1 6.3-.2 9.3v18.4c-2 .6-12.4.7-14.9.2-.6-1.8-.7-69-.1-71.5 1.8-.5 51.5-.6 54.2-.1zm398.4 10.7c-1.2-1.3-.6-2.6-.8-3.8-.1-1.3-.1-2.7-.2-4.1-.1-1.2-.2-2.5-.3-3.7-.2 0-.4-.1-.6-.1-1.5 3.9-2.9 7.8-4.4 11.7h-.5c-1.7-3.5-2.3-7.6-4-11.1-.2 0-.4.1-.6.1-.1 1.9-.1 3.7-.2 5.6-.1 1.7.3 3.6-1 5.6-.2-.8-.4-1.1-.4-1.5.2-3.7.5-7.5.8-11.2 0-.5.4-1.1.8-1.2.7-.3 1.1.3 1.3 1 .9 2.8 1.9 5.6 2.8 8.4.2.6.5 1.1.9 2.1.5-1.2.9-2 1.2-2.8.8-2.3 1.7-4.7 2.5-7 .2-.4.3-.9.6-1.3.6-.8 1.5-.6 1.8.3.1.2.1.5.1.7l.6 10.8c0 .4-.3.8-.4 1.5zm-15.2-12.9c-1.2.1-2.4.2-3.9.4-.5 4.1.1 8.3-.3 12.5-1-.2-1-.9-1-1.5v-8.4c0-.9-.1-1.7-.1-2.6-1.5-.1-2.8-.3-4.5-.4 1.9-1.1 7.7-1.1 9.8 0z"
        }
      ></path>

      <path
        d={
          "M110 466.1c-.7-2.4-.7-30.7 0-33.1h5.9c6.6.1 13.3.2 19.9.4 3.4.1 6.7.8 9.7 2.4 4.9 2.6 7.4 6.7 7.3 12.2-.1 2-.3 4-.8 5.9-1.6 6.1-6 9.5-11.8 11.1-2.5.7-5.2 1.1-7.8 1.1-6.6.1-13.3 0-19.9 0-.9.1-1.7 0-2.5 0zm64.5 215.4c10.9 0 20.4 8.2 21.8 19.1 1.3 9.8-1.4 18.3-10 23.7-12.4 7.9-29.6 1.8-33.2-14.1-2.1-9.4.3-17.8 7.9-24.2 3.6-3.1 8.2-4.5 13.5-4.5zm76.7 24.7c.3-8.7 2.9-15.1 9-19.7 11.4-8.7 30-4.1 34.5 12.2 2.2 8.1.8 15.6-4.5 22.1-5.6 6.7-13 8.9-21.4 7.1-8.3-1.8-13.8-7.1-16.3-15.2-.9-2.5-1.1-5.1-1.3-6.5zm102.5-23.6c.7-.1 1.4-.2 2-.2h10.8c14.8.1 22.8 11.9 21.6 24.5-.6 6.7-3.4 12.2-9.1 16.1-3.5 2.4-7.4 3.4-11.5 3.6-4.1.2-8.1.1-12.2 0-.5 0-.9-.1-1.4-.2-.6-1.7-.8-39.9-.2-43.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default Rclsvg3Icon
/* prettier-ignore-end */