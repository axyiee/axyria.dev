import { isAcceptedLanguage } from "$lib/locale";
import { isColorScheme } from "$lib/types/colorScheme";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const cs = event.cookies.get("color-scheme");
  const lang = event.cookies.get("language");
  const colorScheme = isColorScheme(cs) ? cs : "default-system";
  const lang_ = !lang
    ? event.request.headers.get("accept-language")?.split(",")[0]
    : lang;
  const disablePointer = event.cookies.get("disable-pointer");
  const language = isAcceptedLanguage(lang_) ? lang_ : "en-US";
  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html
        .replace('data-theme=""', `data-theme="${colorScheme}"`)
        .replace('lang=""', `lang="${language}"`)
        .replace(
          'data-disable-pointer=""',
          `data-disable-pointer="${
            disablePointer == "true" ? "true" : "false"
          }"`,
        ),
  });
  return response;
}
