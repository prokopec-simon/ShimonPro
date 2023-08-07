<script lang="ts">
  import Palette from "./Icons/Palette.svelte";
  import Lightbulb from "./Icons/Lightbulb.svelte";
  import Cloud from "./Icons/Cloud.svelte";
  import Code from "./Icons/Code.svelte";
  import CurlyBrackets from "./Icons/CurlyBrackets.svelte";
  import Database from "./Icons/Database.svelte";
  import ListChecks from "./Icons/ListChecks.svelte";
  import Shield from "./Icons/Shield.svelte";
  import GameController from "./Icons/GameController.svelte";
  import BarChart from "./Icons/BarChart.svelte";
  import LoadBalancer from "./Icons/LoadBalancer.svelte";
  import Wordpress from "./Icons/Wordpress.svelte";

  export let title: string;
  export let icon: keyof typeof availableIcons;
  export let href: string;

  const availableIcons = {
    palette: Palette,
    lightbulb: Lightbulb,
    code: Code,
    cloud: Cloud,
    curlyBrackets: CurlyBrackets,
    database: Database,
    listChecks: ListChecks,
    shield: Shield,
    gameController: GameController,
    barChart: BarChart,
    wordpress: Wordpress,
    loadBalancer: LoadBalancer,
  };
</script>

{#if href != undefined}
  <a href={"services/" + href}>
    <div
      class=" bg-white border border-gray-200 rounded-lg transition dark:bg-gray-800 dark:border-gray-700 dark:bg-opacity-40 hover:dark:bg-opacity-70 hover:dark:text-flax-400 group hover:dark:border-flax-400 flex flex-col justify-end items-center md:py-3 py-2 px-4 md:h-40 h-32"
    >
      <svelte:component this={availableIcons[icon]} />
      <div class="text-center py-2 break-words">{title}</div>
    </div>
  </a>
{:else}
  <div
    class=" bg-white border border-gray-200 dark:text-gray-600 rounded-lg transition dark:bg-gray-800 dark:border-gray-700 dark:bg-opacity-40 flex flex-col justify-end items-center md:py-3 py-2 px-4 md:h-40 h-32"
  >
    <svelte:component this={availableIcons[icon]} />
    <div class="text-center py-2 break-words">{title}</div>
  </div>
{/if}
