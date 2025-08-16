import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/bnu-logo.png"
        alt="BNU Tercüme Logo"
        width={50}
        height={50}
        className="object-contain w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
        priority
      />
    </div>
  );
}


