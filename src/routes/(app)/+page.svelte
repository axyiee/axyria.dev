<script>
  import Animate from "$lib/components/root/Animate.svelte";
  import DiscordPresence from "$lib/components/stats/DiscordPresence.svelte";
  import GitHubRepository from "$lib/components/stats/GitHubRepository.svelte";
  import Link from "$lib/components/root/Link.svelte";
  import Scroller from "$lib/components/root/Scroller.svelte";
  import TablerIcon from "$lib/components/icon/TablerIcon.svelte";
  import scheme from "$lib/types/colorScheme";
  import { fly, scale } from "svelte/transition";
  import { substringBefore, substringAfter } from "$lib/locale";

  const links = [
    { href: "mailto:you@axyria.dev", icon: "email" },
    { href: "https://yt.axyria.dev", icon: "youtube" },
    { href: "https://twitter.com/aaaxyria", icon: "twitter" },
    { href: "https://code.axyria.dev", icon: "github" },
  ];

  export let data;
</script>

<Animate>
  <div class="page-wrapper" transition:fly={{ y: 100, delay: 500 }}>
    <div class="top-side">
      <div id="introduction">
        <h1 transition:scale={{ delay: 500 }}>axyria</h1>
        <h5 id="description">
          {substringBefore(
            data.language.meta.home.introduction.description,
            "{areas}",
          )}
          <Scroller
            style="font-weight: bold; color: var(--bg-contrast-text-color);"
            slots={data.language.meta.home.introduction.areas}
          />
          {substringAfter(
            data.language.meta.home.introduction.description,
            "{areas}",
          )}
        </h5>
        <div class="links">
          {#each links as link}
            <a href={link.href}
              ><TablerIcon
                name={link.icon}
                width="26"
                height="26"
                color={scheme.textColor.zero}
              /></a
            >
          {/each}
        </div>
      </div>
      <DiscordPresence locale={data.language.meta} />
    </div>
    <div class="bottom-side">
      <section id="repositories">
        <GitHubRepository locale={data.language.meta} path="aaxyria/voxu" />
        <GitHubRepository
          locale={data.language.meta}
          path="aaxyria/basalt-engine"
        />
        <GitHubRepository
          locale={data.language.meta}
          path="aaxyria/axyria.dev"
        />
      </section>
      <section id="biography">
        <Link
          href="#biography"
          tag="h2"
          text={data.language.meta.home.biography.title}
        />
        <p>{data.language.meta.home.biography.text}</p>
      </section>
    </div>
  </div>
</Animate>

<style>
  .page-wrapper,
  #introduction,
  .top-side,
  .bottom-side {
    display: flex;
    gap: 1rem;
  }
  #repositories {
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    gap: 1rem;
  }
  .page-wrapper {
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
    width: 100%;
  }
  #introduction {
    flex-direction: column;
  }
  .top-side,
  .bottom-side {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  #biography {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  section p {
    text-align: justify;
    text-align-last: right;
  }
  .links {
    display: flex;
    flex-direction: row;
    width: fit-content;
    border-radius: 50px;
    gap: 1.75rem;
  }
  .links a {
    max-height: 26px;
  }
  h1 {
    transform-origin: left;
    transform-box: fill-box;
  }
  #description {
    text-align: justify;
    justify-content: space-between;
    gap: 5pt;
  }
  .top-side h1 {
    background: linear-gradient(
      90deg,
      var(--bg-contrast-text-color),
      var(--accent-color)
    );
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    background-clip: text;
    height: 4.75rem;
  }
  @media only screen and (max-width: 720px) {
    .page-wrapper {
      flex-direction: column;
      gap: 2rem;
    }
    section p {
      text-align-last: left;
    }
    .top-side,
    .bottom-side {
      flex-direction: column;
    }
  }
  @media only screen and (min-width: 721px) {
    .top-side :global(.discord-presence-wrapper) {
      max-width: 37.5%;
    }
    .top-side #introduction,
    .bottom-side section {
      max-width: 42.5%;
    }
    .bottom-side section {
      width: 42.5%;
    }
  }
</style>
