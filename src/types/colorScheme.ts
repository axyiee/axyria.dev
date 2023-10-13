import { z } from "zod";

const color = () => z.string().min(4).max(9).regex(/^#/);

export const MultipleColorObject = z.object({
  primary: color(),
  secondary: color(),
});

export const ColorSchemeIdentifier = z.enum(["dark", "light", "system"]);

export const ColorScheme = z.object({
  identifier: ColorSchemeIdentifier,
  colors: z.object({
    text: z.object({
      primary: color(),
      secondary: color(),
      button: color(),
    }),
    gradient: z.object({
      primary: color(),
      secondary: color(),
      tertiary: color(),
    }),
    background: MultipleColorObject,
    accent: MultipleColorObject,
  }),
});

export type ColorSchemeIdentifier = z.infer<typeof ColorSchemeIdentifier>;
export type ColorScheme = z.infer<typeof ColorScheme>;
