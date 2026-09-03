import { Linkedin, Phone } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="site-container mb-12 py-20">
      <Reveal className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-8 text-center md:p-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(39,39,42,0.45),transparent_58%)] opacity-70" />
        <div className="relative z-10">
          <SectionEyebrow>CONTACT</SectionEyebrow>
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-bold tracking-tighter text-white md:text-7xl">
            Helping customers succeed. Building operations that scale.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-xl font-light leading-relaxed text-zinc-400">
            Open to{" "}
            <strong className="font-semibold text-zinc-200">
              Customer Success Manager and Operations roles
            </strong>{" "}
            where I can improve customer outcomes, solve complex problems, and build better ways of
            working.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row">
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://linkedin.com/in/swajit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Swajit on LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-zinc-900 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black md:h-16 md:w-16"
              >
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="tel:+16047358611"
                aria-label="Call Swajit"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-zinc-900 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black md:h-16 md:w-16"
              >
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
