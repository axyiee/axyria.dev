<script lang="ts">
  export let size: string = "24px";
  export let outlined: boolean = false;
  export let color: string = "currentColor";
  let className: string = "";
  export let style: string = "";
  export let value: string;
  export { className as class };
</script>

<i
  class="material-icons{outlined ? '-outlined' : ''} {className}"
  style="font-size: {size}; color: {color}; {style}"
  {...$$restProps}>{value}</i
>

<style>
  i {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
</style>
