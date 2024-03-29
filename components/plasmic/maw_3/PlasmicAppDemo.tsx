// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pAxFtMZvG1P122TfNRy6Mn
// Component: t0Qn1QtC49T5

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
import sty from "./PlasmicAppDemo.module.css"; // plasmic-import: t0Qn1QtC49T5/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: mSWDjRsjR86D/icon
import Ellipse8Icon from "./icons/PlasmicIcon__Ellipse8"; // plasmic-import: nu3-cwVUaE3r/icon

createPlasmicElementProxy;

export type PlasmicAppDemo__VariantMembers = {};
export type PlasmicAppDemo__VariantsArgs = {};
type VariantPropType = keyof PlasmicAppDemo__VariantsArgs;
export const PlasmicAppDemo__VariantProps = new Array<VariantPropType>();

export type PlasmicAppDemo__ArgsType = {};
type ArgPropType = keyof PlasmicAppDemo__ArgsType;
export const PlasmicAppDemo__ArgProps = new Array<ArgPropType>();

export type PlasmicAppDemo__OverridesType = {
  appDemo?: Flex__<"div">;
  sideBar?: Flex__<"div">;
  titleCreate?: Flex__<"div">;
  menuItems?: Flex__<"div">;
  menuItemCourse?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  activeIndicator?: Flex__<"div">;
  menuItemQuiz?: Flex__<"div">;
  menuItemLesson?: Flex__<"div">;
  menuItemTask?: Flex__<"div">;
  mainView?: Flex__<"div">;
  promptView?: Flex__<"div">;
  button?: Flex__<typeof Button>;
  resultView?: Flex__<"div">;
  svg?: Flex__<"svg">;
};

