import { BookOpenText, FileText, BriefcaseBusiness, PenTool } from "lucide-react";
import ServiceCard from "@/components/site/ServiceCard";

export const metadata = {
  title: "Hizmetler",
  description: "Teknik, akademik, ticari ve edebi çeviri hizmetleri",
};

export default function ServicesPage() {
  const services = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Teknik Çeviri",
      description: "Mühendislik, yazılım ve teknik dokümantasyon çevirileri.",
      priceHint: "Ücret: sayfa/kelime bazlı",
    },
    {
      icon: <BookOpenText className="h-6 w-6" />,
      title: "Akademik Çeviri",
      description: "Makaleler, tezler ve akademik yayınlar.",
      priceHint: "Editörlük opsiyonu",
    },
    {
      icon: <BriefcaseBusiness className="h-6 w-6" />,
      title: "Ticari Çeviri",
      description: "Sözleşmeler, teklif ve pazarlama materyalleri.",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Edebi Çeviri",
      description: "Öykü, deneme ve edebi metinler.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold">Hizmetler</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => (
          <ServiceCard key={idx} {...s} />
        ))}
      </div>
    </div>
  );
}


