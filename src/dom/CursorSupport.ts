export default function addCustomCursorSupport(query: string) {
  window.addEventListener("mouseover", event => {
    const matches = (event.target as HTMLElement).matches(query);
    const color = matches ? "white" : "var(--accent-color)";
    document.documentElement.style.setProperty("--cursor-color", color);
  });
}
