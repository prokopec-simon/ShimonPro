<script lang="ts">
  import type { availableTags } from "../models";
  import CommandLineText from "./CommandLineText.svelte";
  import ProjectCard from "./ProjectCard.svelte";

  const projects = [
    {
      href: "projects/FluxBoard",
      title: "FluxBoard",
      body: "A compact web application for Kanban project management.",
      tags: ["Angular", "C#", "MSSQL", "IIS"] as availableTags[],
    },
    {
      href: "projects/DailyStrike",
      title: "DailyStrike",
      body: "A web app for fantasy predictions of competitive Counter Strike matches once a day, letting players take place in seasonal ladder and win prizes.",
      tags: [
        "Next",
        "Tailwind",
        "Vercel",
        "NestJS",
        "MySQL",
      ] as availableTags[],
    },
    {
      href: "projects/Goldbrew",
      title: "Simplex solver & Goldbrew",
      repositoryHref: "",
      body: "A Lua library for solving optimization tasks using simplex method. A World Of Warcraft addon using this library to maximize in-game profits.",
      tags: ["Lua"] as availableTags[],
    },
    {
      href: "projects/Manta",
      title: "Manta",
      body: "Large scale web application and REST API for commercial mobile application used by manufacturing companies.",
      tags: ["Angular", "C#", "MSSQL", "IIS"] as availableTags[],
    },
  ];
</script>

<section id="projects">
  <CommandLineText text="cd .\projects\ && ls" />
  <div class="grid grid-cols-1 gap-y-4 pt-1">
    {#each projects as project}
      <ProjectCard
        href={project.href}
        body={project.body}
        title={project.title}
        tags={project.tags}
      />
    {/each}
  </div>
</section>
