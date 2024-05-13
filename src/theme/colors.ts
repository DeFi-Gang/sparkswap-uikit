import { Colors } from "./types";

export const baseColors = {
  failure: "#CD1B3E",
  failureBright: "#9A1530",
  failureDark: "#420A23",
  primary: "#1F17F7",
  primaryBright: "#2D27C3",
  primaryMedium: "#0E0E50",
  primaryDark: "#0D0A30",
  secondary: "#8E067E",
  secondaryBright: "#EC10BC",
  secondaryDark: "#440248",
  success: "#98E31A",
  successBright: "#649315",
  successDark: "#314618",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#bc0fc8",
  pulse: "#bc0fc8",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#13161E",
  backgroundDisabled: "#440248",
  contrast: "#0D0E0F",
  invertedContrast: "#FFFFFF",
  input: "#231A85",
  tertiary: "#f4eff5",
  text: "#FFFFFF",
  textDisabled: "#c0bdc4",
  textSubtle: "#B8B6CB",
  borderColor: "#eae9eb",
  card: "#13161E",
  headerBackground: "#01060A",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #ebe6ff 0%, #fdefff 100%)",
    main: "linear-gradient(90deg, rgba(32,55,251,1) 0%, rgba(221,19,177,1) 100%)",
    button: "linear-gradient(90deg, rgba(32,55,251,1) 0%, rgba(123,38,215,1) 31%, rgba(221,19,177,1) 71%)",
    background: "linear-gradient(180deg, rgba(12, 15, 19, 1) 0%, rgba(23, 26, 36, 1) 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#bc0fc8",
  background: "green",
  backgroundDisabled: "#423742",
  contrast: "#FFFFFF",
  invertedContrast: "#261325",
  input: "#573f5a",
  primaryDark: "#0098A1",
  tertiary: "#473542",
  text: "#f8e2fc",
  textDisabled: "#6f6171",
  textSubtle: "#d2c4d4",
  borderColor: "#634b63",
  card: "#2c262c",
  headerBackground: "#01060A",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #45315c 0%, #542a50 100%)",
    main: "linear-gradient(90deg, rgba(32,55,251,1) 0%, rgba(221,19,177,1) 100%)",
    button: "linear-gradient(90deg, rgba(32,55,251,1) 0%, rgba(123,38,215,1) 31%, rgba(221,19,177,1) 71%)",
    background: "linear-gradient(180deg, rgba(12, 15, 19, 1) 0%, rgba(23, 26, 36, 1) 100%)",
  },
};
