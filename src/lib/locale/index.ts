import { z } from "zod";

export const LocaleDefinition = z.object({
  root: z.object({
    title: z.string(),
  }),
  blog: z.object({ min: z.string() }),
  header: z.object({
    home: z.string(),
    blog: z.string(),
    settings: z.object({
      colorScheme: z.object({
        title: z.string(),
        description: z.string(),
        "default-dark": z.string(),
        "default-light": z.string(),
        "default-system": z.string(),
        "pink-dash": z.string(),
      }),
      language: z.object({
        title: z.string(),
        description: z.string(),
        enUS: z.string(),
        ptBR: z.string(),
        deDE: z.string(),
        esES: z.string(),
      }),
      pointer: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
  }),
  discord: z.object({
    warning: z.string(),
    activity: z.array(z.string()),
  }),
  github: z.object({
    star: z.tuple([z.string(), z.string()]),
    issue: z.tuple([z.string(), z.string()]),
    fork: z.tuple([z.string(), z.string()]),
    watcher: z.tuple([z.string(), z.string()]),
    noDescription: z.string(),
  }),
  home: z.object({
    pageDescription: z.string(),
    introduction: z.string(),
    aboutMe: z.object({
      title: z.string(),
      text: z.string(),
    }),
    artists: z.object({
      title: z.string(),
      text: z.string(),
      psychoangel: z.string(),
      glassBeach: z.string(),
      yuce: z.string(),
      iyowa: z.string(),
      kikuo: z.string(),
      tom: z.string(),
      chico: z.string(),
      on: z.string(),
      by: z.string(),
    }),
    books: z.object({
      title: z.string(),
      text: z.string(),
      sf: z.string(),
      ci: z.string(),
      linguagensFormais: z.string(),
    }),
  }),
});

export type LocaleDefinition = z.infer<typeof LocaleDefinition>;

const accepted = ["en-US", "de-DE", "es-ES", "pt-BR"] as const;
export type Language = (typeof accepted)[number];

export const languages = await (async () => [
  {
    name: "en-US",
    meta: LocaleDefinition.parse(await import("./en-US.json")),
  },
  {
    name: "de-DE",
    meta: LocaleDefinition.parse(await import("./de-DE.json")),
  },
  {
    name: "es-ES",
    meta: LocaleDefinition.parse(await import("./es-ES.json")),
  },
  {
    name: "pt-BR",
    meta: LocaleDefinition.parse(await import("./pt-BR.json")),
  },
])();

export function isAcceptedLanguage(maybe: unknown): maybe is Language {
  return typeof maybe === "string" && accepted.includes(maybe as Language);
}
