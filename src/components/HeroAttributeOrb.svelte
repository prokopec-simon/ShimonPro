<!-- HeroAttributeOrb.svelte -->
<script lang="ts">
  export let text: string;
  export let color: string;
  export let angle: number;
  export let offset: number;
</script>

<div
  class="w-32 h-32 {color} rounded-full"
  style="position: absolute; top: 50%; left: 50%; transform-origin: 50% 150px; transform: translate(-50%, -50%) rotate({offset +
    angle}deg);"
>
  <div
    class="absolute"
    style="transform: translate(0,0) rotate(-{offset + angle}deg);"
  >
    {text}
  </div>
</div>
