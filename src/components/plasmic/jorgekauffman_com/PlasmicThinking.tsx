// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ajBd7QwKoQEZw4eSnuM8eE
// Component: 0MEk3eKkQO
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
import * as sty from "./PlasmicThinking.module.css" // plasmic-import: 0MEk3eKkQO/css

export type PlasmicThinking__VariantMembers = {}

export type PlasmicThinking__VariantsArgs = {}
type VariantPropType = keyof PlasmicThinking__VariantsArgs
export const PlasmicThinking__VariantProps = new Array<VariantPropType>()

export type PlasmicThinking__ArgsType = {}
type ArgPropType = keyof PlasmicThinking__ArgsType
export const PlasmicThinking__ArgProps = new Array<ArgPropType>()

export type PlasmicThinking__OverridesType = {
  root?: p.Flex<"div">
}

export interface DefaultThinkingProps {
  className?: string
}

function PlasmicThinking__RenderFunc(props: {
  variants: PlasmicThinking__VariantsArgs
  args: PlasmicThinking__ArgsType
  overrides: PlasmicThinking__OverridesType
  dataFetches?: PlasmicThinking__Fetches
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
      <div className={classNames(defaultcss.all, sty.box__jlrus)}>
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__bTfd2
          )}
        >
          {"Thinking Spheres"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__te6Eh
          )}
        >
          {"Strategic Thinking"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__qazGq
          )}
        >
          {"• Always learning\r\n• Always seek advice\r\n• Result oriented"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___52KC8
          )}
        >
          {"Design Thinking"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__sDWvx
          )}
        >
          {
            "• A process for innovation\r\n• Collaborative Wicked Problem solving\r\n• Abductive reasoning"
          }
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__faX9D
          )}
        >
          {"Experience Thinking"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__fnPgq
          )}
        >
          {
            "• Love the problem, not the solution\r\n• Human Centered Design\r\n• Experiences are made of software, services, events and products"
          }
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__sv4Yf
          )}
        >
          {"Success factors"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__zcjtf
          )}
        >
          {
            "• Experience: Make them care\r\n• Service: Optimize the journey\r\n• Content: Governance, strategy and process\r\n• Product: Accessible human Centered interaction design"
          }
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___3GFez
          )}
        >
          {"Your perspective.\r\nMy expertise.\r\nCollaborative solutions."}
        </div>
      </div>
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
  PlasmicThinking__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicThinking__VariantsArgs
  args?: PlasmicThinking__ArgsType
  overrides?: NodeOverridesType<T>
  dataFetches?: PlasmicThinking__Fetches
} & Omit<PlasmicThinking__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicThinking__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicThinking__ArgProps,
      internalVariantPropNames: PlasmicThinking__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicThinking__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicThinking"
  } else {
    func.displayName = `PlasmicThinking.${nodeName}`
  }
  return func
}

export const PlasmicThinking = Object.assign(
  // Top-level PlasmicThinking renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicThinking
    internalVariantProps: PlasmicThinking__VariantProps,
    internalArgProps: PlasmicThinking__ArgProps,
  }
)

export default PlasmicThinking
/* prettier-ignore-end */
