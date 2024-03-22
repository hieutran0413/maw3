// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pAxFtMZvG1P122TfNRy6Mn
// Component: 4RXjgAjZS5WW

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: k9iE2OzwPgTL/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: pAxFtMZvG1P122TfNRy6Mn/projectcss
import sty from "./PlasmicHeroTitle.module.css"; // plasmic-import: 4RXjgAjZS5WW/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: mSWDjRsjR86D/icon

createPlasmicElementProxy;

export type PlasmicHeroTitle__VariantMembers = {};
export type PlasmicHeroTitle__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeroTitle__VariantsArgs;
export const PlasmicHeroTitle__VariantProps = new Array<VariantPropType>();

export type PlasmicHeroTitle__ArgsType = {};
type ArgPropType = keyof PlasmicHeroTitle__ArgsType;
export const PlasmicHeroTitle__ArgProps = new Array<ArgPropType>();

export type PlasmicHeroTitle__OverridesType = {
  heroTitle?: Flex__<"div">;
  titles?: Flex__<"div">;
  frame9?: Flex__<"div">;
};

export interface DefaultHeroTitleProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeroTitle__RenderFunc(props: {
  variants: PlasmicHeroTitle__VariantsArgs;
  args: PlasmicHeroTitle__ArgsType;
  overrides: PlasmicHeroTitle__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"heroTitle"}
      data-plasmic-override={overrides.heroTitle}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.heroTitle
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"titles"}
        data-plasmic-override={overrides.titles}
        hasGap={true}
        className={classNames(projectcss.all, sty.titles)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rJolY
          )}
        >
          {"A new chapter in education excellent"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__n7Ky
          )}
        >
          {
            "Where experts and educators share knowledge, combining simplicity with powerful content-creation tools."
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"frame9"}
        data-plasmic-override={overrides.frame9}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame9)}
      >
        <Button
          className={classNames("__wab_instance", sty.button__dAAfD)}
          color={"outlineBlue"}
        >
          {"Contact Us"}
        </Button>
        <Button className={classNames("__wab_instance", sty.button___72Esb)}>
          {"Try it Free"}
        </Button>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  heroTitle: ["heroTitle", "titles", "frame9"],
  titles: ["titles"],
  frame9: ["frame9"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  heroTitle: "div";
  titles: "div";
  frame9: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeroTitle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeroTitle__VariantsArgs;
    args?: PlasmicHeroTitle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeroTitle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeroTitle__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeroTitle__ArgProps,
          internalVariantPropNames: PlasmicHeroTitle__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeroTitle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "heroTitle") {
    func.displayName = "PlasmicHeroTitle";
  } else {
    func.displayName = `PlasmicHeroTitle.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroTitle = Object.assign(
  // Top-level PlasmicHeroTitle renders the root element
  makeNodeComponent("heroTitle"),
  {
    // Helper components rendering sub-elements
    titles: makeNodeComponent("titles"),
    frame9: makeNodeComponent("frame9"),

    // Metadata about props expected for PlasmicHeroTitle
    internalVariantProps: PlasmicHeroTitle__VariantProps,
    internalArgProps: PlasmicHeroTitle__ArgProps
  }
);

export default PlasmicHeroTitle;
/* prettier-ignore-end */
