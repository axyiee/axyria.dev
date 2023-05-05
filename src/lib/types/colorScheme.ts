const colorSchemeKinds = [
  "default-dark",
  "default-light",
  "default-system",
] as const;

export type ColorSchemeKind = (typeof colorSchemeKinds)[number];

export interface ColorShades {
  zero: string;
  light1: string;
  light2: string;
  light3: string;
  light4: string;
  light5: string;
  dark1: string;
  dark2: string;
  dark3: string;
  dark4: string;
  dark5: string;
}

export interface ColorScheme {
  backgroundColor: ColorShades;
  textColor: ColorShades;
  accentColor: ColorShades;
  bgContrastColor: ColorShades;
  bgContrastTextColor: ColorShades;
}

export function isColorScheme(maybe: unknown): maybe is ColorSchemeKind {
  return (
    typeof maybe === "string" &&
    colorSchemeKinds.includes(maybe as ColorSchemeKind)
  );
}

const scheme: ColorScheme = {
  backgroundColor: {
    zero: "var(--background-color)",
    light1: "var(--background-color-l-1)",
    light2: "var(--background-color-l-2)",
    light3: "var(--background-color-l-3)",
    light4: "var(--background-color-l-4)",
    light5: "var(--background-color-l-5)",
    dark1: "var(--background-color-d-1)",
    dark2: "var(--background-color-d-2)",
    dark3: "var(--background-color-d-3)",
    dark4: "var(--background-color-d-4)",
    dark5: "var(--background-color-d-5)",
  },
  textColor: {
    zero: "var(--text-color)",
    light1: "var(--text-color-l-1)",
    light2: "var(--text-color-l-2)",
    light3: "var(--text-color-l-3)",
    light4: "var(--text-color-l-4)",
    light5: "var(--text-color-l-5)",
    dark1: "var(--text-color-d-1)",
    dark2: "var(--text-color-d-2)",
    dark3: "var(--text-color-d-3)",
    dark4: "var(--text-color-d-4)",
    dark5: "var(--text-color-d-5)",
  },
  accentColor: {
    zero: "var(--accent-color)",
    light1: "var(--accent-color-l-1)",
    light2: "var(--accent-color-l-2)",
    light3: "var(--accent-color-l-3)",
    light4: "var(--accent-color-l-4)",
    light5: "var(--accent-color-l-5)",
    dark1: "var(--accent-color-d-1)",
    dark2: "var(--accent-color-d-2)",
    dark3: "var(--accent-color-d-3)",
    dark4: "var(--accent-color-d-4)",
    dark5: "var(--accent-color-d-5)",
  },
  bgContrastColor: {
    zero: "var(--bg-contrast-color)",
    light1: "var(--bg-contrast-color-l-1)",
    light2: "var(--bg-contrast-color-l-2)",
    light3: "var(--bg-contrast-color-l-3)",
    light4: "var(--bg-contrast-color-l-4)",
    light5: "var(--bg-contrast-color-l-5)",
    dark1: "var(--bg-contrast-color-d-1)",
    dark2: "var(--bg-contrast-color-d-2)",
    dark3: "var(--bg-contrast-color-d-3)",
    dark4: "var(--bg-contrast-color-d-4)",
    dark5: "var(--bg-contrast-color-d-5",
  },
  bgContrastTextColor: {
    zero: "var(--bg-contrast-text-color)",
    light1: "var(--bg-contrast-text-color-l-1)",
    light2: "var(--bg-contrast-text-color-l-2)",
    light3: "var(--bg-contrast-text-color-l-3)",
    light4: "var(--bg-contrast-text-color-l-4)",
    light5: "var(--bg-contrast-text-color-l-5)",
    dark1: "var(--bg-contrast-text-color-d-1)",
    dark2: "var(--bg-contrast-text-color-d-2)",
    dark3: "var(--bg-contrast-text-color-d-3)",
    dark4: "var(--bg-contrast-text-color-d-4)",
    dark5: "var(--bg-contrast-text-color-d-5)",
  },
};

export default scheme;
