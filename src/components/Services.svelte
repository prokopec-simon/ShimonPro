<script>
  import CommandLineText from "./CommandLineText.svelte";
  import ServiceCard from "./ServiceCard.svelte";

  const services = [
    { title: "Consulting", icon: "lightbulb", href: "", text: "" },
    { title: "Design", icon: "palette", href: "", text: "" },
    { title: "Frontend", icon: "code", href: "", text: "" },
    { title: "Backend", icon: "curlyBrackets", href: "", text: "" },
    { title: "Database design", icon: "database", href: "", text: "" },
    { title: "Data Science", icon: "barChart", href: "", text: "" },
    { title: "Testing & QA", icon: "listChecks", href: "", text: "" },
    { title: "Deployment and hosting", icon: "cloud", href: "", text: "" },
  ];

  const unavailableServices = [
    { title: "Cyber Security", icon: "shield", href: "", text: "" },
    { title: "Large Infrastructure", icon: "loadBalancer", href: "", text: "" },
    { title: "Wordpress", icon: "wordpress", href: "", text: "" },
    { title: "Game Development", icon: "gameController", href: "", text: "" },
  ];
</script>

<section id="services">
  <CommandLineText text="systemctl --type=service" />
  <h3>What I do</h3>
  <div class="grid grid-cols-4 gap-2">
    {#each services as service}
      <ServiceCard title={service.title} icon={service.icon} />
    {/each}
    <div />
  </div>
  <h3>What I don't do</h3>
  <div class="grid">
    <div class="grid grid-cols-4 gap-2 justify-center">
      {#each unavailableServices as service}
        <ServiceCard title={service.title} icon={service.icon} />
      {/each}
      <div />
    </div>
  </div>
</section>
