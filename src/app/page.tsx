import Hero from "@/components/site/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TestimonialCarousel from "@/components/site/TestimonialCarousel";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Hizmet Özeti</h2>
        <p className="mt-2 text-muted-foreground">
          Teknik, akademik, ticari ve edebi metinlerde profesyonel çeviri.
        </p>
        <Link
          href="/services"
          className="mt-4 inline-flex items-center text-primary hover:underline"
        >
          Hizmetleri incele <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </section>
      <TestimonialCarousel />
    </div>
  );
}
