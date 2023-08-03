<script lang="ts">
  import type { availableTags } from "../models";

  export let href: string;
  export let title: string;
  export let body: string;
  export let tags: availableTags[];
</script>

<div
  class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
  <div class="p-5">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {title}
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {body}
    </p>
    <div class="flex gap-3">
      {#each tags as tag}
        <div
          class="border border-solid dark:border-flax-400 py-1 px-3 rounded-lg dark:text-flax-400 text-gray-900 border-gray-900"
        >
          {tag}
        </div>
      {/each}
    </div>
  </div>
</div>
