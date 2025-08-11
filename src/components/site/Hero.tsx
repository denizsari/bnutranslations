"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid items-center gap-10 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          Profesyonel çeviri hizmetleri, uzmanlık alanları, desteklenen diller
        </h1>
        <p className="mt-4 text-muted-foreground">
          Teknik, akademik, ticari ve edebi metinlerde deneyimli; kalite ve hız
          odaklı çözümler.
        </p>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <a href={`mailto:${CONTACT_EMAIL}`}>E-posta ile iletişim</a>
          </Button>
          <Button variant="secondary" asChild>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        className="relative aspect-[4/3] w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Image
          src="/globe.svg"
          alt="Çeviri illüstrasyonu"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}


