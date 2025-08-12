import Link from "next/link";
import { Twitter, Linkedin, Instagram, Globe } from "lucide-react";

type Props = {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
  className?: string;
};

export default function Socials({ twitter = "#", linkedin = "#", instagram = "#", website = "#", className }: Props) {
  return (
    <div className={`group flex items-center gap-3 ${className || ""}`}>
      <Link href={twitter} aria-label="Twitter/X" className="text-gray-500 transition hover:text-primary">
        <Twitter className="h-5 w-5" />
      </Link>
      <Link href={linkedin} aria-label="LinkedIn" className="text-gray-500 transition hover:text-primary"><Linkedin className="h-5 w-5"/></Link>
      <Link href={instagram} aria-label="Instagram" className="text-gray-500 transition hover:text-primary"><Instagram className="h-5 w-5"/></Link>
      <Link href={website} aria-label="Website" className="text-gray-500 transition hover:text-primary"><Globe className="h-5 w-5"/></Link>
    </div>
  );
}


