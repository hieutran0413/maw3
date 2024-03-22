// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pAxFtMZvG1P122TfNRy6Mn
// Component: dITpbX7WZfr4

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

import { useScreenVariants as useScreenVariantsqNDsOoLtorJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: qNDsOOLtor-j/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: pAxFtMZvG1P122TfNRy6Mn/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: dITpbX7WZfr4/css

import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: vhQc0NJNcqcr/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: mSWDjRsjR86D/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: XbuSmLyuZiyx/icon
import BrandIcon from "./icons/PlasmicIcon__Brand"; // plasmic-import: 3iaQts2kHx2n/icon

createPlasmicElementProxy;

export type PlasmicHeader__VariantMembers = {};
export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: Flex__<"div">;
  link?: Flex__<"a"> & Partial<LinkProps>;
  freeBox?: Flex__<"div">;
  navBar?: Flex__<"div">;
  navMenu?: Flex__<"div">;
  navItems?: Flex__<"div">;
  navButtoons?: Flex__<"div">;
  component1?: Flex__<"div">;
  signUp?: Flex__<"div">;
};

export interface DefaultHeaderProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqNDsOoLtorJ()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <PlasmicLink__
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        href={`/`}
        platform={"nextjs"}
      >
        <LogoIcon
          className={classNames(projectcss.all, sty.svg__a4Wvm)}
          role={"img"}
        />
      </PlasmicLink__>
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Button
          className={classNames("__wab_instance", sty.button__yyFm7)}
          color={"clear"}
          link={`/features`}
          size={"compact"}
          submitsForm={true}
        >
          {"Features"}
        </Button>
        <Button
          className={classNames("__wab_instance", sty.button__aev4H)}
          color={"clear"}
          link={`/pricing`}
          size={"compact"}
          submitsForm={true}
        >
          {"Pricing"}
        </Button>
        <Button
          className={classNames("__wab_instance", sty.button__oUq0N)}
          color={"clear"}
          size={"compact"}
          submitsForm={true}
        >
          {"Sign in"}
        </Button>
        <Button
          className={classNames("__wab_instance", sty.button__eyIlV)}
          endIcon={
            <RightArrowIcon
              className={classNames(projectcss.all, sty.svg__vSGuZ)}
              role={"img"}
            />
          }
          showEndIcon={true}
          submitsForm={true}
        >
          {"Sign up"}
        </Button>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"navBar"}
        data-plasmic-override={overrides.navBar}
        hasGap={true}
        className={classNames(projectcss.all, sty.navBar)}
      >
        <BrandIcon
          className={classNames(projectcss.all, sty.svg__mvhD4)}
          role={"img"}
        />

        <Stack__
          as={"div"}
          data-plasmic-name={"navMenu"}
          data-plasmic-override={overrides.navMenu}
          hasGap={true}
          className={classNames(projectcss.all, sty.navMenu)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"navItems"}
            data-plasmic-override={overrides.navItems}
            hasGap={true}
            className={classNames(projectcss.all, sty.navItems)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ux9YE
              )}
            >
              {"Products"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gh1SN
              )}
            >
              {"Pricing"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__x6KQf
              )}
            >
              {"Contact"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__o5Jo8
              )}
            >
              {"Usecases"}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"navButtoons"}
            data-plasmic-override={overrides.navButtoons}
            hasGap={true}
            className={classNames(projectcss.all, sty.navButtoons)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"component1"}
              data-plasmic-override={overrides.component1}
              hasGap={true}
              className={classNames(projectcss.all, sty.component1)}
            >
              <div
                data-plasmic-name={"signUp"}
                data-plasmic-override={overrides.signUp}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.signUp
                )}
              >
                {"Login"}
              </div>
            </Stack__>
            <Button className={classNames("__wab_instance", sty.button__dnxr0)}>
              {"Sign In"}
            </Button>
          </Stack__>
        </Stack__>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "link",
    "freeBox",
    "navBar",
    "navMenu",
    "navItems",
    "navButtoons",
    "component1",
    "signUp"
  ],
  link: ["link"],
  freeBox: ["freeBox"],
  navBar: [
    "navBar",
    "navMenu",
    "navItems",
    "navButtoons",
    "component1",
    "signUp"
  ],
  navMenu: ["navMenu", "navItems", "navButtoons", "component1", "signUp"],
  navItems: ["navItems"],
  navButtoons: ["navButtoons", "component1", "signUp"],
  component1: ["component1", "signUp"],
  signUp: ["signUp"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
  freeBox: "div";
  navBar: "div";
  navMenu: "div";
  navItems: "div";
  navButtoons: "div";
  component1: "div";
  signUp: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader__ArgsType,
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
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    freeBox: makeNodeComponent("freeBox"),
    navBar: makeNodeComponent("navBar"),
    navMenu: makeNodeComponent("navMenu"),
    navItems: makeNodeComponent("navItems"),
    navButtoons: makeNodeComponent("navButtoons"),
    component1: makeNodeComponent("component1"),
    signUp: makeNodeComponent("signUp"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
