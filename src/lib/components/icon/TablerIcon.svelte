<script lang="ts">
  export let width: string = "24px";
  export let height: string = "24px";
  export let color: string = "currentColor";
  export let style: string = "";
  export let name: string;

  const content: { [key: string]: string } = {
    discord:
      '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path> <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path> <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l.975 1.923a11.913 11.913 0 0 1 4.053 0l.972 -1.923c1.5 .16 3.043 .485 4.5 1.5c2 5.667 2.167 9.833 1.5 11.5c-.667 1.333 -2 3 -3.5 3c-.5 0 -2 -2 -2 -3"></path> <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>',
    email:
      '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path> <path d="M3 7l9 6l9 -6"></path>',
    github:
      '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>',
    home: '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path> <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path> <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>',
    news: '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path> <path d="M8 8l4 0"></path> <path d="M8 12l4 0"></path> <path d="M8 16l4 0"></path>',
    twitter:
      '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>',
    youtube:
      '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path> <path d="M10 9l5 3l-5 3z"></path>',
  };

  const value = content[name];
</script>

{#if value}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    {width}
    {height}
    style="stroke: {color}; {style}"
    {...$$restProps}
  >
    {@html value}
  </svg>
{/if}
