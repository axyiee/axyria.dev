<script lang="ts">
  import { onDestroy } from "svelte";
  import { fly } from "svelte/transition";

  export let slots: string[];
  export let delay: number = 1750;
  export let duration: number = 750;
  export let y: number = 25;

  let text = { index: 0, value: slots[0] };
  const periodic = setInterval(
    () =>
      (text = {
        index: text.index + 1 == slots.length ? 0 : text.index + 1,
        value: slots[text.index],
      }),
    delay,
  );
  onDestroy(() => clearTimeout(periodic));
  $: value = text.value;
</script>

{#key value}
  <span in:fly={{ duration, y }} {...$$restProps}>{value}</span>
{/key}

<style>
  span {
    transform-origin: left;
    transform-box: fill-box;
  }
</style>
