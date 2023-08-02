<script lang="ts">
  import { onMount } from "svelte";
  import HeroAttributeOrb from "./HeroAttributeOrb.svelte";

  let angle = 0;

  function rotateDiv() {
    angle += 0.01;
    if (angle >= 360) {
      angle = 0;
    }
  }
  onMount(() => {
    setInterval(rotateDiv, 5);
  });
</script>

<div class="md:w-1/2">
  <HeroAttributeOrb color="bg-teal-700" text="Competence" offset={0} {angle} />
  <HeroAttributeOrb color="bg-pink-700" text="Integrity" offset={72} {angle} />
  <HeroAttributeOrb
    color="bg-emerald-700"
    text="Adaptability"
    offset={144}
    {angle}
  />
  <HeroAttributeOrb
    color="bg-orange-700"
    text="Communication"
    offset={216}
    {angle}
  />
  <HeroAttributeOrb
    color="bg-sky-700"
    text="Reliability"
    offset={288}
    {angle}
  />
</div>
