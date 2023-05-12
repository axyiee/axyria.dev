<script lang="ts">
  const props: { x: number; y: number; hidden: boolean; clicking: boolean } = {
    x: 0,
    y: 0,
    hidden: true,
    clicking: false,
  };
  let timeout: ReturnType<typeof setTimeout>;

  function move(event: MouseEvent) {
    (props.x = event.clientX), (props.y = event.clientY);
    props.hidden = false;
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => (props.hidden = true), 1000);
  }
</script>

<svelte:window
  on:mousemove={move}
  on:mousedown={() => (props.clicking = true)}
  on:mouseup={() => (props.clicking = false)}
/>

<div
  class="web-pointer"
  style:opacity={props.hidden ? 0 : 1}
  style="transform: translateX({props.x - 12}px) translateY({props.y -
    12}px) scale({props.clicking ? 1.25 : 1})"
>
  <div class="d-center" />
</div>

<style>
  @media (pointer: fine) {
    .web-pointer {
      position: fixed;
      left: 0;
      top: 0;
      height: 24px;
      width: 24px;
      z-index: 99;
      pointer-events: none;
      border: 1px solid var(--bg-contrast-text-color-d-2);
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s all var(--bezier-curve);
    }
    .d-center {
      width: 15px;
      height: 15px;
      border: 1px solid var(--bg-contrast-text-color-d-2);
      border-radius: 100%;
    }
    :global([data-disable-pointer="true"]) .web-pointer {
      display: none;
    }
  }
</style>
