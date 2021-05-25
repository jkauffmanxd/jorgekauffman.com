// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type MoodlesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function MoodlesvgIcon(props: MoodlesvgIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1230.87 315.18"}
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
            d={
              "M289.61 309.77V201.51q0-33.94-28-33.95t-28.06 33.95v108.26H178.4V201.51q0-33.94-27.57-33.95-28.05 0-28 33.95v108.26H67.67V195.12q0-35.43 24.6-53.63 21.66-16.25 58.56-16.25 37.41 0 55.12 19.19 15.26-19.19 55.62-19.19 36.9 0 58.54 16.25 24.6 18.19 24.61 53.63v114.65zm675.49-.5V0h55.16v309.27zm-70.3 0v-18.22q-7.39 9.84-25.11 15.76a92.81 92.81 0 01-30.05 5.41q-39.4 0-63.28-27.09t-23.89-67c0-26.25 7.76-48.3 23.4-66 13.85-15.65 36.35-26.59 62.29-26.59 29.22 0 46.28 11 56.64 23.63V0h53.68v309.27zm0-102.92q0-14.78-14-28.33T852 164.47q-21.16 0-33.48 17.24-10.85 15.3-10.84 37.43 0 21.68 10.84 36.94 12.3 17.75 33.48 17.73 12.81 0 27.83-12.07t15-24.86zM648.57 314.19q-41.87 0-69.19-26.59T552 219.14q0-41.83 27.34-68.45t69.19-26.59q41.85 0 69.44 26.59t27.58 68.45q0 41.88-27.58 68.46t-69.4 26.59zm0-145.77q-19.94 0-30.65 15.1t-10.71 35.88q0 20.78 10 35.13 11.46 16.34 31.4 16.32T680 254.53q10.46-14.34 10.46-35.13t-10-35.13q-11.46-15.86-31.89-15.85zM449.13 314.19q-41.86 0-69.2-26.59t-27.33-68.46q0-41.83 27.33-68.45t69.2-26.59q41.83 0 69.44 26.59t27.57 68.45q0 41.88-27.57 68.46t-69.44 26.59zm0-145.77q-19.94 0-30.66 15.1t-10.71 35.88q0 20.78 10 35.13 11.46 16.34 31.41 16.32t31.39-16.32Q491 240.19 491 219.4t-10-35.13q-11.44-15.86-31.87-15.85zm636.45 67.47c1.18 13.13 18.25 41.37 46.31 41.37 27.31 0 40.23-15.77 40.87-22.16l58.11-.5c-6.34 19.39-32.1 60.58-100 60.58-28.24 0-54.08-8.79-72.64-26.35s-27.82-40.45-27.82-68.7q0-43.83 27.82-69.68t72.16-25.85q48.25 0 75.34 32 25.13 29.53 25.12 79.28zm90.13-34c-2.3-11.83-7.23-21.49-14.77-29.06q-12.82-12.3-29.55-12.31-17.25 0-28.82 11.82t-15.5 29.55z"
            }
            fill={"#f98012"}
          ></path>

          <path
            d={
              "M174.74 116.9l54.74-40-.7-2.44C130 86.57 85.08 95.15 0 144.47l.79 2.24 6.76.07c-.62 6.81-1.7 23.64-.32 48.95-9.44 27.32-.24 45.88 8.4 66.07 1.37-21 1.23-44-5.22-66.89-1.35-25.14-.24-41.67.37-48.1l56.4.54a258 258 0 001.67 33.06c50.4 17.71 101.09-.06 128-43.72-7.47-8.37-22.11-19.79-22.11-19.79z"
            }
            fill={"#333"}
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default MoodlesvgIcon
/* prettier-ignore-end */
