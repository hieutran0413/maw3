// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pAxFtMZvG1P122TfNRy6Mn
// Component: xd4yJkfYQsZ6

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

import Header from "../../Header"; // plasmic-import: dITpbX7WZfr4/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: pAxFtMZvG1P122TfNRy6Mn/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: xd4yJkfYQsZ6/css

import VectorIcon from "./icons/PlasmicIcon__Vector"; // plasmic-import: gkZ7viGMxq3u/icon
import Ellipse8Icon from "./icons/PlasmicIcon__Ellipse8"; // plasmic-import: nu3-cwVUaE3r/icon

createPlasmicElementProxy;

export type PlasmicHome__VariantMembers = {};
export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  sectionHero?: Flex__<"div">;
  heroTitle?: Flex__<"div">;
  titles?: Flex__<"div">;
  frame9?: Flex__<"div">;
  frame4?: Flex__<"div">;
  frame6?: Flex__<"div">;
  frame12?: Flex__<"div">;
  frame11?: Flex__<"div">;
  frame1261152960?: Flex__<"div">;
  frame1261152958?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  rectangle2?: Flex__<"div">;
  frame1261152959?: Flex__<"div">;
  frame1261152961?: Flex__<"div">;
  frame1261152962?: Flex__<"div">;
  frame13?: Flex__<"div">;
  frame1261152963?: Flex__<"div">;
  frame1261152964?: Flex__<"div">;
  frame1261152965?: Flex__<"div">;
};

