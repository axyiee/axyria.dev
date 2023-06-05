<script lang="ts">
  import { useLanyard } from "svelte-lanyard";

  import type { LocaleDefinition } from "$lib/locale";
  import Tooltip from "../root/Tooltip.svelte";

  export let locale: LocaleDefinition;

  const id = "273562710745284628";
  const discord = useLanyard(id);

  function compileSpotifyTrackUrl(trackId: string): string {
    return "https://open.spotify.com/track/" + trackId;
  }

  $: time = new Date();
  $: formattedTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    timeZone: "America/Sao_Paulo",
    hour12: true,
  });
</script>

{#if $discord && !$discord.listening_to_spotify}
  <div class="discord-presence-wrapper">
    <div class="discord-user-info">
      <img
        src="https://cdn.discordapp.com/avatars/{id}/{$discord.discord_user
          .avatar}.webp?size=256"
        alt=""
      />
      <div class="info-vertical-section">
        <h3 class="username-status">
          {$discord.discord_user.username}#{$discord.discord_user.discriminator}
        </h3>
        <span aria-hidden="true">{formattedTime}</span>
      </div>
    </div>
  </div>
{:else if $discord && $discord.listening_to_spotify}
  <div class="spotify-card">
    <img src={$discord.spotify?.album_art_url} alt="" />
    <div>
      <Tooltip>
        <a
          target="_blank"
          rel="noreferrer"
          slot="content"
          href={compileSpotifyTrackUrl($discord.spotify?.track_id ?? "")}
        >
          <h3>{$discord.spotify?.song}</h3>
        </a>
        <span slot="tooltip">[🌐]</span>
      </Tooltip>
      <h5>{locale.home.artists.by} {$discord.spotify?.artist}</h5>
      {#if $discord.spotify?.song !== $discord.spotify?.album}
        <h5>{locale.home.artists.on} {$discord.spotify?.album}</h5>
      {/if}
      <progress
        value={((timestamps) => {
          const finale = timestamps.end - timestamps.start;
          return (
            ((Date.now() - ($discord.spotify?.timestamps.start ?? 0)) /
              finale) *
            100
          );
        })($discord.spotify?.timestamps ?? { start: 0, end: 0 })}
        max="100"
      />
    </div>
  </div>
{/if}

<style lang="scss">
  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--accent-color);
  }
  .spotify-card {
    img {
      width: 8em;
      height: 8em;
      border-radius: 1em;
      @media only screen and (max-width: 720px) {
        width: 5em;
        height: 5em;
      }
    }
    h5 {
      font-size: 1.05rem;
    }
    > div {
      display: flex;
      flex-direction: column;
      text-align: right;
      align-items: flex-end;
      justify-content: flex-end;
      gap: 0.75em;
      @media only screen and (min-width: 721px) {
        max-width: 50%;
      }
    }
    progress {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      //scss needs those duplicated for some reason
      height: 0.6em;
      background-color: var(--bg-contrast-low);
      border-radius: 10em;
      margin-top: 0.75em;
      width: 10em;
      &::-webkit-progress-bar {
        background-color: var(--bg-contrast-low);
        border-radius: 10em;
      }
      &[value]::-moz-progress-bar {
        background-color: var(--bg-contrast-low);
        border-radius: 10em;
      }
      &[value]::-webkit-progress-value {
        background-color: var(--accent-color);
        border-radius: 10em;
      }
    }
    line-height: 1;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 2em;
  }
  .discord-presence-wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 1rem;
    gap: 16px;
    padding: 2rem;
    border-radius: 1em;
    color: var(--bg-contrast-text-color);
    transition: all 0.25s var(--bezier-curve);
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .discord-presence-wrapper:hover {
    transform: scale(1.05);
  }
  .discord-user-info {
    display: flex;
    flex-flow: row-reverse;
    align-items: center;
    text-align: right;
    width: fit-content;
    gap: 2rem;
  }
  .discord-user-info img {
    border-radius: 1em;
    width: 8rem;
    height: 8rem;
  }
  .info-vertical-section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    line-height: 1;
    width: 100%;
    gap: 1rem;
  }
  .info-vertical-section .username-status {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  @media only screen and (max-width: 720px) {
    .discord-user-info {
      flex-direction: column;
      text-align: center;
    }
    .info-vertical-section {
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .spotify-card,
    .discord-presence-wrapper {
      margin: 5em 0;
    }
  }
</style>
