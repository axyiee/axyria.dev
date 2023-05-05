import { isAcceptedLanguage, languages } from "$lib/locale/index.js";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */

export function load({ request, cookies }) {
  const base = cookies.get("language");
  const lang_ = !base
    ? request.headers.get("accept-language")?.split(",")[0]
    : base;
  const lang = isAcceptedLanguage(lang_) ? lang_ : "en-US";
  const root = languages.find(
    (struct) => struct.name.toLowerCase() == lang.toLowerCase(),
  );
  if (!root) {
    throw error(400, "Invalid language");
  }
  return {
    language: root,
  };
}
