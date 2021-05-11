// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ajBd7QwKoQEZw4eSnuM8eE
// Component: XMg4kg4uAM
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
import * as sty from "./PlasmicPortfolioTopic.module.css" // plasmic-import: XMg4kg4uAM/css

import Icon6Icon from "./icons/PlasmicIcon__Icon6" // plasmic-import: FePj_Q3I0I/icon

export type PlasmicPortfolioTopic__VariantMembers = {}

export type PlasmicPortfolioTopic__VariantsArgs = {}
type VariantPropType = keyof PlasmicPortfolioTopic__VariantsArgs
export const PlasmicPortfolioTopic__VariantProps = new Array<VariantPropType>()

export type PlasmicPortfolioTopic__ArgsType = {
  children?: React.ReactNode
  slot?: React.ReactNode
}

type ArgPropType = keyof PlasmicPortfolioTopic__ArgsType
export const PlasmicPortfolioTopic__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
)

export type PlasmicPortfolioTopic__OverridesType = {
  root?: p.Flex<"div">
}

export interface DefaultPortfolioTopicProps {
  children?: React.ReactNode
  slot?: React.ReactNode
  className?: string
}

function PlasmicPortfolioTopic__RenderFunc(props: {
  variants: PlasmicPortfolioTopic__VariantsArgs
  args: PlasmicPortfolioTopic__ArgsType
  overrides: PlasmicPortfolioTopic__OverridesType
  dataFetches?: PlasmicPortfolioTopic__Fetches
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
      <div className={classNames(defaultcss.all, sty.box__s34N7)}>
        <div className={classNames(defaultcss.all, sty.box__rDYjL)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon6Icon
                className={classNames(defaultcss.all, sty.svg___9Pmst)}
                role={"img"}
              />
            ),

            value: args.slot,
          })}
        </div>

        <div className={classNames(defaultcss.all, sty.box__q61Rk)}>
          {p.renderPlasmicSlot({
            defaultContents: "Learning",
            value: args.children,
            className: classNames(sty.slotChildren),
          })}
        </div>
      </div>

      <img
        alt={""}
        className={classNames(defaultcss.img, sty.img__fgVhN)}
        role={"img"}
      />

      <img
        alt={""}
        className={classNames(defaultcss.img, sty.img__wqNc3)}
        role={"img"}
      />

      <img
        alt={""}
        className={classNames(defaultcss.img, sty.img___0Do5R)}
        role={"img"}
      />

      <img
        alt={""}
        className={classNames(defaultcss.img, sty.img__reRkV)}
        role={"img"}
      />

      <img
        alt={""}
        className={classNames(defaultcss.img, sty.img__bBpx1)}
        role={"img"}
      />

      <img
        alt={""}
        className={classNames(defaultcss.img, sty.img__gyS8G)}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ["root"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPortfolioTopic__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicPortfolioTopic__VariantsArgs
  args?: PlasmicPortfolioTopic__ArgsType
  overrides?: NodeOverridesType<T>
  dataFetches?: PlasmicPortfolioTopic__Fetches
} & Omit<PlasmicPortfolioTopic__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicPortfolioTopic__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPortfolioTopic__ArgProps,
      internalVariantPropNames: PlasmicPortfolioTopic__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicPortfolioTopic__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicPortfolioTopic"
  } else {
    func.displayName = `PlasmicPortfolioTopic.${nodeName}`
  }
  return func
}

export const PlasmicPortfolioTopic = Object.assign(
  // Top-level PlasmicPortfolioTopic renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPortfolioTopic
    internalVariantProps: PlasmicPortfolioTopic__VariantProps,
    internalArgProps: PlasmicPortfolioTopic__ArgProps,
  }
)

export default PlasmicPortfolioTopic
/* prettier-ignore-end */