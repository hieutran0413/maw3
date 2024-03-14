// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1078 400"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1051.15 327.125c-334.015 97.166-690.341 97.166-1024.353 0-14.463-4.504-27.064-19.47-26.793-34.454V19.581c.33-13.28 12.99-23.37 26.793-18.204 334.012 97.166 690.338 97.166 1024.353 0 12.87-3.518 27.92 3.658 26.79 18.205V292.67c-.27 14.658-11.83 30.35-26.79 34.464v-.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
