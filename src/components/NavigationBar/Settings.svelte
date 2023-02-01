<script lang="ts">
  import { isClickOutside } from "@dom/ClickOutsideListener";
  import ThemeSwitcher from "@components/Theme/ThemeSwitcher.svelte";
  import { fade } from "svelte/transition";
  import GearIcon from "@components/Icons/GearIcon.svelte";

  let shown: boolean = false;
  function handleIconClick() {
    shown = !shown;
  }
  function handleIconWithKeyboard(event: KeyboardEvent) {
    event.shiftKey && event.key.toLowerCase() == "s" && (shown = !shown);
  }
  function handleOutsideClick(event) {
    shown && (shown = false);
  }
</script>

<li class="navigation-top">
  <GearIcon
    class="ui-sound-listener ux-click-effect settings-controller-icon"
    on:click={handleIconClick}
    on:keydown={handleIconWithKeyboard}
  />
  {#if shown}
    <div
      id="app-settings-controller"
      use:isClickOutside={["svg.settings-controller-icon"]}
      on:click_outside={handleOutsideClick}
      in:fade={{ duration: 200 }}
      out:fade={{ duration: 200 }}
    >
      <section class="app-settings-controller-section">
        <header>
          <h1>Theme</h1>
          <p>You can choose between two themes available in this website.</p>
        </header>
        <ThemeSwitcher />
      </section>
    </div>
  {/if}
</li>

<style>
  li.navigation-top {
    display: flex;
    list-style: none;
    padding: 10px;
    border-radius: 10px;
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
  }
  li.navigation-top :global(svg.settings-controller-icon) {
    transition: transform 0.2s ease-in-out;
    stroke: var(--accent-color);
  }
  li.navigation-top :global(svg.settings-controller-icon):hover {
    transform: scale(1.5);
  }
  li.navigation-top div#app-settings-controller {
    display: flex;
    z-index: 1;
  }
  li.navigation-top div#app-settings-controller {
    position: absolute;
    filter: invert(1);
    float: left;
    left: 5em;
    top: 0;
    width: 300px;
    height: fit-content;
    padding: 20px 35px 20px 35px;
    background-color: var(--background-color);
    transition: background-color 0.2s ease-in-out;
    border-radius: 10px;
  }
  li.navigation-top div#app-settings-controller {
    flex-direction: column;
    font-family: var(--font-heading);
    gap: 16px;
  }
  li.navigation-top div#app-settings-controller p {
    color: var(--text-secondary-color);
    line-height: 1.5;
  }
  li.navigation-top
    div#app-settings-controller
    .app-settings-controller-section
    header {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  li.navigation-top
    div#app-settings-controller
    .app-settings-controller-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  @media only screen and (max-width: 700px) {
    li.navigation-top div#app-settings-controller {
      left: 0;
      top: 4em;
      width: 250px;
    }
  }
</style>
