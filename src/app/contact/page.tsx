export const metadata = { title: "Contact" };

export default function ContactOnlyPage() {
  return (
    <div className="mx-auto max-w-[900px] px-6 py-16">
      <h1 className="text-3xl font-bold" style={{fontFamily:'var(--font-display)'}}>Let’s Talk</h1>
      <p className="mt-2 text-gray-600">Share your project details and I’ll get back to you quickly.</p>

      <form action={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@example.com'}`} className="mt-8 grid gap-4">
        <input className="rounded-lg border px-4 py-3" placeholder="Your name" required />
        <input className="rounded-lg border px-4 py-3" placeholder="Your email" type="email" required />
        <textarea className="min-h-[160px] rounded-lg border px-4 py-3" placeholder="Message" required />
        <button className="rounded-lg bg-primary px-5 py-3 text-white">Send</button>
      </form>
    </div>
  );
}


