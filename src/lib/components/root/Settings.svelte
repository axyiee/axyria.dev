<script lang="ts">
  import { browser } from "$app/environment";
  import { enhance, type SubmitFunction } from "$app/forms";
  import { page } from "$app/stores";
  import { colorSchemeKinds, isColorScheme } from "$lib/types/colorScheme";
  import type { LocaleDefinition } from "$lib/locale";
  import { fade, fly } from "svelte/transition";
  import MaterialIcon from "../icon/MaterialIcon.svelte";
  import Twemoji from "../icon/Twemoji.svelte";
  import Tooltip from "./Tooltip.svelte";
  import { onMount } from "svelte";

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

  const submitDisablePointer: SubmitFunction = ({ action }) => {
    const res = action.searchParams.get("disable-pointer");
    if (res) {
      document.documentElement.setAttribute(
        "data-disable-pointer",
        res === "true" ? "true" : "false",
      );
    }
  };

  const languages = [
    { name: "en-US", icon: "usa" },
    { name: "pt-BR", icon: "brazil" },
    { name: "de-DE", icon: "germany" },
    { name: "es-ES", icon: "spain" },
  ];

  let isEnablePointer: boolean = true;
  onMount(
    () =>
      (isEnablePointer =
        document.documentElement.dataset.disablePointer !== "true"),
  );
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
          {#each colorSchemeKinds as kind}
            <Tooltip>
              <button
                slot="content"
                class="theme-select {kind}"
                formaction="/?/setColorScheme&color-scheme={kind}&redirect-to={$page
                  .url.pathname}"
              />
              <span slot="tooltip" transition:fade
                >{locale.header.settings.colorScheme[kind]}</span
              >
            </Tooltip>
          {/each}
        </form>
      </section>
      <section>
        <h1>{locale.header.settings.language.title}</h1>
        <p>{locale.header.settings.language.description}</p>
        <form method="POST" class="row" use:enhance>
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
      <section>
        <h1>{locale.header.settings.pointer.title}</h1>
        <p>{locale.header.settings.pointer.description}</p>
        <form
          method="POST"
          class="row checkform"
          use:enhance={submitDisablePointer}
        >
          <!-- checkbox -->
          <input
            type="checkbox"
            name="enable-pointer"
            bind:checked={isEnablePointer}
          />
          <button
            class="language-select"
            formaction="/?/setDisablePointer&disable-pointer={!isEnablePointer}&redirect-to={$page
              .url.pathname}">👉</button
          >
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
    .checkform {
      button {
        padding: 8px;
        border-radius: 8px;
        background-color: var(--bg-contrast-color);
        font-family: var(--primary-font-family), var(--fallback-font-stack);
        color: var(--text-color);
      }
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
    border: 3px solid var(--bg-contrast-color);
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
      background: rgb(28, 27, 31);
      background: linear-gradient(
        150deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 49%,
        rgba(255, 255, 255, 1) 51%,
        rgba(255, 255, 255, 1) 100%
      );
    }
    &.pink-dash {
      background: rgba(253, 135, 173, 1);
      background: linear-gradient(
        150deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 49%,
        rgba(253, 135, 173, 1) 51%,
        rgba(253, 135, 173, 1) 100%
      );
    }
  }
</style>
