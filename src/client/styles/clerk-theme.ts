import { type Appearance } from "@clerk/types";

const base: Appearance = {
  layout: { shimmer: false, logoPlacement: "none" },
  variables: {
    fontFamily: "var(--font-opensans)",
  },
};

export const clerkThemes: Record<string, Appearance> = {
  light: {
    ...base,
    variables: {
      colorBackground: "#edeef1", // neutral-100
      colorText: "#51596a", // neutral-600
      colorInputBackground: "#edeef1", // neutral-100
      colorInputText: "#51596a", // neutral-600
      colorPrimary: "#24262d", // neutral-950
      colorTextOnPrimaryBackground: "#d7dae0", // neutral-200
      colorNeutral: "#363a44", // neutral-900
      colorTextSecondary: "#6d778a", // neutral-500
    },
  },
  dark: {
    ...base,
    variables: {
      colorBackground: "#24262d", // neutral-950
      colorText: "#b4bac5", // neutral-200
      colorInputBackground: "#24262d", // neutral-950
      colorInputText: "#d7dae0", // neutral-200
      colorPrimary: "#f6f7f9", // neutral-50
      colorTextOnPrimaryBackground: "#363a44", // neutral-900
      colorNeutral: "#f6f7f9", // neutral-50
      colorTextSecondary: "#8b94a5", // neutral-400
    },
    elements: {
      providerIcon__apple: { filter: "invert(1)" },
    },
  },
};
