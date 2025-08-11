"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  text: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "A. Yılmaz",
    text: "Teknik çevirilerde hızlı ve hatasız destek aldık. Kesinlikle tavsiye ederim.",
  },
  {
    name: "B. Demir",
    text: "Akademik makalemin dil kontrolü ve çevirisi mükemmeldi.",
  },
  {
    name: "C. Kaya",
    text: "Ticari sözleşme çevirilerinde çok titiz çalışıldı.",
  },
];

export default function TestimonialCarousel({ testimonials = DEFAULT_TESTIMONIALS }: { testimonials?: Testimonial[] }) {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 4500);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h2 className="text-center text-2xl font-semibold">Müşteri Yorumları</h2>
      <Carousel setApi={setApi} className="mt-6">
        <CarouselContent>
          {testimonials.map((t, idx) => (
            <CarouselItem key={idx} className="basis-full">
              <blockquote className="rounded-lg border bg-white p-6 text-center shadow-sm">
                <p className="text-sm text-muted-foreground">“{t.text}”</p>
                <div className="mt-3 text-sm font-medium">{t.name}</div>
              </blockquote>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}


