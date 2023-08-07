<script>
  import CommandLineText from "./CommandLineText.svelte";
  import ServiceCard from "./ServiceCard.svelte";

  const services = [
    { title: "Consulting", icon: "lightbulb", href: "consulting" },
    { title: "Design", icon: "palette", href: "design" },
    { title: "Frontend Development", icon: "code", href: "frontend" },
    { title: "Backend Development", icon: "curlyBrackets", href: "backend" },
    { title: "Database Design", icon: "database", href: "database" },
    { title: "Data Science", icon: "barChart", href: "data-science" },
    { title: "Testing & QA", icon: "listChecks", href: "testing" },
    { title: "Deployment & Hosting", icon: "cloud", href: "deployment" },
  ];

  const unavailableServices = [
    { title: "Cyber Security", icon: "shield" },
    { title: "Large Infrastructure", icon: "loadBalancer" },
    { title: "Wordpress", icon: "wordpress" },
    { title: "Game Development", icon: "gameController" },
  ];
</script>

<section id="services">
  <CommandLineText text="systemctl --type=service" />
  <h3>I can help you with</h3>
  <div class="grid md:grid-cols-4 gap-4 grid-cols-2">
    {#each services as service}
      <ServiceCard
        title={service.title}
        icon={service.icon}
        href={service.href}
      />
    {/each}
    <div />
  </div>
  <h3>I can't really help you with</h3>
  <div class="grid">
    <div class="grid md:grid-cols-4 grid-cols-2 md:gap-3 gap-4 justify-center">
      {#each unavailableServices as service}
        <ServiceCard title={service.title} icon={service.icon} />
      {/each}
      <div />
    </div>
  </div>
</section>
