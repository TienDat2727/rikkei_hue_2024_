import { DefaultTheme } from "styled-components";
type Breakpoints = keyof DefaultTheme["breakpoints"];

const units = "px";
const normalize = <T extends string | number>(value: T) =>
  typeof value === "string" ? value : (`${value}${units}` as const);

export const media =
  <T extends Breakpoints>(breakpoint: T) =>
  ({ theme }: { readonly theme: DefaultTheme }) =>
    `width >= ${normalize(theme.breakpoints[breakpoint])}` as const;
