<script lang="ts">
  import { browser } from "$app/environment";
  import { enhance, type SubmitFunction } from "$app/forms";
  import { page } from "$app/stores";
  import { isColorScheme } from "$lib/types/colorScheme";
  import MaterialIcon from "../icon/MaterialIcon.svelte";
  import Tooltip from "./Tooltip.svelte";
  import type { LocaleDefinition } from "$lib/locale";
  import Twemoji from "../icon/Twemoji.svelte";
  import { fly } from "svelte/transition";

  export let locale: LocaleDefinition;

  let hidden = true;
  function toggle() {
    hidden = !hidden;
  }

  const submitColorScheme: SubmitFunction = ({ action }) => {
    const kind = action.searchParams.get("color-scheme");
    if (kind) {
      const kind_ = isColorScheme(kind) ? kind : "default-system";
      if (browser) {
        document.documentElement.setAttribute("data-theme", kind_);
      }
    }
  };

  const languages = [
    { name: "en-US", icon: "usa" },
    { name: "pt-BR", icon: "brazil" },
    { name: "de-DE", icon: "germany" },
    { name: "es-ES", icon: "spain" },
  ];
</script>

<div class="settings-wrapper">
  <button on:click={toggle}>
    <MaterialIcon class="settings-icon" size="1.75rem" value="settings" />
  </button>
  {#if !hidden}
    <div class="settings-popup" transition:fly={{ y: 25 }}>
      <section>
        <h1>{locale.header.settings.colorScheme.title}</h1>
        <p>{locale.header.settings.colorScheme.description}</p>
        <form method="POST" class="row" use:enhance={submitColorScheme}>
          <Tooltip title={locale.header.settings.colorScheme.darkScheme}>
            <button
              class="theme-select default-dark"
              formaction="/?/setColorScheme&color-scheme=default-dark&redirect-to={$page
                .url.pathname}"
            />
          </Tooltip>
          <Tooltip title={locale.header.settings.colorScheme.lightScheme}>
            <button
              class="theme-select default-light"
              formaction="/?/setColorScheme&color-scheme=default-light&redirect-to={$page
                .url.pathname}"
            />
          </Tooltip>
          <Tooltip title={locale.header.settings.colorScheme.systemScheme}>
            <button
              class="theme-select default-system"
              formaction="/?/setColorScheme&color-scheme=default-system&redirect-to={$page
                .url.pathname}"
            />
          </Tooltip>
        </form>
      </section>
      <section>
        <h1>{locale.header.settings.language.title}</h1>
        <p>{locale.header.settings.language.description}</p>
        <form method="POST" class="row">
          {#each languages as lang}
            <button
              class="language-select"
              formaction="/?/setLanguage&language={lang.name}&redirect-to={$page
                .url.pathname}"
              ><Twemoji name={lang.icon} width="24px" height="24px" /></button
            >
          {/each}
        </form>
      </section>
    </div>
  {/if}
</div>

<style lang="scss">
  .settings-wrapper {
    position: relative;
  }
  button {
    padding: 0;
    border: none;
    background: none;
    color: var(--text-color);
  }
  .settings-popup {
    transition: all 0.25s var(--bezier-curve);
    position: absolute;
    display: flex;
    flex-direction: column;
    width: clamp(20vw, 10rem, 25rem);
    padding: 3rem;
    top: 3rem;
    right: 0;
    background-color: var(--text-color);
    color: var(--background-color);
    text-align: left;
    border-radius: 0.5rem;
    gap: 2rem;
    z-index: 1;
  }
  section {
    p {
      margin: 0;
      padding: 0;
    }
    .row {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  h1 {
    font-size: 2.1rem;
  }
  :global([data-theme="default-dark"]) .theme-select.default-dark,
  :global([data-theme="default-light"]) .theme-select.default-light,
  :global([data-theme="default-system"]) .theme-select.default-system {
    border: 3px solid var(--accent-color);
  }
  .theme-select {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    border: 3px solid var(--background-color);
    &.default-dark {
      background-color: #1c1b1f;
    }
    &.default-light {
      background-color: #fffbfe;
    }
    &.default-system {
      background-color: var(--background-color);
    }
  }
</style>
