"use client";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { CV_URL } from "@/lib/constants";

export default function CVPreviewButton({ label }: { label?: string }) {
  const url = CV_URL;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition hover:bg-gray-50">
          <span className="h-2 w-2 rounded-full bg-primary" />
          {label || 'Show CV'}
        </button>
      </DialogTrigger>
      <DialogContent>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border">
          <iframe src={url} className="h-full w-full" title="CV" />
        </div>
        <div className="mt-3 text-center text-xs text-gray-500">
          If the preview does not load, <a href={url} target="_blank" rel="noreferrer" className="text-primary underline">open in a new tab</a>.
        </div>
      </DialogContent>
    </Dialog>
  );
}


