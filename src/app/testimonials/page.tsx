import dynamic from "next/dynamic";

const TestimonialCarousel = dynamic(
  () => import("@/components/site/TestimonialCarousel"),
  { ssr: false }
);

export const metadata = {
  title: "Referanslar",
  description: "Müşteri yorumları",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <TestimonialCarousel />
    </div>
  );
}


