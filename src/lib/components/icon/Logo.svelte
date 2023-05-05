<script lang="ts">
  export let width: string = "85";
  export let height: string = "85";
  export let color: string = "white";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 85 85"
  fill="none"
  {width}
  {height}
  {...$$restProps}
>
  <g clip-path="url(#clip0_4_18)">
    <circle cx="20" cy="20" r="20" fill={color} />
    <rect x="45" width="40" height="40" fill={color} />
    <rect y="45" width="40" height="40" fill={color} />
    <rect
      x="45"
      y="65.0736"
      width="27.7782"
      height="28.1802"
      transform="rotate(-45 45 65.0736)"
      fill={color}
    />
  </g>
  <defs>
    <clipPath id="clip0_4_18">
      <rect width="85" height="85" rx="10" fill={color} />
    </clipPath>
  </defs>
</svg>
