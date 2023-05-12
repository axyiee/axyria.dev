<script lang="ts">
  import scheme from "$lib/types/colorScheme";
  import MaterialIcon from "$lib/components/icon/MaterialIcon.svelte";
  import TablerIcon from "$lib/components/icon/TablerIcon.svelte";
  import type { LocaleDefinition } from "$lib/locale";

  export let locale: LocaleDefinition;
  export let path: string;

  let promise: Promise<GitHubRepository> = fetch(
    "https://api.github.com/repos/" + path,
  ).then((response) => response.json());

  interface GitHubRepository {
    owner: { avatar_url?: string; login?: string };
    name?: string;
    description?: string;
    open_issues_count?: number;
    forks?: number;
    subscribers_count?: number;
    stargazers_count?: number;
  }
</script>

{#await promise then data}
  <div class="repository-wrapper">
    <div class="repository-overview">
      <div class="repository-main-info">
        <div class="repository-name">
          <span>{data.owner.login}/</span>
          <strong>{data.name}</strong>
        </div>
        <img src={data.owner.avatar_url} alt="" aria-hidden />
      </div>
      <p class="repository-description">
        {data.description || locale.github.noDescription}
      </p>
    </div>
    <div class="repository-stats">
      <div>
        <span
          ><MaterialIcon
            outlined
            value="adjust"
            color={scheme.bgContrastTextColor.light1}
            size="1.25rem"
          />
          {data.open_issues_count}</span
        >
        <span
          >{(data.open_issues_count ?? 0) > 1
            ? locale.github.issue[1]
            : locale.github.issue[0]}</span
        >
      </div>
      <div>
        <span
          ><MaterialIcon
            outlined
            value="star_border"
            color={scheme.bgContrastTextColor.light1}
            size="1.25rem"
          />
          {data.stargazers_count}</span
        >
        <span
          >{(data.stargazers_count ?? 0) > 1
            ? locale.github.star[1]
            : locale.github.star[0]}</span
        >
      </div>
      <div>
        <span
          ><MaterialIcon
            outlined
            value="cyclone"
            color={scheme.bgContrastTextColor.light1}
            size="1.25rem"
          />
          {data.forks}</span
        >
        <span
          >{(data.forks ?? 0) > 1
            ? locale.github.fork[1]
            : locale.github.fork[0]}</span
        >
      </div>
      <div>
        <span
          ><MaterialIcon
            outlined
            value="visibility"
            color={scheme.bgContrastTextColor.light1}
            size="1.25rem"
          />
          {data.subscribers_count}</span
        >
        <span
          >{(data.subscribers_count ?? 0) > 1
            ? locale.github.watcher[1]
            : locale.github.watcher[0]}</span
        >
      </div>
      <a href="https://github.com/{data.owner.login}/{data.name}">
        <TablerIcon
          name="github"
          width="2rem"
          height="2rem"
          color={scheme.bgContrastTextColor.light1}
        />
      </a>
    </div>
  </div>
{/await}

<style>
  @import "@fontsource/space-grotesk";

  .repository-wrapper {
    transition: all 0.25s var(--bezier-curve);
    display: flex;
    flex-direction: column;
    background-color: var(--bg-contrast-low);
    color: var(--bg-contrast-text-color);
    line-height: 1;
    padding: 2rem;
    border-radius: 16px;
    width: 100%;
    height: fit-content;
    gap: 1rem;
  }
  .repository-wrapper:hover {
    transform: scale(1.05);
  }
  .repository-overview {
    display: flex;
    flex-direction: column;
  }
  .repository-main-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .repository-name {
    display: flex;
    flex-direction: column;
    font-family: var(--heading-font-family), var(--fallback-font-stack);
    font-size: 1.75rem;
  }
  .repository-description {
    color: var(--bg-contrast-text-color-l-1);
    font-size: 1.05rem;
    line-height: 1.75;
  }
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 10px;
  }
  .repository-stats {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 16px;
  }
  .repository-stats div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
  }
  .repository-stats div span:first-of-type {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.25rem;
    gap: 5px;
  }
  .repository-stats div span:last-of-type {
    color: var(--text-color-d-1);
  }
</style>