export interface DefaultHomeProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
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
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"sectionHero"}
            data-plasmic-override={overrides.sectionHero}
            className={classNames(projectcss.all, sty.sectionHero)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"heroTitle"}
              data-plasmic-override={overrides.heroTitle}
              hasGap={true}
              className={classNames(projectcss.all, sty.heroTitle)}
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
                    sty.text__llAMd
                  )}
                >
                  {"A new chapter in education excellent"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hJqug
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
                <Stack__
                  as={"div"}
                  data-plasmic-name={"frame4"}
                  data-plasmic-override={overrides.frame4}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame4)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ofY1
                    )}
                  >
                    {"Get in Touch"}
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  data-plasmic-name={"frame6"}
                  data-plasmic-override={overrides.frame6}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame6)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4FdKb
                    )}
                  >
                    {"Try it free"}
                  </div>
                </Stack__>
              </Stack__>
            </Stack__>
            <VectorIcon
              className={classNames(projectcss.all, sty.svg__vuV4)}
              role={"img"}
            />

            <Stack__
              as={"div"}
              data-plasmic-name={"frame12"}
              data-plasmic-override={overrides.frame12}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame12)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"frame11"}
                data-plasmic-override={overrides.frame11}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame11)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__saLdG
                  )}
                >
                  {"Create"}
                </div>
                <Stack__
                  as={"div"}
                  data-plasmic-name={"frame1261152960"}
                  data-plasmic-override={overrides.frame1261152960}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame1261152960)}
                >
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"frame1261152958"}
                    data-plasmic-override={overrides.frame1261152958}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame1261152958)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___1BrUs
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
                        data-plasmic-name={"rectangle2"}
                        data-plasmic-override={overrides.rectangle2}
                        className={classNames(projectcss.all, sty.rectangle2)}
                      />
                    </div>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"frame1261152959"}
                    data-plasmic-override={overrides.frame1261152959}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame1261152959)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__vIdSi
                      )}
                    >
                      {"Quiz"}
                    </div>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"frame1261152961"}
                    data-plasmic-override={overrides.frame1261152961}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame1261152961)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qq4H
                      )}
                    >
                      {"Lesson"}
                    </div>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"frame1261152962"}
                    data-plasmic-override={overrides.frame1261152962}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame1261152962)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qFa
                      )}
                    >
                      {"Assignment Task"}
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
              <Stack__
                as={"div"}
                data-plasmic-name={"frame13"}
                data-plasmic-override={overrides.frame13}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame13)}
              >
                <Stack__
                  as={"div"}
                  data-plasmic-name={"frame1261152963"}
                  data-plasmic-override={overrides.frame1261152963}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame1261152963)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oEm3W
                    )}
                  >
                    {
                      'A course on "Learning how to learn in the age of Al", for teens active on TikTok and social media.'
                    }
                  </div>
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"frame1261152964"}
                    data-plasmic-override={overrides.frame1261152964}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame1261152964)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lQbA
                      )}
                    >
                      {"Generate"}
                    </div>
                  </Stack__>
                </Stack__>
                <Stack__
                  as={"div"}
                  data-plasmic-name={"frame1261152965"}
                  data-plasmic-override={overrides.frame1261152965}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame1261152965)}
                >
                  <Ellipse8Icon
                    className={classNames(projectcss.all, sty.svg__urIVq)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cs1Yy
                    )}
                  >
                    {"AI machine is ready..."}
                  </div>
                </Stack__>
              </Stack__>
            </Stack__>
          </div>
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "sectionHero",
    "heroTitle",
    "titles",
    "frame9",
    "frame4",
    "frame6",
    "frame12",
    "frame11",
    "frame1261152960",
    "frame1261152958",
    "freeBox",
    "rectangle2",
    "frame1261152959",
    "frame1261152961",
    "frame1261152962",
    "frame13",
    "frame1261152963",
    "frame1261152964",
    "frame1261152965"
  ],
  header: ["header"],
  sectionHero: [
    "sectionHero",
    "heroTitle",
    "titles",
    "frame9",
    "frame4",
    "frame6",
    "frame12",
    "frame11",
    "frame1261152960",
    "frame1261152958",
    "freeBox",
    "rectangle2",
    "frame1261152959",
    "frame1261152961",
    "frame1261152962",
    "frame13",
    "frame1261152963",
    "frame1261152964",
    "frame1261152965"
  ],
  heroTitle: ["heroTitle", "titles", "frame9", "frame4", "frame6"],
  titles: ["titles"],
  frame9: ["frame9", "frame4", "frame6"],
  frame4: ["frame4"],
  frame6: ["frame6"],
  frame12: [
    "frame12",
    "frame11",
    "frame1261152960",
    "frame1261152958",
    "freeBox",
    "rectangle2",
    "frame1261152959",
    "frame1261152961",
    "frame1261152962",
    "frame13",
    "frame1261152963",
    "frame1261152964",
    "frame1261152965"
  ],
  frame11: [
    "frame11",
    "frame1261152960",
    "frame1261152958",
    "freeBox",
    "rectangle2",
    "frame1261152959",
    "frame1261152961",
    "frame1261152962"
  ],
  frame1261152960: [
    "frame1261152960",
    "frame1261152958",
    "freeBox",
    "rectangle2",
    "frame1261152959",
    "frame1261152961",
    "frame1261152962"
  ],
  frame1261152958: ["frame1261152958", "freeBox", "rectangle2"],
  freeBox: ["freeBox", "rectangle2"],
  rectangle2: ["rectangle2"],
  frame1261152959: ["frame1261152959"],
  frame1261152961: ["frame1261152961"],
  frame1261152962: ["frame1261152962"],
  frame13: ["frame13", "frame1261152963", "frame1261152964", "frame1261152965"],
  frame1261152963: ["frame1261152963", "frame1261152964"],
  frame1261152964: ["frame1261152964"],
  frame1261152965: ["frame1261152965"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  sectionHero: "div";
  heroTitle: "div";
  titles: "div";
  frame9: "div";
  frame4: "div";
  frame6: "div";
  frame12: "div";
  frame11: "div";
  frame1261152960: "div";
  frame1261152958: "div";
  freeBox: "div";
  rectangle2: "div";
  frame1261152959: "div";
  frame1261152961: "div";
  frame1261152962: "div";
  frame13: "div";
  frame1261152963: "div";
  frame1261152964: "div";
  frame1261152965: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHome__ArgsType,
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
          internalArgPropNames: PlasmicHome__ArgProps,
          internalVariantPropNames: PlasmicHome__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    sectionHero: makeNodeComponent("sectionHero"),
    heroTitle: makeNodeComponent("heroTitle"),
    titles: makeNodeComponent("titles"),
    frame9: makeNodeComponent("frame9"),
    frame4: makeNodeComponent("frame4"),
    frame6: makeNodeComponent("frame6"),
    frame12: makeNodeComponent("frame12"),
    frame11: makeNodeComponent("frame11"),
    frame1261152960: makeNodeComponent("frame1261152960"),
    frame1261152958: makeNodeComponent("frame1261152958"),
    freeBox: makeNodeComponent("freeBox"),
    rectangle2: makeNodeComponent("rectangle2"),
    frame1261152959: makeNodeComponent("frame1261152959"),
    frame1261152961: makeNodeComponent("frame1261152961"),
    frame1261152962: makeNodeComponent("frame1261152962"),
    frame13: makeNodeComponent("frame13"),
    frame1261152963: makeNodeComponent("frame1261152963"),
    frame1261152964: makeNodeComponent("frame1261152964"),
    frame1261152965: makeNodeComponent("frame1261152965"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
