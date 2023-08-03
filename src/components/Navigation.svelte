<script>
  import { onMount } from "svelte";

  let currentSection = null;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection = entry.target.id;
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.9,
      }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  });
</script>

<nav class="text-lg flex flex-col">
  <div class="flex flex-row items-center">
    <div
      class={`w-2.5 h-2.5 rounded-full ${
        currentSection === "about" ? "bg-flax-400 scale-150" : "bg-stone-100 "
      }`}
    />
    <a href="#about" class="ml-3 hover:text-flax-400 transition delay-50"
      >About me</a
    >
  </div>
  <div class="flex flex-row items-center">
    <div
      class={`rounded-full transition delay-100 w-2.5 h-2.5  ${
        currentSection === "services"
          ? "bg-flax-400 scale-150"
          : "bg-stone-100 "
      }`}
    />
    <a href="#services" class="ml-3 hover:text-flax-400 transition delay-50"
      >Services</a
    >
  </div>
  <div class="flex flex-row items-center">
    <div
      class={`w-2.5 h-2.5 rounded-full ${
        currentSection === "projects"
          ? "bg-flax-400 scale-150"
          : "bg-stone-100 "
      }`}
    />
    <a href="#projects" class="ml-3 hover:text-flax-400 transition delay-50"
      >Projects</a
    >
  </div>
</nav>
