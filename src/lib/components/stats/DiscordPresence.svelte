<script lang="ts">
  import { useLanyard } from "svelte-lanyard";
  import MaterialIcon from "$lib/components/icon/MaterialIcon.svelte";
  import type { LocaleDefinition } from "$lib/locale";

  export let locale: LocaleDefinition;

  const id = "273562710745284628";
  const github = useLanyard(id);

  function getStatusIcon(name: string) {
    switch (name.toLowerCase()) {
      case "online":
        return "circle";
      case "idle":
        return "dark_mode";
      case "dnd":
        return "do_not_disturb_on_total_silence";
      default:
        return "power_off";
    }
  }

  function getActivityName(kind: number): string {
    return locale.discord.activity[kind] ?? locale.discord.activity[4];
  }

  function compileImageUrl(path: string) {
    if (!path) {
      return "";
    }
    const isSpotify = path.startsWith("spotify:");
    if (isSpotify) {
      const id = path.substring(path.indexOf(":") + 1);
      return "https://i.scdn.co/image/" + id;
    }
  }

  $: time = new Date();
  $: formattedTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
</script>

{#if $github}
  <div
    class="discord-presence-wrapper"
    aria-hidden
    style={$github.activities[0]?.assets?.large_image
      ? `--background: linear-gradient(to bottom, var(--bg-contrast-color), transparent), url(${compileImageUrl(
          $github.activities[0].assets.large_image,
        )});`
      : null}
  >
    <div class="dc-warning-msg">
      <MaterialIcon value="lightbulb" />
      <span>{locale.discord.warning}</span>
    </div>
    <div class="discord-user-info">
      <img
        src="https://cdn.discordapp.com/avatars/{id}/{$github.discord_user
          .avatar}.webp?size=64"
        alt=""
      />
      <div class="info-vertical-section">
        <strong class="username-status">
          <MaterialIcon
            outlined
            size="1rem"
            value={getStatusIcon($github.discord_status)}
          />
          {$github.discord_user.username}#{$github.discord_user
            .discriminator}</strong
        >
        {#if $github.activities.length == 0}
          <span>{formattedTime}</span>
        {:else}
          {#each $github.activities as activity}
            <div class="discord-activity-info">
              <p style="margin: 0">
                {getActivityName(activity.type)}
                <strong>{activity.name}</strong>
              </p>
              {#if activity.details}
                <span>
                  <MaterialIcon
                    outlined
                    size="1rem"
                    value="drive_file_rename_outline"
                  />
                  {activity.details}</span
                >
              {/if}
              {#if activity.state}
                <span>
                  <MaterialIcon outlined size="1rem" value="info" />
                  {activity.state}</span
                >
              {/if}
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
{:else}
  <span>🫧</span>
{/if}

<style>
  .discord-presence-wrapper:after,
  .discord-presence-wrapper:before {
    transition: all 0.25s var(--bezier-curve);
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  .discord-presence-wrapper:after {
    background: var(--bg-contrast-color);
    opacity: 0.25;
  }
  .discord-presence-wrapper:before {
    background: var(--background);
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;
  }
  .discord-presence-wrapper,
  .discord-presence-wrapper:after,
  .discord-presence-wrapper:before {
    border-radius: 10px;
  }
  .discord-presence-wrapper:hover {
    transform: scale(1.05);
  }
  .discord-presence-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 1rem;
    gap: 16px;
    padding: 2rem;
    color: var(--bg-contrast-text-color);
    transition: all 0.25s var(--bezier-curve);
    height: 100%;
  }
  .discord-user-info {
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 16px;
  }
  .discord-user-info img {
    border-radius: 64px;
    opacity: 75%;
  }
  .info-vertical-section {
    display: flex;
    flex-direction: column;
    line-height: 1;
    width: 100%;
    gap: 8px;
  }
  .dc-warning-msg {
    gap: 8px;
    display: flex;
    flex-direction: row;
  }
  .dc-warning-msg {
    text-align: justify;
    justify-content: space-between;
  }
  .info-vertical-section .username-status {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }
  .discord-activity-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .discord-activity-info span {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  @media only screen and (max-width: 720px) {
    .discord-user-info {
      flex-direction: column;
      text-align: center;
    }
    .info-vertical-section,
    .discord-activity-info {
      align-items: center;
      text-align: center;
    }
  }
</style>
