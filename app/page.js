"use client";

import { useState } from "react";

const skills = [
  ["Java", "Backend"],
  ["Spring Boot", "Backend"],
  ["Spring Security", "Backend"],
  ["REST APIs", "Backend"],
  ["JavaScript", "Language"],
  ["React.js", "Frontend"],
  ["Next.js", "Frontend"],
  ["Node.js", "Backend"],
  ["Express.js", "Backend"],
  ["MongoDB", "Database"],
  ["SQL", "Database"],
  ["Docker", "DevOps"],
  ["Git", "Tools"],
  ["Flutter / Dart", "Mobile"],
];

const projects = [
  {
    title: "PayFlow One",
    type: "Payment Platform",
    description:
      "A Spring Boot payment-processing backend with merchant APIs, JWT security, API-key management, provider routing, and mock payment-provider integrations.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "Docker", "REST"],
    number: "01",
  },
  {
    title: "Alayna",
    type: "E-Commerce Platform",
    description:
      "A MERN-based cosmetics e-commerce platform with product workflows, customer-facing shopping functionality, and a loyalty-points concept.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    number: "02",
  },
  {
    title: "Rang Taari",
    type: "Event Management",
    description:
      "A dynamic college-event platform with student submissions, an admin review workflow, Accept/Reject actions, and QR-code E-pass generation.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    number: "03",
  },
  {
    title: "BharatBirdGuide",
    type: "Mobile Application",
    description:
      "A Flutter and Firebase application for discovering bird information, with authentication, Firestore, search, recent birds, and separate Admin/User apps.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "BLoC"],
    number: "04",
  },
];

const nav = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 grid-bg" />
      <div className="fixed left-1/2 top-[-300px] -z-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />

      <header className="fixed top-0 z-50 w-full border-b border-white/[0.07] bg-[#07090d]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="text-lg font-bold tracking-tight">
            MP<span className="text-white/35">.</span>
          </a>

          <nav className="hidden gap-7 text-sm text-white/55 md:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-white/30 hover:bg-white/5 md:block"
          >
            Let's talk →
          </a>

          <button
            onClick={() => setMenu(!menu)}
            className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
            aria-label="Toggle menu"
          >
            {menu ? "Close" : "Menu"}
          </button>
        </div>

        {menu && (
          <nav className="border-t border-white/[0.07] px-5 py-4 md:hidden">
            {nav.map((item) => (
              <a
                key={item}
                onClick={() => setMenu(false)}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-sm text-white/65"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-20 pt-32">
        <div className="grid w-full gap-14 lg:grid-cols-[1.35fr_.65fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-white/60">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-white" />
              Open to software development opportunities
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[.25em] text-white/40">
              Software Developer · Mumbai, India
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-[.98] tracking-[-.05em] sm:text-7xl lg:text-8xl">
              Building software
              <br />
              <span className="text-gradient">with purpose.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              I’m <span className="inline-block rounded-md bg-white/[0.08] px-2 py-0.5 font-semibold text-white ring-1 ring-white/10">Mayank Patekar</span> — a developer focused on Java backend and full-stack
              development, with professional experience at TCS and hands-on experience
              building web, mobile, and payment-platform applications.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="glass glow animate-float rounded-[2rem] p-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[.2em] text-white/35">Developer card</span>
                <span className="text-xs text-white/35">01 / 04</span>
              </div>

              <div className="mb-8 flex h-44 items-end rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-5">
                <div>
                  <div className="text-5xl font-bold tracking-tight">JAVA</div>
                  <div className="mt-1 text-sm text-white/40">Backend • APIs • Systems</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Stat value="2.6+" label="Years at TCS" />
                <Stat value="4" label="Featured projects" />
                <Stat value="Java" label="Primary backend" />
                <Stat value="MCA" label="Currently pursuing" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading eyebrow="01 — About" title="From enterprise experience to software engineering." />
          <div className="grid gap-10 lg:grid-cols-2">
            <p className="text-xl leading-9 text-white/65">
              I have built my professional foundation in an enterprise environment at
              <span className="text-white"> Tata Consultancy Services</span>, while
              continuously developing my software engineering skills outside my core project work.
            </p>
            <div className="space-y-5 text-sm leading-7 text-white/50">
              <p>
                My technical focus is moving toward Java, Spring Boot, backend engineering,
                REST APIs, databases, and full-stack development.
              </p>
              <p>
                I enjoy turning ideas into working products — from payment systems and
                e-commerce platforms to event-management and mobile applications.
              </p>
              <p>
                I am currently pursuing MCA and looking for opportunities where I can contribute
                as a software developer while continuing to grow technically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading eyebrow="02 — Experience" title="Professional experience." />
          <div className="glass rounded-3xl p-6 sm:p-9">
            <div className="grid gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <div className="text-sm uppercase tracking-[.2em] text-white/35">Tata Consultancy Services</div>
                <h3 className="mt-2 text-2xl font-semibold">Systems Engineer</h3>
                <p className="mt-2 text-sm text-white/40">February 2024 — Present · Mumbai, India</p>
              </div>
              <div className="h-fit rounded-full border border-white/10 px-4 py-2 text-xs text-white/45">
                Enterprise environment
              </div>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {[
                ["Enterprise delivery", "Worked within structured project processes and delivery standards."],
                ["GIS & mapping", "Built strong attention to data accuracy and quality through project responsibilities."],
                ["Technical growth", "Continuously developed Java, Spring Boot, backend and full-stack skills."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <h4 className="font-medium">{title}</h4>
                  <p className="mt-3 text-sm leading-6 text-white/45">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading eyebrow="03 — Selected work" title="Projects I’ve built." />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="card-hover glass rounded-3xl p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/30">{project.number}</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/45">
                    {project.type}
                  </span>
                </div>
                <h3 className="mt-9 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 min-h-[96px] text-sm leading-7 text-white/50">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/55">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading eyebrow="04 — Toolkit" title="Technologies I work with." />
          <div className="flex flex-wrap gap-3">
            {skills.map(([name, category]) => (
              <div key={name} className="card-hover rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4">
                <div className="font-medium">{name}</div>
                <div className="mt-1 text-xs text-white/30">{category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-5 py-28">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-center sm:p-14">
            <p className="text-xs uppercase tracking-[.25em] text-white/35">05 — Contact</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-.04em] sm:text-6xl">
              Have a role, project, or idea?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
              I’m interested in software development opportunities, backend engineering,
              and products that solve real problems.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:mayankpatekar17@gmail.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/85"
              >
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/mayank-patekar-1882b1256/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/5"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <footer className="flex flex-col gap-3 py-8 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Mayank Umesh Patekar</span>
            <span>Designed & built for software engineering.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-12">
      <p className="text-xs uppercase tracking-[.25em] text-white/30">{eyebrow}</p>
      <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-.04em] sm:text-5xl">{title}</h2>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
      <div className="text-xl font-semibold">{value}</div>
      <div className="mt-1 text-[11px] text-white/35">{label}</div>
    </div>
  );
}