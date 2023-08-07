<script>
  import CommandLineText from "./CommandLineText.svelte";
  import ServiceCard from "./ServiceCard.svelte";

  const services = [
    { title: "Consulting", icon: "lightbulb", href: "consulting" },
    { title: "Design", icon: "palette", href: "" },
    { title: "Frontend Development", icon: "code", href: "" },
    { title: "Backend Development", icon: "curlyBrackets", href: "" },
    { title: "Database Design", icon: "database", href: "" },
    { title: "Data Science", icon: "barChart", href: "" },
    { title: "Testing & QA", icon: "listChecks", href: "" },
    { title: "Deployment & Hosting", icon: "cloud", href: "" },
  ];

  const unavailableServices = [
    { title: "Cyber Security", icon: "shield", href: "" },
    { title: "Large Infrastructure", icon: "loadBalancer", href: "" },
    { title: "Wordpress", icon: "wordpress", href: "" },
    { title: "Game Development", icon: "gameController", href: "" },
  ];
</script>

<section id="services">
  <CommandLineText text="systemctl --type=service" />
  <h3>I can help you with</h3>
  <div class="grid grid-cols-4 gap-2">
    {#each services as service}
      <ServiceCard title={service.title} icon={service.icon} />
    {/each}
    <div />
  </div>
  <h3>I can't really help you with</h3>
  <div class="grid">
    <div class="grid grid-cols-4 gap-2 justify-center">
      {#each unavailableServices as service}
        <ServiceCard title={service.title} icon={service.icon} />
      {/each}
      <div />
    </div>
  </div>
</section>
