<script lang="ts">
  import type { LocaleDefinition } from "$lib/locale";
  import Twemoji from "../icon/Twemoji.svelte";
  import Tooltip from "./Tooltip.svelte";

  export let locale: LocaleDefinition;
  export let picture: string;
  export let href: string;
  export let name: string;
  export let key: string;

  function getBookDescription(): string {
    return (locale.home.books as Record<string, string>)[key];
  }
</script>

<Tooltip>
  <a slot="content" aria-hidden="true" {href}>
    <img src={picture} alt={name} />
  </a>
  <div slot="tooltip">
    <span class="book-name">{name}</span>
    <span class="book-description">{getBookDescription()}</span>
  </div>
</Tooltip>

<style lang="scss">
  :global([slot="content"]) img {
    width: 10rem;
    height: 16rem;
    border-radius: 0.75em;
  }
  :global([slot="tooltip"]) {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-align-last: center;
    padding: 0.75rem;
    gap: 0.25em;
    .book-name {
      font-size: 1.25rem;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.25rem;
    }
  }
</style>