export interface DefaultAppDemoProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAppDemo__RenderFunc(props: {
  variants: PlasmicAppDemo__VariantsArgs;
  args: PlasmicAppDemo__ArgsType;
  overrides: PlasmicAppDemo__OverridesType;
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
      data-plasmic-name={"appDemo"}
      data-plasmic-override={overrides.appDemo}
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
        sty.appDemo
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"sideBar"}
        data-plasmic-override={overrides.sideBar}
        hasGap={true}
        className={classNames(projectcss.all, sty.sideBar)}
      >
        <div
          data-plasmic-name={"titleCreate"}
          data-plasmic-override={overrides.titleCreate}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.titleCreate
          )}
        >
          {"Create"}
        </div>
        <Stack__
          as={"div"}
          data-plasmic-name={"menuItems"}
          data-plasmic-override={overrides.menuItems}
          hasGap={true}
          className={classNames(projectcss.all, sty.menuItems)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"menuItemCourse"}
            data-plasmic-override={overrides.menuItemCourse}
            hasGap={true}
            className={classNames(projectcss.all, sty.menuItemCourse)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uDWuk
              )}
            >
              {"Course"}
            </div>
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <div
                data-plasmic-name={"activeIndicator"}
                data-plasmic-override={overrides.activeIndicator}
                className={classNames(projectcss.all, sty.activeIndicator)}
              />
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"menuItemQuiz"}
            data-plasmic-override={overrides.menuItemQuiz}
            hasGap={true}
            className={classNames(projectcss.all, sty.menuItemQuiz)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ekdpp
              )}
            >
              {"Quiz"}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"menuItemLesson"}
            data-plasmic-override={overrides.menuItemLesson}
            hasGap={true}
            className={classNames(projectcss.all, sty.menuItemLesson)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mSg1L
              )}
            >
              {"Lesson"}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"menuItemTask"}
            data-plasmic-override={overrides.menuItemTask}
            hasGap={true}
            className={classNames(projectcss.all, sty.menuItemTask)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__etgwY
              )}
            >
              {"Assignment Task"}
            </div>
          </Stack__>
        </Stack__>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"mainView"}
        data-plasmic-override={overrides.mainView}
        hasGap={true}
        className={classNames(projectcss.all, sty.mainView)}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"promptView"}
          data-plasmic-override={overrides.promptView}
          hasGap={true}
          className={classNames(projectcss.all, sty.promptView)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___6MvvR
            )}
          >
            {
              'A course on "Learning how to learn in the age of Al", for teens active on TikTok and social media.'
            }
          </div>
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vOvyY
              )}
            >
              {"Generate"}
            </div>
          </Button>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"resultView"}
          data-plasmic-override={overrides.resultView}
          hasGap={true}
          className={classNames(projectcss.all, sty.resultView)}
        >
          <Ellipse8Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__iU2CC
            )}
          >
            {"AI machine is ready..."}
          </div>
        </Stack__>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  appDemo: [
    "appDemo",
    "sideBar",
    "titleCreate",
    "menuItems",
    "menuItemCourse",
    "freeBox",
    "activeIndicator",
    "menuItemQuiz",
    "menuItemLesson",
    "menuItemTask",
    "mainView",
    "promptView",
    "button",
    "resultView",
    "svg"
  ],
  sideBar: [
    "sideBar",
    "titleCreate",
    "menuItems",
    "menuItemCourse",
    "freeBox",
    "activeIndicator",
    "menuItemQuiz",
    "menuItemLesson",
    "menuItemTask"
  ],
  titleCreate: ["titleCreate"],
  menuItems: [
    "menuItems",
    "menuItemCourse",
    "freeBox",
    "activeIndicator",
    "menuItemQuiz",
    "menuItemLesson",
    "menuItemTask"
  ],
  menuItemCourse: ["menuItemCourse", "freeBox", "activeIndicator"],
  freeBox: ["freeBox", "activeIndicator"],
  activeIndicator: ["activeIndicator"],
  menuItemQuiz: ["menuItemQuiz"],
  menuItemLesson: ["menuItemLesson"],
  menuItemTask: ["menuItemTask"],
  mainView: ["mainView", "promptView", "button", "resultView", "svg"],
  promptView: ["promptView", "button"],
  button: ["button"],
  resultView: ["resultView", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  appDemo: "div";
  sideBar: "div";
  titleCreate: "div";
  menuItems: "div";
  menuItemCourse: "div";
  freeBox: "div";
  activeIndicator: "div";
  menuItemQuiz: "div";
  menuItemLesson: "div";
  menuItemTask: "div";
  mainView: "div";
  promptView: "div";
  button: typeof Button;
  resultView: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAppDemo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAppDemo__VariantsArgs;
    args?: PlasmicAppDemo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAppDemo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAppDemo__ArgsType,
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
          internalArgPropNames: PlasmicAppDemo__ArgProps,
          internalVariantPropNames: PlasmicAppDemo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAppDemo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "appDemo") {
    func.displayName = "PlasmicAppDemo";
  } else {
    func.displayName = `PlasmicAppDemo.${nodeName}`;
  }
  return func;
}

export const PlasmicAppDemo = Object.assign(
  // Top-level PlasmicAppDemo renders the root element
  makeNodeComponent("appDemo"),
  {
    // Helper components rendering sub-elements
    sideBar: makeNodeComponent("sideBar"),
    titleCreate: makeNodeComponent("titleCreate"),
    menuItems: makeNodeComponent("menuItems"),
    menuItemCourse: makeNodeComponent("menuItemCourse"),
    freeBox: makeNodeComponent("freeBox"),
    activeIndicator: makeNodeComponent("activeIndicator"),
    menuItemQuiz: makeNodeComponent("menuItemQuiz"),
    menuItemLesson: makeNodeComponent("menuItemLesson"),
    menuItemTask: makeNodeComponent("menuItemTask"),
    mainView: makeNodeComponent("mainView"),
    promptView: makeNodeComponent("promptView"),
    button: makeNodeComponent("button"),
    resultView: makeNodeComponent("resultView"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicAppDemo
    internalVariantProps: PlasmicAppDemo__VariantProps,
    internalArgProps: PlasmicAppDemo__ArgProps
  }
);

export default PlasmicAppDemo;
/* prettier-ignore-end */
