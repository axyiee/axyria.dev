import type { ColorSchemeIdentifier } from "@root/types/colorScheme";

export function applyColorScheme(name: ColorSchemeIdentifier) {
  document.documentElement.setAttribute("data-color-scheme", name);
}

export function applyInverseColorScheme(baseUrl: string): Promise<Response> {
  const element = document.documentElement.getAttribute("data-color-scheme") ?? "system";
  const splitter = element.indexOf("-");
  const props = splitter != -1
    ? { prefix: element.substring(0, splitter + 1), suffix: element.substring(splitter + 1) }
    : { prefix: "", suffix: element };
  let scheme: string;
  switch (props.suffix) {
    case "light":
      scheme = props.prefix + "dark";
      break;
    case "dark":
      scheme = props.prefix + "light";
      break;
    default:
      const isLight = window.matchMedia("(prefers-color-scheme: light)");
      scheme = isLight ? props.prefix + "dark" : props.prefix + "light";
      break;
  }
  applyColorScheme(scheme as ColorSchemeIdentifier);
  return fetch(baseUrl + "/api/color-scheme?identifier=" + scheme, {
    method: "POST",
  });
}

export const COLOR_SCHEME_ID_COOKIE = "color-scheme-id";

// export function getSchemeType(baseUrl: URL): Promise<ColorSchemeIdentifier> {
//   return fetch(baseUrl.origin + "/api/color-scheme?identifier=cookie")
//     .then(res => res.json())
//     .then(scheme => Array.isArray(scheme) ? "system" : scheme.identifier ?? "system");
// }
