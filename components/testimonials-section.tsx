import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm text-muted-foreground tracking-wider uppercase border border-border rounded-full px-4 py-1.5 bg-background">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6">
            What People Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-8 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground text-lg font-medium">?</span>
                </div>
                <div>
                  <div className="h-4 w-24 bg-secondary rounded mb-1" />
                  <div className="h-3 w-32 bg-secondary/50 rounded" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-secondary/30 rounded" />
                <div className="h-3 w-full bg-secondary/30 rounded" />
                <div className="h-3 w-3/4 bg-secondary/30 rounded" />
              </div>
              <p className="text-xs text-muted-foreground mt-6 italic">
                Testimonial coming soon
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Testimonials will be added as recommendations are received.
        </p>
      </div>
    </section>
  );
}
