import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  Calendar,
  Briefcase,
  GraduationCap,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import portrait1 from "@/assets/image2.jpeg";
import portrait2 from "@/assets/image1.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aayusha Rajbanshi — Event Coordinator & Business Graduate" },
      {
        name: "description",
        content:
          "Portfolio of Aayusha Rajbanshi — Business Management graduate and event coordinator from Banepa, Nepal.",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Reveal({
  children,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/60" : ""}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-display text-2xl tracking-tight">
          Aayusha<span className="text-clay">.</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-2 text-sm text-background transition hover:bg-transparent hover:text-foreground"
          >
            Let's talk{" "}
            <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-2xl"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-8 md:px-10">
        <div className="md:col-span-7 md:pt-12">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-foreground/40" /> Portfolio · 2026
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[15vw] leading-[0.92] tracking-tight md:text-[9.5vw] lg:text-[8.5rem]">
              Aayusha
              <br />
              <span className="italic text-clay">Rajbanshi</span>
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 grid grid-cols-1 gap-6 md:max-w-xl">
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                Business Management graduate and event coordinator crafting thoughtful weddings,
                corporate gatherings, and client experiences from{" "}
                <span className="text-foreground">Banepa, Nepal</span>.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-sm text-background transition hover:bg-clay"
                >
                  Contact me{" "}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href="#experience"
                  className="group inline-flex items-center gap-3 rounded-full border border-foreground/30 px-7 py-3.5 text-sm transition hover:border-foreground"
                >
                  View resume <Download size={14} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div style={{ y }} className="md:col-span-5">
          <Reveal delay={0.2}>
            <div className="relative">
              {/* <div className="absolute -left-4 -top-4 hidden font-display text-sm italic text-muted-foreground md:block">
                — est. Banepa
              </div> */}
              <div className="overflow-hidden rounded-[2rem] bg-sand">
                <img
                  src={portrait1}
                  alt="Aayusha Rajbanshi portrait"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                <div>
                  <div className="text-2xl font-display text-foreground">3.76</div>GPA · BBM
                </div>
                <div>
                  <div className="text-2xl font-display text-foreground">50+</div>Events
                </div>
                <div>
                  <div className="text-2xl font-display text-foreground">2yr</div>Experience
                </div>
              </div>
            </div>
          </Reveal>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-20 flex items-center justify-center gap-3 pb-10 text-xs uppercase tracking-[0.3em] text-muted-foreground md:mt-32"
      >
        <span>Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.div>
    </section>
  );
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="mb-12 flex items-center gap-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
      <span>({num})</span>
      <span className="h-px flex-1 bg-border" />
      <span>{label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-40">
      <SectionLabel num="01" label="About" />
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <div className="sticky top-32 space-y-6">
              <div className="overflow-hidden rounded-[2rem] bg-sand">
                <img
                  src={portrait2}
                  alt="Aayusha Rajbanshi"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="rounded-2xl border border-border/70 p-6">
                <p className="font-display text-xl">Banepa-5, Kavre, Nepal</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Available for events & collaborations
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal>
            <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
              A graduate with a love for <span className="italic text-clay">people, process</span>,
              and the small details that make moments feel intentional.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 grid gap-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I'm Aayusha — a Business Management graduate with experience across banking
                operations and event management. My work blends coordination, client communication,
                and team collaboration to deliver weddings, corporate events, and social campaigns
                that feel considered from first call to final toast.
              </p>
              <p>
                Strong organizational, problem-solving, and multitasking abilities anchor a
                professional, client-focused approach to every project I take on.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-3">
              {[
                ["Weddings", "End-to-end planning"],
                ["Corporate", "Brand-led events"],
                ["Banking", "Operations & service"],
                ["Vendor Mgmt", "Sourcing & liaison"],
                ["Social Media", "Content & promo"],
                ["Documentation", "Records & data"],
              ].map(([t, s]) => (
                <div key={t} className="bg-background p-5">
                  <p className="font-display text-xl">{t}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const EXPERIENCE = [
  {
    when: "Nov 2025 — Present",
    role: "Event Manager",
    org: "Ojas Digital & Events",
    bullets: [
      "Coordinating weddings, corporate events, and private celebrations end-to-end.",
      "Managing client communication, vendor relationships, and live event execution.",
      "Owning event planning, timelines, run-of-show, and on-site coordination.",
      "Supporting social media promotion and content for upcoming events.",
    ],
  },
  {
    when: "Dec 2024 — Feb 2025",
    role: "Intern",
    org: "NMB Bank Limited, Banepa",
    bullets: [
      "Assisted in daily banking operations and front-line customer service.",
      "Supported documentation, account processing, and client interaction.",
      "Maintained professionalism, accuracy, and confidentiality in operations.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-cream py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel num="02" label="Experience" />
        <Reveal>
          <h2 className="mb-16 font-display text-5xl leading-[1.05] md:text-7xl">
            Selected <span className="italic text-clay">work</span>
          </h2>
        </Reveal>
        <div className="relative">
          <div className="absolute left-3 top-2 hidden h-full w-px bg-border md:left-1/2 md:block" />
          <div className="space-y-16 md:space-y-24">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16">
                  <div className={`${i % 2 ? "md:order-2" : ""}`}>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      <Calendar size={14} /> {e.when}
                    </div>
                    <h3 className="mt-4 font-display text-4xl md:text-5xl">{e.role}</h3>
                    <p className="mt-2 text-lg text-clay">{e.org}</p>
                  </div>
                  <ul
                    className={`space-y-3 text-muted-foreground ${i % 2 ? "md:order-1 md:text-right" : ""}`}
                  >
                    {e.bullets.map((b) => (
                      <li key={b} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  const items = [
    {
      degree: "Bachelor in Business Management (BBM)",
      org: "Bhaktapur Multiple Campus",
      when: "2021 — 2025",
      meta: "GPA 3.76",
    },
    {
      degree: "+2 Management",
      org: "Gyankunja Secondary School",
      when: "Completed",
      meta: "GPA 3.23",
    },
  ];
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-40">
      <SectionLabel num="03" label="Education" />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
              Foundations in <span className="italic text-clay">business & management</span>.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <div className="space-y-px overflow-hidden rounded-2xl border border-border">
            {items.map((it, i) => (
              <Reveal key={it.degree} delay={i * 0.08}>
                <div className="group flex items-start justify-between gap-6 bg-background p-8 transition-colors hover:bg-cream">
                  <div>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      <GraduationCap size={14} /> {it.when}
                    </div>
                    <h3 className="mt-3 font-display text-3xl md:text-4xl">{it.degree}</h3>
                    <p className="mt-1 text-muted-foreground">{it.org}</p>
                  </div>
                  <div className="shrink-0 rounded-full border border-foreground px-4 py-2 text-sm">
                    {it.meta}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILL_GROUPS = [
  {
    title: "Technical",
    items: [
      ["MS Office Suite", 92],
      ["Event Coordination", 95],
      ["Documentation", 88],
      ["Social Media Coordination", 82],
      ["Data Entry & Records", 85],
    ] as [string, number][],
  },
  {
    title: "Workplace",
    items: [
      ["Communication", 95],
      ["Client Service Orientation", 93],
      ["Team Collaboration", 90],
      ["Time Management", 90],
      ["Problem Solving", 88],
      ["Adaptability", 92],
    ] as [string, number][],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-cream py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel num="04" label="Skills" />
        <Reveal>
          <h2 className="mb-16 font-display text-5xl leading-[1.05] md:text-7xl">
            A toolkit built for <span className="italic text-clay">people-first</span> work.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {SKILL_GROUPS.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.1}>
              <div>
                <h3 className="mb-8 flex items-center gap-3 font-display text-3xl">
                  <Sparkles size={20} className="text-clay" /> {g.title}
                </h3>
                <div className="space-y-6">
                  {g.items.map(([name, val], i) => (
                    <div key={name}>
                      <div className="mb-2 flex items-end justify-between">
                        <span className="text-base">{name}</span>
                        <span className="font-display text-sm text-muted-foreground">{val}%</span>
                      </div>
                      <div className="h-px w-full overflow-hidden bg-border">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${val}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: 0.1 + i * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-[2px] -translate-y-px bg-foreground"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-wrap gap-3">
            {[
              "English",
              "Nepali",
              "Hindi",
              "Vendor Management",
              "Wedding Planning",
              "Corporate Events",
              "Customer Service",
              "Banking Operations",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-foreground/20 px-5 py-2 text-sm text-muted-foreground transition hover:border-foreground hover:text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "Signature Wedding Series",
    tag: "Wedding Production",
    desc: "End-to-end coordination for multi-day weddings — vendor sourcing, timeline design, and on-site direction with a guest-first approach.",
    role: "Lead Coordinator",
  },
  {
    title: "Corporate Launch Events",
    tag: "Brand Activation",
    desc: "Run-of-show, stage management, and client liaison for corporate launches and private celebrations at Ojas Digital & Events.",
    role: "Event Manager",
  },
  {
    title: "Social Media Promo Campaigns",
    tag: "Content & Promotion",
    desc: "Concepting and coordinating content for upcoming events, supporting reach and ticketed engagement across platforms.",
    role: "Content & Coordination",
  },
  {
    title: "NMB Banepa — Service Desk",
    tag: "Banking Operations",
    desc: "Front-line customer service, documentation, and account processing during a structured banking internship.",
    role: "Operations Intern",
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-40">
      <SectionLabel num="05" label="Selected Projects" />
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
            Recent <span className="italic text-clay">work</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-md text-muted-foreground">
            A snapshot of events and operational work spanning weddings, corporate launches, and
            client service.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <a
              href="#contact"
              className="group block overflow-hidden rounded-3xl border border-border bg-cream transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                <img
                  src={i % 2 === 0 ? portrait1.url : portrait2.url}
                  alt=""
                  className="h-full w-full object-cover opacity-90 transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-background/90 px-3 py-1 text-xs uppercase tracking-widest backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl">{p.title}</h3>
                  <ArrowUpRight className="mt-1 shrink-0 transition-transform group-hover:rotate-45" />
                </div>
                <p className="mt-3 text-muted-foreground">{p.desc}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.25em] text-clay">{p.role}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  const items = [
    { t: "BBM — GPA 3.76", s: "Bhaktapur Multiple Campus" },
    { t: "Event Leadership", s: "Coordinating weddings & corporate events" },
    { t: "Banking Internship", s: "NMB Bank Limited, Banepa" },
    { t: "Client Service", s: "Professional, confidential conduct" },
    { t: "Team Collaboration", s: "Cross-functional vendor work" },
    { t: "Multitasking", s: "Fast-paced live events" },
  ];
  return (
    <section className="bg-foreground py-24 text-background md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex items-center gap-5 text-xs uppercase tracking-[0.3em] text-background/60">
          <span>(06)</span>
          <span className="h-px flex-1 bg-background/20" />
          <span>Achievements</span>
        </div>
        <Reveal>
          <h2 className="mb-16 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Earned along the <span className="italic text-sand">way</span>.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-background/15 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05}>
              <div className="flex h-full flex-col justify-between gap-10 bg-foreground p-8">
                <Briefcase size={18} className="text-sand" />
                <div>
                  <p className="font-display text-2xl">{it.t}</p>
                  <p className="mt-2 text-sm text-background/60">{it.s}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-40">
      <SectionLabel num="07" label="Contact" />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <Reveal>
            <h2 className="font-display text-6xl leading-[0.95] md:text-[8rem]">
              Let's create
              <br />
              <span className="italic text-clay">something.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-lg text-muted-foreground">
              Planning a wedding, launch, or private event? I'd love to hear about it. Reach out and
              let's bring it to life with care.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <a
              href="mailto:aayusharajbanshi123@gmail.com"
              className="mt-10 inline-flex items-center gap-3 border-b border-foreground pb-2 font-display text-2xl md:text-4xl"
            >
              aayusharajbanshi123@gmail.com <ArrowUpRight />
            </a>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={0.1}>
            <div className="space-y-6 rounded-3xl border border-border bg-cream p-8">
              <div className="flex items-start gap-4">
                <Phone size={18} className="mt-1 text-clay" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                  <p className="mt-1 font-display text-xl">+977 9847 382 529</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="mt-1 text-clay" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                  <p className="mt-1 font-display text-xl">aayusharajbanshi123@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="mt-1 text-clay" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Based in
                  </p>
                  <p className="mt-1 font-display text-xl">Banepa-5, Kavre, Nepal</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/aayusha-rajbanshi-a8581036a/",
                      "_blank",
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-sm transition hover:bg-foreground hover:text-background"
                >
                  <Linkedin size={14} /> LinkedIn
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:px-10">
        <p>© {new Date().getFullYear()} Aayusha Rajbanshi. All rights reserved.</p>
        <p className="font-display italic">Crafted with care in Nepal.</p>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
