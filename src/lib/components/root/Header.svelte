<script lang="ts">
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import scheme from "$lib/types/colorScheme";
  import Animate from "./Animate.svelte";
  import Logo from "$lib/components/icon/Logo.svelte";
  import TablerIcon from "$lib/components/icon/TablerIcon.svelte";
  import Settings from "./Settings.svelte";
  import type { LocaleDefinition } from "$lib/locale";

  export let locale: LocaleDefinition;

  const links = [
    {
      path: "/",
      text: locale.header.home,
      icon: "home",
    },
    {
      path: "/blog",
      text: locale.header.blog,
      icon: "news",
    },
  ];

  export let transitionDelay: number;
  export let transitionHeight: number;
</script>

<Animate>
  <header in:fly={{ delay: transitionDelay, y: transitionHeight }}>
    <Logo color={scheme.textColor.zero} width="2rem" height="2rem" />
    <div>
      <nav>
        {#each links as link, index}
          <a
            in:fly={{
              delay: transitionDelay * 0.75 * (index + 1),
              y: transitionHeight,
            }}
            aria-current={$page.url.pathname === link.path ? "page" : undefined}
            href={link.path}
          >
            <!-- <MaterialIcon outlined={link.outlined} value={link.icon} /> -->
            <TablerIcon name={link.icon} />
            {link.text}</a
          >
        {/each}
      </nav>
    </div>
    <div class="corner">
      <Settings {locale} />
    </div>
  </header>
</Animate>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;
    text-align: center;
    flex-direction: row;
    gap: 1rem;
  }

  nav a {
    transition: all 0.25s var(--bezier-curve);
    height: 100%;
    font-weight: 700;
    font-size: 0.8rem;
    color: var(--bg-contrast-text-color);
    text-decoration: none;
    text-transform: lowercase;
    letter-spacing: 0.1em;
    background-color: var(--bg-contrast-color);
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    display: flex;
    align-items: center;
    text-align: center;
    gap: 5px;
  }

  a:hover {
    color: var(--text-color-l-2);
  }

  .corner {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
</style>
