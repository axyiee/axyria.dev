export function isClickOutside(node: HTMLElement, ignore: string[]) {
  const $ignore = Array.from(document.querySelectorAll(ignore.join(", ")));
  function dispatch(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!event.target || $ignore.includes(target)) {
      return;
    }
    if (node && !node.contains(target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent("click_outside"));
    }
  }
  document.addEventListener("click", dispatch, true);
  return {
    destroy() {
      document.removeEventListener("click", dispatch, true);
    },
  };
}
