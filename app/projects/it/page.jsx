import Image from "next/image";
import Link from "next/link";
import styles from "./ITProjects.module.css";

const projects = [
  {
    href: "/projects/it/preWatch",
    src: "/imgs/projects/preWatch/preWatch-demo.png",
    alt: "preWatch",
    styleClass: "",
  },
  {
    href: "/projects/it/auFilDuTemps",
    src: "/imgs/projects/auFilDuTemps/AuFilDuTemps1.png",
    alt: "Au Fil Du Temps",
    styleClass: "auFilDuTemps",
  },
  {
    href: "/projects/it/marieGobelins",
    src: "/imgs/projects/mari-e/brochure-marie.png",
    alt: "Brochure Marie",
    styleClass: "marieGobelins",
  },
  {
    href: "/projects/it/rerAGate",
    src: "/imgs/projects/rerAGate/rer-a-gate.png",
    alt: "RER A Gate",
    styleClass: "rerAGate",
  },
  {
    href: "/projects/it/averagePlayer",
    src: "/imgs/projects/averagePlayer/Champions.png",
    alt: "Average Player",
    styleClass: "averagePlayer",
  },
  {
    href: "/projects/it/pigeonGate",
    src: "/imgs/projects/pigeonGate/pigeon-gate.png",
    alt: "Pigeon Gate",
    styleClass: "pigeonGate",
  },
  {
    href: "/projects/it/elixir",
    src: "/imgs/projects/elixir/Elixir.png",
    alt: "Elixir",
    styleClass: "elixir",
  },
  {
    href: "/projects/it/inusTale",
    src: "/imgs/projects/inusTale/inus-tale.png",
    alt: "Inus Tale",
    styleClass: "inusTale",
  },
];

export default function ITProjects() {
  return (
    <main className={styles["main-content"]}>
      <Link id="btnProject" href="/">
        Home →
      </Link>
      <Link id="btnHome" href="/projects">
        ← Projects
      </Link>

      <h1 className="sub-title">IT Projects</h1>

      <section className={styles["projects-grid"]}>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            className={`${styles["project-card"]} ${
              styles[project.styleClass] || ""
            }`}
          >
            <Image
              src={project.src}
              alt={project.alt}
              width={600}
              height={400}
              className={styles.img}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
