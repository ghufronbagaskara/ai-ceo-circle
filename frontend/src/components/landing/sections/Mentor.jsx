import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import { MENTOR } from "@/components/landing/data";
import { AtSign } from "lucide-react";

const MentorOrb = ({ initials }) => {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 160, damping: 22 });
  const sy = useSpring(my, { stiffness: 160, damping: 22 });
  const rotateY = useTransform(sx, [0, 1], [-25, 25]);
  const rotateX = useTransform(sy, [0, 1], [25, -25]);
  const shineX = useTransform(sx, [0, 1], ["20%", "80%"]);
  const shineY = useTransform(sy, [0, 1], ["20%", "80%"]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => { mx.set(0.5); my.set(0.5); };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ transformPerspective: 1200 }}
      className="relative h-32 w-32 sm:h-36 sm:w-36"
    >
      <div className="absolute -inset-6 rounded-full bg-[#C9920A]/30 blur-3xl" aria-hidden />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-4 rounded-full border-hair border-cream-10"
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#C9920A] shadow-[0_0_16px_3px_rgba(201,146,10,0.6)]" />
      </motion.div>

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        className="relative grid h-full w-full place-items-center overflow-hidden rounded-full border-hair border-cream-15"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#ffcb9a,_#ff7a3d_45%,_#9a2b08_82%,_#1c0a02)]" />
        <svg className="absolute inset-0 h-full w-full opacity-90" viewBox="0 0 100 100">
          <defs>
            <filter id="orbCracks">
              <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" seed="7" />
              <feDisplacementMap in="SourceGraphic" scale="3" />
            </filter>
          </defs>
          <g style={{ filter: "url(#orbCracks)" }}>
            <path d="M 20 35 Q 40 50 60 40 Q 80 30 90 55" stroke="#ffd6a5" strokeWidth="0.8" fill="none" opacity="0.85" />
            <path d="M 15 60 Q 30 70 55 65 Q 75 60 95 70" stroke="#ff5d2a" strokeWidth="0.7" fill="none" opacity="0.8" />
            <path d="M 10 80 Q 35 85 60 80" stroke="#ffb16a" strokeWidth="0.6" fill="none" opacity="0.7" />
          </g>
        </svg>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,232,200,0.55), transparent 45%)`,
            mixBlendMode: "screen",
          }}
        />
        <span
          className="relative font-serif-italic text-[42px] text-cream drop-shadow-md sm:text-5xl"
          style={{ transform: "translateZ(30px)" }}
        >
          {initials}
        </span>
      </motion.div>
    </motion.div>
  );
};

const Mentor = () => {
  return (
    <section id="mentor" className="relative z-10 py-28 md:py-40">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{MENTOR.label}</SectionLabel>
            <Reveal className="mt-7">
              <h2
                className="font-serif text-balance text-[10vw] leading-[0.92] text-cream sm:text-[8vw] md:text-[6vw] lg:text-[5.4vw]"
                style={{ letterSpacing: "-0.045em" }}
              >
                Mentored by a practitioner{" "}
                <span className="font-serif-italic text-gradient-lava">who has done it</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-hair border-cream-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="relative h-full border-r border-b border-hair border-cream-10 bg-[rgba(8,14,28,0.45)] p-8 md:p-12">
              <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
                <MentorOrb initials={MENTOR.lead.initials} />
                <div>
                  <h3
                    className="font-serif text-[38px] leading-none text-cream sm:text-[48px]"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    {MENTOR.lead.name.split(" ")[0]}{" "}
                    <span className="font-serif-italic text-lava-soft">
                      {MENTOR.lead.name.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>
                  <p className="mt-2 text-[14px] text-cream-soft">{MENTOR.lead.role}</p>
                  <a
                    href="#apply"
                    className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.38em] text-[#C9920A] hover:text-cream"
                  >
                    <AtSign className="h-3 w-3" />
                    {MENTOR.lead.handle}
                  </a>
                </div>
              </div>
              <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-cream-soft">{MENTOR.lead.bio}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {MENTOR.lead.chips.map((c, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ y: -2, borderColor: "rgba(201,146,10,0.45)", color: "#efe7d6" }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border-hair border-cream-15 bg-cream/[0.02] px-3.5 py-1.5 text-[11.5px] tracking-tight text-cream-soft"
                  >
                    {c}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col border-b border-hair border-cream-10 md:col-span-5">
            <div className="px-8 pt-8 pb-2 md:px-10 md:pt-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim">
                Backed by the MAXY AI leadership team
              </span>
            </div>
            {MENTOR.team.map((m, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 8, backgroundColor: "rgba(201,146,10,0.04)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-4 border-t border-hair border-cream-10 px-8 py-7 md:px-10 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.08 }}
                    transition={{ duration: 1 }}
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-hair border-cream-15 bg-[rgba(201,146,10,0.08)] font-mono text-[12px] tracking-wider text-[#C9920A]"
                  >
                    {m.initials}
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <div
                      className="font-serif text-[22px] leading-tight text-cream"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      {m.name}
                    </div>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-cream-dim">{m.role}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mentor;
