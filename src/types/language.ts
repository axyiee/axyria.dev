import { z } from "zod";

export const LanguageCode = z.enum(["en", "de", "br", "es"]);
export type LanguageCode = z.infer<typeof LanguageCode>;

export function parseLanguage(input: string): LanguageCode {
  const { success } = LanguageCode.safeParse(input);
  return success ? input as LanguageCode : "en";
}

export function extractLanguageFromUrl(url: URL): LanguageCode {
  const [, lang] = url.pathname.split("/");
  return parseLanguage(lang);
}

export function replaceLanguageCodeOfUrl(language: LanguageCode, url: URL): URL {
  const [, lang = language, ...remaining] = url.pathname.split("/");
  const rest = LanguageCode.safeParse(lang).success ? [language, remaining] : [language, lang, remaining];
  return new URL(url.origin + "/" + rest.join("/"));
}
