<script lang="ts">
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

  const artists = [
    {
      href: "https://psychoangel.bandcamp.com",
      name: "psychoangel",
      key: "psychoangel",
    },
    {
      href: "https://yuce0903.bandcamp.com/",
      name: "YUC'e",
      key: "yuce",
    },
    {
      href: "https://www.youtube.com/@igusuri_please",
      name: "iyowa",
      key: "iyowa",
    },
    {
      href: "https://www.youtube.com/@kikuo_sound/",
      name: "Kikuo",
      key: "kikuo",
    },
    {
      href: "https://glassbeach.bandcamp.com/",
      name: "glass beach",
      key: "glassBeach",
    },
    {
      href: "https://en.wikipedia.org/wiki/Ant%C3%B4nio_Carlos_Jobim",
      name: "Tom Jobim (✞1927-1994)",
      key: "tom",
    },
    {
      href: "https://en.wikipedia.org/wiki/Chico_Buarque",
      name: "Chico Buarque (✞1944-)",
      key: "chico",
    },
  ];

  const books = [
    {
      href: "https://softwarefoundations.cis.upenn.edu/",
      name: "Software Foundations, Benjamin C. Pierce",
      key: "sf",
    },
    {
      href: "https://craftinginterpreters.com/",
      name: "Crafting Interpreters, Robert Nystrom",
      key: "ci",
    },
    {
      href: "https://www.muriloleal.com.br/visao/repositorio/unijua/lfa//Livro%20-%20Linguagens%20Formais%20e%20Aut%C3%B4matos.pdf",
      name: "Linguagens Formais e Autômatos, P. Blauth Menezes",
      key: "linguagensFormais",
    },
  ];

  function getEntryDescription(meta: unknown, obj: { key: string }): string {
    return (meta as Record<string, string>)[obj.key] ?? "";
  }

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
      <div class="vertical">
        <section id="biography">
          <Link
            href="#biography"
            tag="h2"
            text={data.language.meta.home.biography.title}
          />
          <p>{data.language.meta.home.biography.text}</p>
        </section>
        <section id="artists">
          <Link
            href="#artists"
            tag="h2"
            text={data.language.meta.home.artists.title}
          />
          <p>{data.language.meta.home.artists.text}</p>
          <ul>
            {#each artists as artist}
              <li>
                <a href={artist.href}>{artist.name}</a> - {getEntryDescription(
                  data.language.meta.home.artists,
                  artist,
                )}
              </li>
            {/each}
          </ul>
        </section>
        <section id="books">
          <Link
            href="#books"
            tag="h2"
            text={data.language.meta.home.books.title}
          />
          <p>{data.language.meta.home.books.text}</p>
          <ul>
            {#each books as book}
              <li>
                <a href={book.href}>{book.name}</a> - {getEntryDescription(
                  data.language.meta.home.books,
                  book,
                )}
              </li>
            {/each}
          </ul>
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
    align-items: flex-start;
    gap: 1rem;
  }
  .bottom-side .vertical,
  .bottom-side .vertical section,
  .bottom-side .vertical ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
  }
  .bottom-side .vertical {
    gap: 1em;
  }
  .bottom-side .vertical ul {
    max-width: 75%;
    text-align: justify;
    text-align-last: right;
    gap: 0.25rem;
    font-size: 0.7em;
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
    .top-side,
    .bottom-side {
      flex-direction: column;
    }
  }
  @media only screen and (min-width: 721px) {
    .top-side :global(.discord-presence-wrapper) {
      max-width: 37.5%;
    }
    .top-side #introduction {
      max-width: 42.5%;
    }
    .bottom-side > section,
    .bottom-side > div {
      width: 42.5%;
    }
  }
</style>
