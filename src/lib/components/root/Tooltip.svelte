<script lang="ts">
  let x: number, y: number, show: boolean;

  function onMouseMove(kind: "over" | "move", event: MouseEvent) {
    if (kind == "over") {
      show = true;
    }
    x =
      event.clientX > window.innerWidth - 200
        ? event.clientX - 200
        : event.clientX + 5;
    y =
      event.clientY > window.innerHeight - 200
        ? event.clientY - 200
        : event.clientY + 5;
  }
  function onMouseLeave() {
    show = false;
  }
</script>

<div
  on:mouseover={(event) => onMouseMove("over", event)}
  on:mousemove={(event) => onMouseMove("move", event)}
  on:mouseleave={onMouseLeave}
  on:focus
  style="--tooltip-left: {x}px; --tooltip-top: {y}px; --tooltip-opacity: {show
    ? 1
    : 0};"
>
  <slot name="tooltip" />
  <slot name="content" />
</div>

<style>
  :global([slot="tooltip"]) {
    border: 1px solid var(--bg-contrast-text-color);
    box-shadow: 1px 1px 1px var(--bg-contrast-text-color);
    background: var(--bg-contrast-color);
    color: var(--bg-contrast-text-color);
    position: fixed;
    border-radius: 4px;
    padding: 4px;
    pointer-events: none;
    z-index: 2;
    left: var(--tooltip-left);
    top: var(--tooltip-top);
    opacity: var(--tooltip-opacity);
    transition: all 0.25s var(--bezier-curve);
  }
</style>
