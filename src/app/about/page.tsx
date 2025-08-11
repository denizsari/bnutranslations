import Image from "next/image";

export const metadata = {
  title: "Hakkımda",
  description: "Biyografi, deneyim, eğitim ve sertifikalar",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold">Hakkımda</h1>
      <div className="mt-8 grid items-start gap-8 md:grid-cols-[220px_1fr]">
        <div className="relative h-56 w-56 overflow-hidden rounded-xl border">
          <Image src="/vercel.svg" alt="Profil" fill className="object-contain p-6" />
        </div>
        <div className="prose max-w-none">
          <p>
            10+ yıllık çeviri deneyimiyle teknik, akademik, ticari ve edebi metinlerde
            profesyonel çözümler sunuyorum. Üniversite eğitimim ve çeşitli
            sertifikalar ile alanımdaki güncel standartları takip ediyorum.
          </p>
          <ul className="mt-4 list-disc pl-6">
            <li>Uzmanlık alanları: teknik dokümantasyon, akademik yayınlar</li>
            <li>Desteklenen diller: Türkçe, İngilizce (+ isteğe bağlı diller)</li>
            <li>Kalite odaklı süreç ve zamanında teslim</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


