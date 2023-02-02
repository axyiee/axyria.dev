<script lang="ts">
  import { isClickOutside } from "@dom/ClickOutsideListener";
  import ThemeSwitcher from "@components/Theme/ThemeSwitcher.svelte";
  import { fade } from "svelte/transition";
  import GearIcon from "@components/Icons/GearIcon.svelte";
  import Switch from "svelte-switch";
  import UxEffects from "@components/UX/UXEffects.svelte";

  let shown: boolean = false;
  function handleIconClick() {
    shown = !shown;
  }
  function handleIconWithKeyboard(event: KeyboardEvent) {
    event.shiftKey && event.key.toLowerCase() == "s" && (shown = !shown);
  }
  function handleOutsideClick(_event) {
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
      transition:fade={{ duration: 200 }}
    >
      <section class="app-settings-controller-section">
        <header>
          <h1>Theme</h1>
          <p>You can choose between two themes available in this website.</p>
        </header>
        <ThemeSwitcher />
      </section>
      <section class="app-settings-controller-section">
        <header>
          <h1>Custom Cursor</h1>
          <p>
            Whether or not the custom cursor should be enabled while visiting
            this website.
          </p>
        </header>
        <span class="switch-wrapper ux-click-effect">
          <Switch
            checked={localStorage.getItem("custom_cursor_enable") !== "false"}
            on:change={event => {
              const state = event.detail.checked ? "enable" : "disable";
              localStorage.setItem(
                "custom_cursor_enable",
                event.detail.checked.toString()
              );
              window.dispatchEvent(new CustomEvent("custom_cursor_" + state));
            }}
            offColor="#3c3c3c"
            onColor="#002C84"
          >
            <span slot="checkedIcon" />
            <span slot="unCheckedIcon" />
          </Switch>
          <UxEffects query=".switch-wrapper" />
        </span>
      </section>
    </div>
  {/if}
</li>
<UxEffects query=".settings-controller-icon" />

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
    display: flex;
    flex-direction: column;
    font-family: var(--font-heading);
    gap: 32px;
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
  :global(button),
  :global(.theme-switcher) {
    cursor: var(--cursor-mode);
  }
  :global(div.react-switch-bg, div.react-switch-handle) {
    filter: invert(1);
  }
  @media only screen and (max-width: 700px) {
    li.navigation-top div#app-settings-controller {
      left: 0;
      top: 4em;
      width: 250px;
    }
  }
</style>
