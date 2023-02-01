function dispatch(event: MouseEvent, node) {
  node &&
    !node.contains(event.target) &&
    !event.defaultPrevented &&
    node.dispatchEvent(new CustomEvent("click_outside", node));
}

export function isClickOutside(node) {
  const handle = event => dispatch(event, node);
  document.addEventListener("click", handle);
  return {
    destroy() {
      document.removeEventListener("click", handle);
    },
  };
}
