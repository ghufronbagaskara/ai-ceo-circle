import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import Spotlight from "@/components/landing/ui/Spotlight";
import BigSerifMarquee from "@/components/landing/ui/BigSerifMarquee";
import { ECOSYSTEM } from "@/components/landing/data";
import { ArrowUpRight } from "lucide-react";

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="relative z-10">
      <BigSerifMarquee words={["Know-How", "Expertise", "Business Logic"]} size="xl" className="py-8" />
      <BigSerifMarquee
        words={["Engineering", "Automation", "AI Agents"]}
        size="xl"
        reverse
        className="py-4 opacity-80"
      />

      <Container className="pt-28 pb-32 md:pt-36 md:pb-40">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>About MAXY AI</SectionLabel>
            <Reveal className="mt-7">
              <h2
                className="font-serif text-balance text-[12vw] leading-[0.92] text-cream sm:text-[9vw] md:text-[7.2vw] lg:text-[6.2vw]"
                style={{ letterSpacing: "-0.045em" }}
              >
                Tailored <span className="font-serif-italic text-gradient-lava">AI Systems</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-8">
              <p className="max-w-xl text-[16px] leading-relaxed text-cream-soft">{ECOSYSTEM.intro}</p>
              <a
                href="#apply"
                className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.38em] text-cream transition-colors hover:text-[#C9920A]"
              >
                Encode your know-how
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <div className="flex flex-col">
              {ECOSYSTEM.cards.map((c, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group relative border-t border-hair border-cream-10 py-9 last:border-b">
                    <div className="flex items-baseline gap-6">
                      <span
                        className="font-serif text-4xl text-[#C9920A] md:text-5xl"
                        style={{ letterSpacing: "-0.04em" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h3
                          className="font-serif text-[26px] leading-[1.05] text-cream md:text-[32px]"
                          style={{ letterSpacing: "-0.035em" }}
                        >
                          {c.title.split(" ").slice(0, -1).join(" ")}{" "}
                          <span className="font-serif-italic text-lava-soft">
                            {c.title.split(" ").slice(-1)[0]}
                          </span>
                        </h3>
                        <p className="mt-3 text-[14px] leading-relaxed text-cream-dim">{c.body}</p>
                        <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim">
                          {c.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars row — Spotlight cards */}
        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {ECOSYSTEM.pillars.map((p, i) => (
              <Spotlight
                key={i}
                className="border border-hair border-white/[0.06] bg-[rgba(8,14,28,0.4)] backdrop-blur-md"
                radius={300}
              >
                <div className="rounded-2xl p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.38em] text-[#C9920A]">
                    {p.tag}
                  </div>
                  <div
                    className="mt-3 font-serif text-[20px] leading-snug text-cream"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {p.text}
                  </div>
                </div>
              </Spotlight>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-12 max-w-3xl text-[16px] leading-relaxed text-cream-soft">{ECOSYSTEM.outro}</p>
        </Reveal>
      </Container>
    </section>
  );
};

export default Ecosystem;
