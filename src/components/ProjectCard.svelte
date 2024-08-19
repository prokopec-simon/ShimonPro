<script lang="ts">
  import type { availableTags } from "../models";

  export let href: string;
  export let title: string;
  export let body: string;
  export let tags: availableTags[];
  export let imageUrl: string;
</script>

<a {href}>
  <div
    class="bg-white border border-gray-200 rounded-lg transition dark:bg-gray-800 dark:border-gray-700 dark:bg-opacity-40 hover:dark:bg-opacity-70 group hover:dark:border-flax-400 flex flex-row"
  >
    <div class="md:p-5 p-3 flex-grow">
      <div class="flex flex-row mb-2 justify-between">
        <h1
          class="text-2xl font-bold text-gray-900 dark:text-white font-heading group-hover:dark:text-flax-400"
        >
          {title}
        </h1>
      </div>

      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {body}
      </p>
      <div class="flex md:gap-3 gap-1">
        {#each tags as tag}
          <div
            class="border border-solid dark:border-flax-400 py-0.5 md:py-1 md:px-3 px-2 rounded-lg dark:text-flax-100 text-gray-900 border-gray-900 md:text-sm text-xs"
          >
            {tag}
          </div>
        {/each}
      </div>
    </div>
    <div class="flex-none">
      <img
        src={imageUrl}
        alt={title}
        class="object-cover w-32 h-32 md:w-48 md:h-48 rounded-r-lg"
      />
    </div>
  </div>
</a>
