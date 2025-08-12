"use client";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;

export function DialogContent({ children }: { children: React.ReactNode }) {
  return (
    <DialogPortal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <DialogPrimitive.Content className="fixed left-1/2 top-1/2 w-[92vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-white p-2 shadow-lg">
        <div className="flex justify-end p-2">
          <DialogPrimitive.Close className="rounded p-1 hover:bg-gray-100"><X className="h-4 w-4"/></DialogPrimitive.Close>
        </div>
        <div className="p-2">{children}</div>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}


