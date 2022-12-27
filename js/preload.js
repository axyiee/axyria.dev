/*
 * Disable preload state for a webpage when it finishes loading
 * This is useful when you don't want animations to be played upon page load
 */
window.addEventListener("DOMContentLoaded", () => setTimeout(() => document.body.classList.remove("preload"), 100));
