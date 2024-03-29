// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Sapsvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Sapsvg2Icon(props: Sapsvg2IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-8.529 0 98.31 44.711"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <linearGradient
        id={"CbXuVXNTZa"}
        gradientTransform={"matrix(0 46.3769 46.3769 0 44.859 .024)"}
        gradientUnits={"userSpaceOnUse"}
        x2={".957"}
      >
        <stop offset={"0"} stopColor={"#00b8f1"}></stop>

        <stop offset={".22"} stopColor={"#06a5e5"}></stop>

        <stop offset={".794"} stopColor={"#1870c5"}></stop>

        <stop offset={"1"} stopColor={"#1d61bc"}></stop>
      </linearGradient>

      <path
        d={"M0 0v44.415h45.371L89.781.005H0z"}
        fill={"url(#CbXuVXNTZa)"}
      ></path>

      <path
        d={
          "M57.469 39.875v3.313h.5V41.75h.562l.906 1.438H60l-.969-1.438c.484-.06.875-.342.875-.938 0-.652-.4-.937-1.187-.937zm.5.438h.687c.338 0 .719.054.719.468 0 .517-.386.563-.813.563h-.593zm.625-1.657c-1.586 0-2.938 1.222-2.938 2.875 0 1.665 1.352 2.906 2.938 2.906a2.868 2.868 0 002.875-2.906c0-1.653-1.311-2.875-2.875-2.875zm0 .469c1.294 0 2.312 1.045 2.312 2.406 0 1.384-1.018 2.406-2.312 2.406-1.316 0-2.375-1.022-2.375-2.406 0-1.36 1.059-2.406 2.375-2.406z"
        }
        fill={"#1870c5"}
      ></path>

      <path
        d={
          "M53.797 21.252h-1.946v-7.117h1.946c2.598 0 4.666.856 4.666 3.513 0 2.744-2.068 3.604-4.666 3.604M32.852 26.34a8.083 8.083 0 01-2.831-.502l2.803-8.84h.06l2.745 8.864a8.251 8.251 0 01-2.774.478M53.281 8.353h-8.837v21.013l-7.72-21.013h-7.652l-6.596 17.568c-.697-4.428-5.284-5.961-8.89-7.104-2.377-.765-4.907-1.889-4.884-3.134.02-1.018 1.359-1.962 4-1.821 1.78.09 3.35.234 6.467 1.741l3.07-5.348C19.395 8.802 15.454 7.89 12.23 7.883h-.02c-3.761 0-6.895 1.226-8.839 3.233-1.351 1.404-2.082 3.18-2.115 5.157-.05 2.708.947 4.63 3.034 6.167 1.766 1.294 4.019 2.127 6.009 2.751 2.455.757 4.459 1.418 4.436 2.827-.02.513-.211.994-.582 1.374-.611.635-1.55.87-2.849.899-2.504.05-4.361-.34-7.319-2.088l-2.729 5.423a20.39 20.39 0 0010.003 2.661h.461c3.1-.06 5.604-.945 7.605-2.553l.324-.283-.884 2.376h8.025l1.348-4.099c1.41.477 3.016.745 4.716.745 1.659 0 3.224-.25 4.609-.706l1.296 4.06h13.094v-8.49h2.857c6.9 0 10.986-3.512 10.986-9.406 0-6.56-3.968-9.569-12.416-9.569"
        }
        fill={"#fff"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  )
}

export default Sapsvg2Icon
/* prettier-ignore-end */
