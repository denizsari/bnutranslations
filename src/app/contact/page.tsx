import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata = {
  title: "İletişim",
  description: "İletişim formu, telefon ve e-posta",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-semibold">İletişim</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <ContactForm />
        </div>
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {WHATSAPP_NUMBER}
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Mesajınızı ilettikten sonra en kısa sürede dönüş yapacağım.
          </p>
        </div>
      </div>
    </div>
  );
}


