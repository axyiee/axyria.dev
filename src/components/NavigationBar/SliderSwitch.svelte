<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let value: boolean = true;
  const dispatch = createEventDispatcher();

  function _dispatch() {
    const name = value ? "enable" : "disable";
    dispatch(name, {});
  }
  function toggle() {
    value = !value;
    _dispatch();
  }
  _dispatch();
</script>

<button
  class="slider-button"
  role="switch"
  aria-checked={value}
  on:click={toggle}
/>

<style>
  button.slider-button {
    --container-color: var(--accent-color);
    --inside-color: var(--text-color);
  }
</style>
