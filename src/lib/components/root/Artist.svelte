<script lang="ts">
  import type { LocaleDefinition } from "$lib/locale";
  import Twemoji from "../icon/Twemoji.svelte";
  import Tooltip from "./Tooltip.svelte";

  export let locale: LocaleDefinition;
  export let picture: string;
  export let href: string;
  export let name: string;
  export let flag: string;
  export let key: string;

  function getArtistDescription(): string {
    return (locale.home.artists as Record<string, string>)[key];
  }
</script>

<Tooltip>
  <a slot="content" aria-hidden="true" {href}>
    <img src={picture} alt={name} />
  </a>
  <div slot="tooltip">
    <span class="artist-name"
      ><Twemoji width="1.25rem" height="1.25rem" name={flag} /> {name}</span
    >
    <span class="artist-bio">{getArtistDescription()}</span>
  </div>
</Tooltip>

<style lang="scss">
  :global([slot="content"]) img {
    width: 4rem;
    height: 4rem;
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
    .artist-name {
      font-size: 1.25rem;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.25rem;
    }
  }
</style>
