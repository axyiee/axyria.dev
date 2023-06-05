<script lang="ts">
  import Animate from "$lib/components/root/Animate.svelte";
  import DiscordPresence from "$lib/components/stats/DiscordPresence.svelte";
  import GitHubRepository from "$lib/components/stats/GitHubRepository.svelte";
  import Link from "$lib/components/root/Link.svelte";
  import TablerIcon from "$lib/components/icon/TablerIcon.svelte";
  import scheme from "$lib/types/colorScheme";
  import { fly, scale } from "svelte/transition";
  import Artists from "$lib/components/root/collection/Artists.svelte";
  import Books from "$lib/components/root/collection/Books.svelte";

  const tablerLinks = [
    { href: "mailto:you@axyria.dev", icon: "email" },
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
        <h5 id="description">{data.language.meta.home.introduction}</h5>
        <div class="links">
          {#each tablerLinks as link}
            <a href={link.href}
              ><TablerIcon
                name={link.icon}
                width="26"
                height="26"
                color={scheme.bgContrastTextColor.zero}
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
      <div class="vertical">
        <section id="about-me">
          <Link
            href="#about-me"
            tag="h2"
            text={data.language.meta.home.aboutMe.title}
          />
          <p>{data.language.meta.home.aboutMe.text}</p>
        </section>
        <section id="artists">
          <Link
            href="#artists"
            tag="h2"
            text={data.language.meta.home.artists.title}
          />
          <p>{data.language.meta.home.artists.text}</p>
          <Artists locale={data.language.meta} />
        </section>
        <section id="books">
          <Link
            href="#books"
            tag="h2"
            text={data.language.meta.home.books.title}
          />
          <p>{data.language.meta.home.books.text}</p>
          <Books locale={data.language.meta} />
        </section>
      </div>
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
  .bottom-side .vertical,
  .bottom-side .vertical section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
  }
  .bottom-side .vertical {
    gap: 1em;
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
  section p {
    text-align: justify;
    text-align-last: right;
  }
  .links {
    display: flex;
    flex-direction: row;
    width: fit-content;
    border-radius: 2em;
    background: var(--bg-contrast-low);
    padding: 0.5em 1.25em;
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
    color: var(--accent-color);
  }
  @media only screen and (max-width: 720px) {
    .page-wrapper {
      flex-direction: column;
      gap: 2rem;
    }
    .top-side,
    .bottom-side {
      flex-direction: column;
    }
  }
  @media only screen and (min-width: 721px) {
    .top-side > *,
    .bottom-side > section,
    .bottom-side > div {
      width: 42.5%;
    }
  }
</style>
