// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandIcon(props: BrandIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 99 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M93.26 17.784c-1.457 0-2.64-.328-3.553-.984-.912-.656-1.448-1.488-1.608-2.496l2.856-.792c.096.736.336 1.248.72 1.536.4.272.992.408 1.776.408 1.28 0 1.92-.4 1.92-1.2 0-.368-.12-.648-.36-.84-.24-.192-.696-.344-1.368-.456l-1.968-.312c-1.056-.176-1.88-.56-2.472-1.152-.576-.592-.864-1.384-.864-2.376 0-1.12.416-1.992 1.248-2.616.832-.64 1.984-.96 3.456-.96 2.928 0 4.6 1.136 5.016 3.408l-2.688.648c-.08-.72-.28-1.208-.6-1.464-.32-.256-.864-.384-1.632-.384-1.152 0-1.728.408-1.728 1.224 0 .352.104.624.312.816.224.192.608.328 1.152.408l2.4.36c.992.128 1.76.488 2.304 1.08.56.576.84 1.336.84 2.28 0 1.216-.456 2.168-1.368 2.856-.912.672-2.176 1.008-3.792 1.008zM85.71 3.312c-.336.336-.824.504-1.464.504s-1.136-.168-1.488-.504c-.336-.336-.504-.816-.504-1.44C82.254.624 82.918 0 84.246 0c.64 0 1.128.168 1.464.504.352.32.528.776.528 1.368 0 .624-.176 1.104-.528 1.44zm-2.976 14.232V5.784h3.048v11.76h-3.048zM79.113 5.592c.656 0 1.128.056 1.416.168v2.88c-.416-.16-.944-.24-1.584-.24-1.008 0-1.808.352-2.4 1.056-.576.704-.864 1.776-.864 3.216v4.872h-3.048V5.784h3.048V9.12c.416-2.352 1.56-3.528 3.432-3.528zm-9.089 5.904c0 .432-.008.808-.024 1.128h-8.352c.096.976.368 1.688.816 2.136.464.432 1.16.648 2.088.648.688 0 1.216-.12 1.584-.36.368-.24.696-.672.984-1.296l2.64.96c-.8 2.048-2.56 3.072-5.28 3.072-1.808 0-3.264-.552-4.368-1.656-1.088-1.104-1.632-2.568-1.632-4.392 0-1.84.544-3.328 1.632-4.464 1.104-1.152 2.528-1.728 4.272-1.728 1.696 0 3.056.544 4.08 1.632 1.04 1.072 1.56 2.512 1.56 4.32zm-5.616-3.648c-.848 0-1.496.216-1.944.648-.432.416-.704 1.096-.816 2.04H67c-.016-.976-.232-1.664-.648-2.064-.416-.416-1.064-.624-1.944-.624zM51.842 5.544c2.8 0 4.2 1.656 4.2 4.968v7.032h-3.048V10.68c0-1.584-.76-2.376-2.28-2.376-.864 0-1.544.312-2.04.936-.48.608-.72 1.504-.72 2.688v5.616h-3.048V5.784h3.048V8.52c.608-1.984 1.904-2.976 3.888-2.976zm-10.557.048c.656 0 1.128.056 1.416.168v2.88c-.416-.16-.944-.24-1.584-.24-1.008 0-1.808.352-2.4 1.056-.576.704-.864 1.776-.864 3.216v4.872h-3.048V5.784h3.048V9.12c.416-2.352 1.56-3.528 3.432-3.528zm-12.959.192h3.048v11.76h-3.048v-2.568c-.752 1.872-2.112 2.808-4.08 2.808-1.664 0-2.976-.552-3.936-1.656-.944-1.12-1.416-2.6-1.416-4.44 0-1.872.456-3.36 1.368-4.464.928-1.12 2.208-1.68 3.84-1.68 2.048 0 3.456.96 4.224 2.88v-2.64zm-3.168 9.24c1.12 0 1.944-.272 2.472-.816.528-.544.792-1.384.792-2.52 0-1.152-.264-2-.792-2.544-.528-.56-1.352-.84-2.472-.84-2.128 0-3.192 1.128-3.192 3.384 0 2.224 1.064 3.336 3.192 3.336zm-8.009-3.528c0 .432-.008.808-.024 1.128H8.773c.096.976.368 1.688.816 2.136.464.432 1.16.648 2.088.648.688 0 1.216-.12 1.584-.36.368-.24.696-.672.984-1.296l2.64.96c-.8 2.048-2.56 3.072-5.28 3.072-1.808 0-3.264-.552-4.368-1.656-1.088-1.104-1.632-2.568-1.632-4.392 0-1.84.544-3.328 1.632-4.464C8.34 6.12 9.765 5.544 11.509 5.544c1.696 0 3.056.544 4.08 1.632 1.04 1.072 1.56 2.512 1.56 4.32zm-5.616-3.648c-.848 0-1.496.216-1.944.648-.432.416-.704 1.096-.816 2.04h5.352c-.016-.976-.232-1.664-.648-2.064-.416-.416-1.064-.624-1.944-.624zM0 17.544V.744h3.048v16.8H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandIcon;
/* prettier-ignore-end */
