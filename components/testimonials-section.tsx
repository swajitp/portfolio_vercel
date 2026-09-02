import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";

const testimonials = [
  {
    name: "Vishal Purohit",
    linkedIn: "https://www.linkedin.com/in/vishal-purohit-1a812a/",
    role: "Founder · Wooqer",
    photo: "/images/vishal-purohit.jpeg",
    quote:
      "Swajit is that affable presence in operations that keeps everything sane amidst chaos. He listens carefully, executes precisely and never loses himself in the chaos. A great team player. Any team becomes better with Swajit on it.",
  },
  {
    name: "Sai Kiran Reddy N",
    linkedIn: "https://www.linkedin.com/in/sai-kiran-reddy-n-357845167/",
    role: "Customer Success Manager · Wooqer",
    photo: "/images/sai-kiran-reddy.jpeg",
    quote:
      "Working with Swajit was always fun. He brings great energy, makes people comfortable, and is genuinely easy to work with. He’s also really good with customers, and I learned a lot from how he handled conversations and solved problems. Always ready to help and a great team player.",
  },
  {
    name: "Mohammed Saalim",
    linkedIn: "https://www.linkedin.com/in/mohammed-saalim-88967674/",
    role: "Branch Director · Go-Study",
    photo: "/images/mohammed-saalim.png",
    quote:
      "Swajit was one of the best managers I’ve worked with. He led by example, always made time to mentor and support us, and genuinely cared about our growth. He built real friendships with the team and was the kind of manager you could always count on.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="site-container py-20">
      <Reveal>
        <div className="mb-12">
          <div>
            <SectionEyebrow>TESTIMONIALS</SectionEyebrow>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Feedback from the team
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 100}>
            <article className="section-panel flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-zinc-900/60 md:p-7">
              <div className="mb-5 flex gap-1.5 text-amber-100/70" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4 fill-current stroke-current"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed text-zinc-300 md:text-[15px]">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-5">
                <Image
                  src={testimonial.photo}
                  alt={`${testimonial.name} profile photo`}
                  width={48}
                  height={48}
                  className="h-12 w-12 flex-none rounded-full border border-white/10 object-cover"
                />
                <div className="min-w-0">
                  <a
                    href={testimonial.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-white transition-colors hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    {testimonial.name}
                    <ExternalLink className="h-3.5 w-3.5 text-zinc-500" />
                  </a>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
