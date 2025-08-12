"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const Schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Please provide some details"),
});

type Values = z.infer<typeof Schema>;

export default function ContactMiniForm() {
  const form = useForm<Values>({ resolver: zodResolver(Schema), defaultValues: { name: "", email: "", message: "" } });

  const onSubmit = async (values: Values) => {
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Unexpected error");
      toast.success("Thanks! I will get back to you shortly.");
      form.reset();
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Failed to send message";
      toast.error(message);
    }
  };

  return (
    <div className="rounded-2xl border bg-white p-5">
      <h3 className="text-base font-semibold">Quick Message</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-3 grid gap-3">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl><Input placeholder="Your name" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="message" render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl><Textarea rows={4} placeholder="How can I help?" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <Button type="submit" className="mt-1">Send</Button>
        </form>
      </Form>
    </div>
  );
}


