import { colorSchemes } from "@root/pages/api/color-scheme";
import { ColorScheme } from "@root/types/colorScheme";

function generateProperties(obj: object): Record<string, string> {
  const isObject = (val: unknown) => typeof val === "object" && !Array.isArray(val);
  const iterateRecursively: (object: object, parent: string) => Record<string, string> = (object: object, parent: string) => {
    const entries: [string, any][] = Object.entries(object);
    return entries.reduce((acc, [k, v]) => {
      const path = parent ? `${parent}-${k}` : `${k}`;
      return isObject(v) ? { ...acc, ...iterateRecursively(v, path) } : { ...acc, [path]: v };
    }, {} as Record<string, string>);
  };
  return iterateRecursively(obj, "");
}

function createStyleSheet({ identifier, colors }: ColorScheme): string {
  const properties = generateProperties(colors);
  const parameters = Object.entries(properties)
    .reduce((acc, [key, value]) => acc + `--${key}:${value};`, "");
  const generate = (nesting: string[]) => nesting.reduce((acc, curr) => acc + curr + "{", "") + parameters + "}".repeat(nesting.length);
  const splitter = identifier.indexOf("-");
  const id = splitter != -1
    ? { prefix: identifier.substring(0, splitter + 1), value: identifier.substring(splitter + 1) }
    : { prefix: "", suffix: identifier };
  const doesAutoDetect = id.value === "dark" || id.value === "light";
  const system = id.prefix + "system";
  const base = generate([`[data-color-scheme="${system}"]`]);
  return doesAutoDetect
    ? base + "\n" + generate([`@media(prefers-color-scheme: ${id.value})`, `[data-color-scheme="${system}"]`])
    : base;
}

export const styleSheet: string = colorSchemes.reduce(
  (acc, current) => acc + createStyleSheet(current),
  "",
);
