import { z } from "zod";

export const LocaleDefinition = z.object({
  root: z.object({
    title: z.string(),
  }),
  header: z.object({
    home: z.string(),
    blog: z.string(),
    settings: z.object({
      colorScheme: z.object({
        title: z.string(),
        description: z.string(),
        darkScheme: z.string(),
        lightScheme: z.string(),
        systemScheme: z.string(),
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
    introduction: z.object({
      description: z.string(),
      areas: z.array(z.string()),
    }),
    biography: z.object({
      title: z.string(),
      text: z.string(),
    }),
  }),
});

export type LocaleDefinition = z.infer<typeof LocaleDefinition>;

const accepted = ["en-US", "de-DE", "es-ES", "pt-BR"] as const;
export type Language = (typeof accepted)[number];

export const languages = await (async () => {
  return [
    {
      name: "en-US",
      meta: LocaleDefinition.parse(await import("./en-US.json")),
    },
    {
      name: "pt-BR",
      meta: LocaleDefinition.parse(await import("./pt-BR.json")),
    },
    {
      name: "de-DE",
      meta: LocaleDefinition.parse(await import("./de-DE.json")),
    },
    {
      name: "es-ES",
      meta: LocaleDefinition.parse(await import("./es-ES.json")),
    },
  ];
})();

export function isAcceptedLanguage(maybe: unknown): maybe is Language {
  return typeof maybe === "string" && accepted.includes(maybe as Language);
}

export function substringBefore(text: string, pattern: string): string {
  return text.slice(0, text.indexOf(pattern));
}

export function substringAfter(text: string, pattern: string): string {
  return text.slice(text.indexOf(pattern) + pattern.length);
}
