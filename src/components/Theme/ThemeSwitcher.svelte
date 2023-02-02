<script>
  import UxEffects from "@components/UX/UXEffects.svelte";
  import DarkThemeIcon from "./DarkThemeIcon.svelte";
  import LightThemeIcon from "./LightThemeIcon.svelte";
</script>

<div class="theme-switcher-wrapper">
  <DarkThemeIcon />
  <LightThemeIcon />
  <UxEffects query=".theme-switcher-wrapper > *" />
</div>

<style>
  .theme-switcher-wrapper {
    display: inline-block;
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
</style>
