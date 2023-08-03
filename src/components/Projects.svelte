<script lang="ts">
  import type { availableTags } from "../models";
  import CommandLineText from "./CommandLineText.svelte";
  import ProjectCard from "./ProjectCard.svelte";

  const projects = [
    {
      href: "projects/DailyStrike",
      title: "DailyStrike",
      body: "A web app for fantasy predictions of competitive Counter Strike matches once a day.",
      tags: [
        "Next",
        "Tailwind",
        "Vercel",
        "NestJS",
        "MySQL",
      ] as availableTags[],
    },
    {
      href: "projects/MyLifeAudit",
      title: "My Life Audit",
      body: "A web application helping users reevaluate their life.",
      tags: ["SvelteKit", "Tailwind", "Vercel", "MySQL"] as availableTags[],
    },
    {
      href: "projects/Manta",
      title: "Manta",
      body: "Lorem ipsum.",
      tags: ["Angular", "C#", "MSSQL", "IIS"] as availableTags[],
    },
  ];
</script>

<section class="min-h-screen">
  <CommandLineText text="cd .\projects\ && ls" />
  <div class="grid grid-cols-1 gap-y-4">
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
