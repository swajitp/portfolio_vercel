import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react";
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
              Customer Success and Operations roles
            </strong>{" "}
            where I can improve customer outcomes, solve complex problems, and build better ways of
            working.
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm text-zinc-500">
            <strong className="font-semibold text-zinc-400">
              Open to full-time opportunities in Vancouver and remote across Canada. Available
              immediately.
            </strong>
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row">
            <a
              href="mailto:swajit.patwari@gmail.com"
              className="group flex w-full max-w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-6 py-4 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-zinc-200 active:scale-95 md:w-auto md:px-10 md:py-5 md:text-lg"
            >
              <Mail className="shrink-0" />
              <span className="truncate">swajit.patwari@gmail.com</span>
              <ArrowRight className="h-4 w-4 shrink-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
            </a>
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
