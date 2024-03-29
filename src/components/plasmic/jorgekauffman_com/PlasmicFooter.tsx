// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ajBd7QwKoQEZw4eSnuM8eE
// Component: phpFMNl3Ac
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

import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_jorgekauffman_com.module.css" // plasmic-import: ajBd7QwKoQEZw4eSnuM8eE/projectcss
import * as sty from "./PlasmicFooter.module.css" // plasmic-import: phpFMNl3Ac/css

import CopyrightRegularsvgIcon from "./icons/PlasmicIcon__CopyrightRegularsvg" // plasmic-import: BhBmWA559J/icon

export type PlasmicFooter__VariantMembers = {}

export type PlasmicFooter__VariantsArgs = {}
type VariantPropType = keyof PlasmicFooter__VariantsArgs
export const PlasmicFooter__VariantProps = new Array<VariantPropType>()

export type PlasmicFooter__ArgsType = {}
type ArgPropType = keyof PlasmicFooter__ArgsType
export const PlasmicFooter__ArgProps = new Array<ArgPropType>()

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">
  svg?: p.Flex<"svg">
}

export interface DefaultFooterProps {
  className?: string
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs
  args: PlasmicFooter__ArgsType
  overrides: PlasmicFooter__OverridesType
  dataFetches?: PlasmicFooter__Fetches
  forNode?: string
}) {
  const { variants, args, overrides, forNode, dataFetches } = props

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__dp7Jw)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__bchV
          )}
        >
          {"2021"}
        </div>

        <CopyrightRegularsvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(defaultcss.all, sty.svg)}
          role={"img"}
        />

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__edRJ
          )}
        >
          {"Jorge Kauffman"}
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
  svg: "svg"
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicFooter__VariantsArgs
  args?: PlasmicFooter__ArgsType
  overrides?: NodeOverridesType<T>
  dataFetches?: PlasmicFooter__Fetches
} & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter"
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`
  }
  return func
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps,
  }
)

export default PlasmicFooter
/* prettier-ignore-end */
