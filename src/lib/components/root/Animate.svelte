<script lang="ts">
  import { onMount } from "svelte";

  let ready: boolean = false;

  type AnimationHook = (setAnimate: (result: boolean) => void) => void;

  function buildHook(hook: AnimationHook) {
    const set = (result: boolean) => (ready = result);
    return hook(set);
  }

  const onpageload: AnimationHook = (setAnimate) =>
    onMount(() => setAnimate(true));

  export let hooks: AnimationHook[] = [onpageload];

  hooks.forEach(buildHook);
</script>

{#if ready}
  <slot />
{/if}
