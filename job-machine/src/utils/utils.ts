import { DefaultTheme } from "styled-components";
type Breakpoints = keyof DefaultTheme["breakpoints"];

const units = "px";
const normalize = <T extends string | number>(value: T) =>
  typeof value === "string" ? value : (`${value}${units}` as const);

export const media =
  <T extends Breakpoints>(breakpoint: T) =>
  ({ theme }: { readonly theme: DefaultTheme }) =>
    `width >= ${normalize(theme.breakpoints[breakpoint])}` as const;

    export const mediaRange =
  <Lower extends Breakpoints, Upper extends Breakpoints>(lower: Lower, upper: Upper) =>
  ({ theme }: { readonly theme: DefaultTheme }) =>
    `${normalize(theme.breakpoints[lower])} <= width < ${normalize(theme.breakpoints[upper])}` as const;
