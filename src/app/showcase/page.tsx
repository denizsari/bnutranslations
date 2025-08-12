import Typewriter from "../../components/showcase/Typewriter";
import StackPapers from "../../components/showcase/StackPapers";
import SpinRings from "../../components/showcase/SpinRings";

export const metadata = { title: "Showcase" };

export default function ShowcasePage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold" style={{fontFamily:'var(--font-display)'}}>Hero Right-Side Showcase</h1>
      <p className="text-sm text-gray-600">Her bir seçenek 320x420 ölçüsünde hazırlanmıştır. Sağdaki görsel alanına yerleştirildiğinde nasıl duracağını burada görebilirsiniz.</p>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="mb-3 text-base font-semibold">1. Typewriter</h2>
          <Typewriter />
        </div>
        <div>
          <h2 className="mb-3 text-base font-semibold">2. Stack Papers</h2>
          <StackPapers />
        </div>
        <div>
          <h2 className="mb-3 text-base font-semibold">3. Spin Rings</h2>
          <SpinRings />
        </div>
      </div>
    </div>
  );
}


