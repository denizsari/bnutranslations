import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  points: string[];
  icon?: ReactNode;
};

export default function ServiceItemCard({ title, description, points, icon }: Props) {
  return (
    <div className="glass-card card-grid card-blur-border group relative overflow-hidden p-6 transition hover:-translate-y-[2px]">

      <div className="flex items-start gap-4">
        {icon ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-sm">
            {icon}
          </div>
        ) : null}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 max-w-3xl text-sm text-gray-600">{description}</p>
        </div>
      </div>

      <ul className="mt-4 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-primary shadow-[0_0_0_3px_rgba(16,185,129,0.1)]" />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
        <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">Included QA</span>
        <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">NDA</span>
      </div>
    </div>
  );
}


