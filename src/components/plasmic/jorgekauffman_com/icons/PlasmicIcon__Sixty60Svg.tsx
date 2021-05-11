// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Sixty60SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Sixty60SvgIcon(props: Sixty60SvgIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.2"}
      baseProfile={"tiny"}
      overflow={"visible"}
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

      <switch>
        <g>
          <g fill={"currentColor"}>
            <path
              d={
                "M217.64 64.8h-14.08l-13.07 21.19-14.74-21.19h-14.41l20.55 29.55-20.33 31.9h14.19l13.18-21.75 15.08 21.75 14.41-.01-21.11-30.44zm-74.98 0h12.74v61.45h-12.74zm102.73 48.4c-1.3-1.34-1.96-3.75-1.96-7.25V75.62h14.86V64.8h-36.53v10.82h8.83v30.11c0 7.36 1.69 12.62 5.08 15.78s8.36 4.74 14.92 4.74h7.82v-11.04h-6.14c-3.29-.01-5.58-.68-6.88-2.01m66.24-48.4l-17.09 45.17-18.43-45.17h-14.3l25.92 60-13.29 30.66h14.18l37.2-90.66zm-178.5 33.8a17.2 17.2 0 00-3.93-3.92c-1.67-1.19-3.52-2.1-5.49-2.7-.81-.23-2.14-.59-4-1.07l-5.7-1.5c-1.94-.51-3.7-.98-5.27-1.41-1.58-.43-2.49-.67-2.71-.73-1.81-.47-3.51-1.37-4.9-2.57-1.2-1.15-1.84-2.77-1.75-4.5-.04-1.19.28-2.35.92-3.33a7.03 7.03 0 012.4-2.17c1.05-.57 2.18-.97 3.36-1.2 1.21-.24 2.45-.37 3.73-.37 3.06-.12 6.08.67 8.66 2.29 2.16 1.46 3.39 4.05 3.65 7.7l.06.8h12.35l.02-.83c.16-5.95-2.58-11.65-7.33-15.25a23.173 23.173 0 00-7.74-3.87c-2.95-.85-6.01-1.28-9.08-1.28-2.88 0-5.78.35-8.57 1.1-2.68.69-5.2 1.84-7.48 3.42a18.182 18.182 0 00-5.37 5.9 16.74 16.74 0 00-2.03 8.41c0 1.67.23 3.33.68 4.94a13.91 13.91 0 002.34 4.66 16.47 16.47 0 004.39 3.93c2.11 1.28 4.4 2.22 6.78 2.79 4.24 1.15 7.83 2.08 10.69 2.79 2.53.61 5.06 1.36 7.49 2.23 1.2.45 2.28 1.19 3.11 2.09 1.04 1.29 1.54 2.92 1.4 4.64 0 1.05-.21 2.08-.62 3.05a6.774 6.774 0 01-1.97 2.61c-1.12.88-2.38 1.54-3.74 1.95-1.86.56-3.8.83-5.76.78-1.98.02-3.92-.22-5.83-.7-1.68-.42-3.23-1.15-4.62-2.17a9.994 9.994 0 01-3.07-3.73c-.79-1.75-1.18-3.69-1.13-5.62l.02-.88H84.64l-.01.85c-.03 3.49.74 7 2.23 10.17 1.33 2.76 3.31 5.22 5.74 7.12 2.51 1.91 5.32 3.28 8.35 4.09 3.22.87 6.53 1.32 9.86 1.32h.26c3.06 0 6.12-.37 9.08-1.09 2.89-.68 5.61-1.86 8.08-3.5 2.37-1.6 4.38-3.75 5.8-6.25 1.54-2.82 2.3-6 2.21-9.18 0-1.71-.26-3.41-.77-5.04-.5-1.73-1.3-3.33-2.34-4.77"
              }
            ></path>

            <path
              d={
                "M320.66 197.6c-15.08-14.17-35.22-22.82-57.35-22.82-46.74 0-84.63 38.63-84.63 86.27 0 47.65 37.89 86.27 84.63 86.27 46.74 0 84.63-38.63 84.63-86.27 0-19.23-6.17-36.99-16.61-51.34l-58.85 66.12c-3.05 3.43-8.26 3.7-11.53.6l-34.11-32.34L238 232.15l28.15 26.69 54.51-61.24zM263.31 380c-64.45 0-116.69-53.26-116.69-118.95 0-65.7 52.24-118.95 116.69-118.95S380 195.35 380 261.05C380 326.74 327.76 380 263.31 380"
              }
            ></path>

            <path
              d={
                "M98.21 310.31c-25.56 0-46.29-21.11-46.29-47.16s20.72-47.16 46.29-47.16c25.56 0 46.29 21.11 46.29 47.16s-20.73 47.16-46.29 47.16m4.06-126.74l33.63-41.48H94.82L35.1 215.75l.15.12C25.66 229.1 20 245.45 20 263.15c0 44.01 35.01 79.68 78.21 79.68 43.19 0 78.21-35.67 78.21-79.68-.01-42.62-32.84-77.42-74.15-79.58m211.9-148.84l10.41-.04-.02-.37c-.32-7.52-7.98-9.15-13.98-9.12-4.13.02-9.58 1.04-12.12 4.6l-.02-4.04-.27-.07c-1.05-.27-2.1-.43-3.22-.43-3.62.01-5.9 1.58-7.6 4.38l-.01-3.65-10.95.04.12 28.68 11.39-.05-.05-11.4c-.03-5.86 2.14-8.11 6.07-8.12 1.51-.01 2.41.15 3.19.37.48 4.42 4.1 6.79 11.7 8.07 5.09.86 5.58 1.33 5.59 2.59 0 1.23-1.77 1.8-3.24 1.81-1.25 0-2.18-.31-2.62-.71-.75-.64-1.13-1.37-1.18-2.23l-.02-.34-10.89.04.01.37c.2 7.55 7.77 10.18 14.36 10.15 6.77-.03 14.57-2.16 14.54-10.27-.02-4.81-3.35-6.99-6.96-8.12-1.8-.59-3.72-.94-5.41-1.23-.83-.14-1.61-.28-2.3-.42-.68-.14-1.23-.29-1.65-.46-.6-.27-1.03-.56-1.03-1.12-.01-1.45 1.31-1.8 2.87-1.81.79 0 1.58.25 2.16.73.63.43 1.06 1.05 1.11 1.83l.02.34zm-58.25 8.48l20.43-.08v-.36c-.05-11.04-4.99-17.42-16.33-17.37-9.05.04-15.09 6.86-15.06 15.18.04 9.56 7 14.93 16.1 14.89 6.45-.02 12.49-2.9 14.69-9.13l.17-.48-10.67.04-.11.17c-.76 1.2-2.5 1.84-4.16 1.84-2.98.02-4.68-1.87-5.06-4.7m.06-6.26c.54-2.58 2.2-3.98 5.05-3.99 2.41-.01 4.16 1.73 4.33 3.95l-9.38.04zm-17.03.19l10.3-11-13.07.05-6.23 7.48.07-13.67-11.39.04.02 34.9 11.38-.05-.04-8.3 1.45-1.59 5.61 9.86 13.7-.06-11.8-17.66zm-39.65 3.57c-.02-3.44.58-6.59 4.3-6.61 1.06 0 1.89.3 2.46.82.61.51.97 1.32 1.08 2.4l.03.32 10.85-.04-.03-.39c-.7-7.95-7.2-11.61-14.63-11.58-8.58.03-15.47 6.07-15.43 15.13.04 9.05 6.98 14.98 15.56 14.95 7.69-.03 13.83-4.41 14.85-12.22l.05-.41-10.92.04-.03.32c-.19 2.07-1.68 3.78-3.78 3.79-3.73.02-4.35-3.08-4.36-6.52m-31.99 2.86l20.43-.08v-.36c-.05-11.04-4.99-17.42-16.33-17.37-9.05.04-15.09 6.86-15.06 15.18.04 9.56 7 14.93 16.1 14.89 6.45-.03 12.49-2.9 14.68-9.13l.17-.48-10.67.04-.1.16c-.76 1.2-2.5 1.84-4.16 1.84-2.97.03-4.68-1.86-5.06-4.69m.06-6.26c.54-2.58 2.2-3.98 5.05-3.99 2.41-.01 4.15 1.73 4.33 3.95l-9.38.04zm-22.94 17.61l11.39-.05-.08-19.54c-.03-6.65-4.83-9.82-9.99-9.8-4.21.02-6.64 1.36-8.46 3.28l.1-8.78-11.39.05.02 34.9 11.38-.05-.07-15.12c-.02-4.25 2.22-5.04 3.88-5.05 2.75-.01 3.15 1.84 3.17 5.12l.05 15.04zM99.08 38.06c.02-4.43 1.83-8.73 7.08-8.7 4.64.03 5.66 3.44 5.87 4.63l.05.26 12.35.08-.04-.34c-1.01-8.43-7.01-13.39-17.85-13.46-12.17-.13-20.08 6.9-20.13 17.44-.05 9.89 7.17 17.62 19.95 17.7 11.57.08 18.12-7.09 18.15-13.9v-.31l-12.4-.08-.06.25c-.71 3.04-2.23 5.23-5.98 5.2-5.24-.01-7.01-4.33-6.99-8.77"
              }
            ></path>
          </g>
        </g>
      </switch>
    </svg>
  )
}

export default Sixty60SvgIcon
/* prettier-ignore-end */