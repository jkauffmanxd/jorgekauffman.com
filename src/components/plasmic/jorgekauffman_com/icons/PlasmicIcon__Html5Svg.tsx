// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Html5SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Html5SvgIcon(props: Html5SvgIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"221.807 89.47 440 621.061"}
      enableBackground={"new 221.807 89.47 440 621.061"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <filter
        id={"dJdCimO5oa"}
        width={"150%"}
        height={"150%"}
        x={"-5%"}
        y={"-5%"}
      >
        <feFlood
          floodColor={"#000"}
          result={"floodFill"}
          floodOpacity={".5"}
        ></feFlood>

        <feComposite
          in={"floodFill"}
          in2={"SourceAlpha"}
          operator={"in"}
          result={"coloredAlpha"}
        ></feComposite>

        <feGaussianBlur
          in={"coloredAlpha"}
          result={"blur"}
          stdDeviation={"8"}
        ></feGaussianBlur>

        <feComposite
          in={"blur"}
          in2={"SourceGraphic"}
          operator={"out"}
          result={"maskedOffsetBlur"}
        ></feComposite>

        <feMerge>
          <feMergeNode in={"maskedOffsetBlur"}></feMergeNode>

          <feMergeNode in={"SourceGraphic"}></feMergeNode>
        </feMerge>
      </filter>

      <g filter={"url(#dJdCimO5oa)"}>
        <path
          fill={"#e44d26"}
          d={
            "M261.849 660.647l-40.042-449.125h440l-40.086 449.054-180.184 49.954z"
          }
        ></path>

        <path
          fill={"#f16529"}
          d={"M441.807 672.348l145.596-40.367 34.258-383.735H441.807z"}
        ></path>

        <path
          fill={"#ebebeb"}
          d={
            "M441.807 414.82h-72.888l-5.035-56.406h77.923V303.33H303.683l1.32 14.778 13.538 151.794h123.266zm0 143.056l-.242.066-61.346-16.566-3.922-43.93h-55.294l7.718 86.489 112.834 31.323.252-.071z"
          }
        ></path>

        <path
          d={
            "M262.745 89.47h27.992v27.656h25.606V89.47h27.993v83.75h-27.993v-28.044h-25.606v28.044h-27.99l-.002-83.75zm118.404 27.774h-24.642V89.47H433.8v27.774h-24.654v55.976H381.15v-55.976h-.001zm64.916-27.774h29.19l17.955 29.428 17.938-29.428h29.2v83.75h-27.882v-41.512l-19.259 29.778h-.481l-19.272-29.778v41.512h-27.39V89.47zm108.212 0h28v56.068h39.368v27.682h-67.368V89.47z"
          }
        ></path>

        <path
          fill={"#fff"}
          d={
            "M441.617 414.82v55.082h67.83l-6.395 71.44-61.435 16.58v57.307l112.924-31.294.826-9.309 12.946-145.014 1.344-14.792h-14.842zm0-111.49v55.084H574.67l1.103-12.382 2.51-27.924 1.318-14.778z"
          }
        ></path>
      </g>
    </svg>
  )
}

export default Html5SvgIcon
/* prettier-ignore-end */