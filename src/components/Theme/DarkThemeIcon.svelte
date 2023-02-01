<style>
  :root {
    --icon-size: 24px;
  }
  div.theme-dark.theme-switcher {
    filter: invert(1);
    width: var(--icon-size);
    height: var(--icon-size);
    border-radius: var(--icon-size);
    border: 3px solid var(--background-color);
    background: #010005;
  }
  :global(html[data-theme="dark"]) div.theme-dark.theme-switcher {
    border-color: var(--theme-outline-color);
  }
</style>

<script lang="ts">
  $: root = document.documentElement;
  function apply() {
    localStorage.setItem("theme", "dark");
    root.setAttribute("data-theme", "dark");
  }
  function withKeyboard(event: KeyboardEvent) {
    if (event.shiftKey && event.key == 'd') {
      apply();
    }
  }
</script>

<div 
  class="theme-dark theme-switcher ui-sound-listener ux-click-effect" 
  on:click={apply} 
  on:keydown={withKeyboard}
></div>
