<script>
  import DarkThemeIcon from "./DarkThemeIcon.svelte";
  import LightThemeIcon from "./LightThemeIcon.svelte";
</script>

<style>
  #theme-switcher-wrapper {
    display: inline-block;
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
</style>

<div id="theme-switcher-wrapper">
  <DarkThemeIcon />
  <LightThemeIcon />
</div>
