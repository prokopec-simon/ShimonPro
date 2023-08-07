<script>
  import { onMount } from "svelte";
  import Moon from "./Icons/Moon.svelte";
  import Sun from "./Icons/Sun.svelte";

  let theme = localStorage.getItem("theme") || "light";

  const handleClick = () => {
    theme = theme === "light" ? "dark" : "light";
    updateTheme();
  };

  const updateTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  };

  onMount(() => {
    updateTheme();
  });
</script>

<nav
  class="flex justify-end p-4 fixed top-0 z-10 md:px-16 px-4 w-full md:bg-transparent bg-gray-900"
>
  <button on:click={handleClick} id="theme-switch" aria-label="Theme switch">
    {#if theme === "light"}
      <Moon />
    {:else}
      <Sun />
    {/if}
  </button>
</nav>
