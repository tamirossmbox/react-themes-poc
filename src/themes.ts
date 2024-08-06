import { DefaultThemeDemo } from "styled-components";
import { darkPallete, lightPallete } from "./pallete";

const dp = darkPallete;
const lp = lightPallete;

export const lightTheme: DefaultThemeDemo = {
  background: lp.white,
  borderColor: lp.pewter,
  color: lp.jetBlack,
  main: {
    background: lp.white,
    color: lp.jetBlack,
  },
  navbar: {
    background: lp.white,
    color: lp.jetBlack,
  },
  sidebar: {
    background: lp.brightGrey,
    color: lp.jetBlack,
  },
  footer: {
    background: lp.mistyBlue,
    color: lp.white,
  },
};

export const darkTheme: DefaultThemeDemo = {
  background: dp.black,
  borderColor: "rgba(0,0,0,0.2)",
  color: dp.pewter,
  main: {
    background: dp.black,
    color: dp.pewter,
  },
  navbar: {
    background: dp.ebony,
    color: dp.pewter,
  },
  sidebar: {
    background: dp.ebony,
    color: dp.pewter,
  },
  footer: {
    background: dp.gray,
    color: dp.ebony,
  },
};
