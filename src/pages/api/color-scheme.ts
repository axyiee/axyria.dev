import { ColorScheme, ColorSchemeIdentifier } from "@root/types/colorScheme";
import { COLOR_SCHEME_ID_COOKIE } from "@scripts/loadColorScheme";
import type { APIContext, APIRoute } from "astro";

export const colorSchemes: ColorScheme[] = [
  {
    identifier: "dark",
    colors: {
      accent: {
        primary: "#bdee63",
        secondary: "white",
      },
      text: {
        primary: "#eceeec",
        secondary: "#a4a8a1",
        button: "#1d211c",
      },
      background: {
        primary: "#111210",
        secondary: "#9280d3",
      },
      gradient: {
        primary: "#5b5bd6",
        secondary: "#7ce2fe",
        tertiary: "#e93d82",
      },
    },
  },
  {
    identifier: "light",
    colors: {
      accent: {
        primary: "#7ce2fe",
        secondary: "black",
      },
      text: {
        primary: "#1c2024",
        secondary: "#60646d",
        button: "#1d211c",
      },
      background: {
        primary: "#ffffff",
        secondary: "#efedf1",
      },
      gradient: {
        primary: "#5b5bd6",
        secondary: "#7ce2fe",
        tertiary: "#e93d82",
      },
    },
  },
];

export const GET: APIRoute = async ({ url, cookies }) => {
  const identifierParameter = url.searchParams.get("identifier");
  const result = ColorSchemeIdentifier.safeParse(
    (identifierParameter === "cookie" ? cookies.get(COLOR_SCHEME_ID_COOKIE)?.value : identifierParameter) || "system",
  );
  const identifier = !result.success ? "system" : result.data;
  switch (identifier) {
    case "system":
      return new Response(JSON.stringify(colorSchemes));
    default:
      const value = colorSchemes.find(cs => cs.identifier === identifier);
      return new Response(JSON.stringify(value || '{"message":"Invalid color scheme identifier provided."}'), {
        status: value ? 200 : 400,
      });
  }
};

export const POST: APIRoute = async ({ url, cookies }) => {
  const result = ColorSchemeIdentifier.safeParse(url.searchParams.get("identifier"));
  const identifier = !result.success ? "system" : result.data;
  cookies.set(COLOR_SCHEME_ID_COOKIE, identifier, { path: "/" });
  return new Response(identifier, { status: 200 });
};
