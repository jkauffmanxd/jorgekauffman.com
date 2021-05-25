// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ajBd7QwKoQEZw4eSnuM8eE
// Component: DzWC2yemzg
import * as React from "react"

import { Link, GatsbyLinkProps as LinkProps } from "gatsby"

import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen" // plasmic-import: 7Ert-5G3sU4L/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_jorgekauffman_com.module.css" // plasmic-import: ajBd7QwKoQEZw4eSnuM8eE/projectcss
import * as sty from "./PlasmicHow.module.css" // plasmic-import: DzWC2yemzg/css

import VisualDesignersvgIcon from "./icons/PlasmicIcon__VisualDesignersvg" // plasmic-import: V8kSV91ys/icon
import DigitalTransformationsvgIcon from "./icons/PlasmicIcon__DigitalTransformationsvg" // plasmic-import: yKZIrPKYDm/icon

export type PlasmicHow__VariantMembers = {}

export type PlasmicHow__VariantsArgs = {}
type VariantPropType = keyof PlasmicHow__VariantsArgs
export const PlasmicHow__VariantProps = new Array<VariantPropType>()

export type PlasmicHow__ArgsType = {}
type ArgPropType = keyof PlasmicHow__ArgsType
export const PlasmicHow__ArgProps = new Array<ArgPropType>()

export type PlasmicHow__OverridesType = {
  root?: p.Flex<"div">
  uiux?: p.Flex<"div">
  dtoc?: p.Flex<"div">
}

export interface DefaultHowProps {
  className?: string
}

function PlasmicHow__RenderFunc(props: {
  variants: PlasmicHow__VariantsArgs
  args: PlasmicHow__ArgsType
  overrides: PlasmicHow__OverridesType
  dataFetches?: PlasmicHow__Fetches
  forNode?: string
}) {
  const { variants, args, overrides, forNode, dataFetches } = props

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  })

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__aWjEx)}>
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__vdePe
          )}
        >
          {"How?"}
        </div>

        {(hasVariant(globalVariants, "screen", "desktopOnly") ? true : true) ? (
          <div className={classNames(defaultcss.all, sty.box__gSde)}>
            <div
              data-plasmic-name={"uiux"}
              data-plasmic-override={overrides.uiux}
              className={classNames(defaultcss.all, sty.uiux)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__lEy2B
                )}
              >
                {"UI+UX"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__z8Yc6
                )}
              >
                {"Visual Designer \nInteraction Developer"}
              </div>

              <VisualDesignersvgIcon
                className={classNames(defaultcss.all, sty.svg__hADrI)}
                role={"img"}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__cS2No
                )}
              >
                {"Content creation\nMultimedia production\nInterface design"}
              </div>
            </div>

            <div
              data-plasmic-name={"dtoc"}
              data-plasmic-override={overrides.dtoc}
              className={classNames(defaultcss.all, sty.dtoc)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__mWpyl
                )}
              >
                {"DT+OC"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__koJvI
                )}
              >
                {"Digital Transformer\nChange Agent"}
              </div>

              <DigitalTransformationsvgIcon
                className={classNames(defaultcss.all, sty.svg__zx65)}
                role={"img"}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___2DsVi
                )}
              >
                {"Learning & Development\nInternal Communications"}
              </div>
            </div>
          </div>
        ) : null}

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__ww1II
          )}
        >
          {"Result oriented via strategy, \r\nempathy and artistry"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ["root", "uiux", "dtoc"],
  uiux: ["uiux"],
  dtoc: ["dtoc"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
  uiux: "div"
  dtoc: "div"
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHow__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHow__VariantsArgs
  args?: PlasmicHow__ArgsType
  overrides?: NodeOverridesType<T>
  dataFetches?: PlasmicHow__Fetches
} & Omit<PlasmicHow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHow__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key }
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHow__ArgProps,
      internalVariantPropNames: PlasmicHow__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicHow__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHow"
  } else {
    func.displayName = `PlasmicHow.${nodeName}`
  }
  return func
}

export const PlasmicHow = Object.assign(
  // Top-level PlasmicHow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    uiux: makeNodeComponent("uiux"),
    dtoc: makeNodeComponent("dtoc"),

    // Metadata about props expected for PlasmicHow
    internalVariantProps: PlasmicHow__VariantProps,
    internalArgProps: PlasmicHow__ArgProps,
  }
)

export default PlasmicHow
/* prettier-ignore-end */
