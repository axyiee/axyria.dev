import { isAcceptedLanguage } from "$lib/locale/index.js";
import { isColorScheme } from "$lib/types/colorScheme.js";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  async setColorScheme({ cookies, url }) {
    const colorScheme = url.searchParams.get("color-scheme");
    const redirectTo = url.searchParams.get("redirect-to");
    cookies.set(
      "color-scheme",
      isColorScheme(colorScheme) ? colorScheme : "default-system",
      { path: "/", maxAge: 365 * 24 * 60 * 60 },
    );
    throw redirect(303, redirectTo ?? "/");
  },
  async setLanguage({ cookies, url }) {
    const language = url.searchParams.get("language");
    const redirectTo = url.searchParams.get("redirect-to");
    cookies.set("language", isAcceptedLanguage(language) ? language : "en-US", {
      path: "/",
      maxAge: 365 * 24 * 60 * 60,
    });
    throw redirect(303, redirectTo ?? "/");
  },
  async setDisablePointer({ cookies, url }) {
    const disablePointer = url.searchParams.get("disable-pointer");
    const redirectTo = url.searchParams.get("redirect-to");
    cookies.set(
      "disable-pointer",
      disablePointer === "true" ? "true" : "false",
      { path: "/", maxAge: 365 * 24 * 60 * 60 },
    );
    throw redirect(303, redirectTo ?? "/");
  },
};
