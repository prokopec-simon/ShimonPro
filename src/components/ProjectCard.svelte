<script lang="ts">
  import type { availableTags } from "../models";
  import Github from "./icons/Github.svelte";

  export let href: string;
  export let title: string;
  export let body: string;
  export let repositoryHref: string | undefined = undefined;
  export let tags: availableTags[];
</script>

<a {href}>
  <div
    class="bg-white border border-gray-200 rounded-lg transition dark:bg-gray-800 dark:border-gray-700 dark:bg-opacity-40 hover:dark:bg-opacity-70 group hover:dark:border-flax-400"
  >
    <div class="p-5">
      <div class="flex flex-row mb-2 justify-between">
        <h5
          class="text-2xl font-bold text-gray-900 dark:text-white font-heading group-hover:dark:text-flax-400"
        >
          {title}
        </h5>
        {#if repositoryHref != undefined}
          <button
            class="-mt-1"
            on:click={() => (window.location.href = repositoryHref ?? "")}
          >
            <Github />
          </button>
        {/if}
      </div>

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
</a>
