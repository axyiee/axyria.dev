<script lang="ts">
  $: root = document.documentElement;
  function apply() {
    localStorage.setItem("theme", "light");
    root.setAttribute("data-theme", "light");
  }
  function withKeyboard(event: KeyboardEvent) {
    if (event.shiftKey && event.key.toLowerCase() == "l") {
      apply();
    }
  }
</script>

<div
  class="theme-light theme-switcher ux-click-effect"
  on:click={apply}
  on:keydown={event => withKeyboard(event)}
/>

<style>
  :root {
    --icon-size: 24px;
  }
  div.theme-light.theme-switcher {
    filter: invert(1);
    width: var(--icon-size);
    height: var(--icon-size);
    border-radius: var(--icon-size);
    border: 3px solid var(--background-color);
    background: #f9f9f9;
  }
  :global(html[data-theme="light"]) div.theme-light.theme-switcher {
    border-color: var(--theme-outline-color);
  }
</style>
