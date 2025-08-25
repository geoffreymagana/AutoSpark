"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Star } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-headline text-primary">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-300">
          Have questions or need a quote? Our team is ready to help.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Form</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="subject" render={({ field }) => (
                <FormItem><FormLabel>Subject</FormLabel><FormControl><Input placeholder="e.g., Question about brake pads" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Your message..." {...field} rows={6} /></FormControl><FormMessage /></FormItem>
              )} />
              <Button type="submit" size="lg" className="w-full font-bold">Send Message</Button>
            </form>
          </Form>
        </div>
        
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold mb-6">Shop Info</h2>
                <div className="space-y-4 text-lg">
                    <p className="flex items-start gap-4"><MapPin className="h-6 w-6 text-primary mt-1 shrink-0" /><span>123 Ngong Road, Nairobi, Kenya</span></p>
                    <p className="flex items-center gap-4"><Phone className="h-6 w-6 text-primary" /><span>+254 712 345 678</span></p>
                    <p className="flex items-center gap-4"><Mail className="h-6 w-6 text-primary" /><span>contact@autospark.co.ke</span></p>
                    <p className="flex items-start gap-4"><Clock className="h-6 w-6 text-primary mt-1 shrink-0" /><span><strong>Mon-Fri:</strong> 9:00 AM - 6:00 PM<br/><strong>Sat:</strong> 10:00 AM - 4:00 PM</span></p>
                </div>
            </div>
             <div>
                <h2 className="text-3xl font-bold mb-6">Our Location</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="aspect-video w-full rounded-md overflow-hidden border-2 border-primary/50 relative cursor-pointer">
                          <Image src="/images/map/Kenya Map.png" width={800} height={450} alt="Map to AutoSpark" className="w-full h-full object-cover" data-ai-hint="city map" />
                          {/* Invisible center dot for precise tooltip positioning */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 opacity-0" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      align="center"
                      sideOffset={10}
                      className="p-0 border-primary bg-background/80 backdrop-blur-sm"
                    >
                      <div className="w-64 text-center">
                        <Image src="/images/main/Headquarters.jpg" width={600} height={400} alt="AutoSpark Shop HeadQuarters" className="w-full h-auto rounded-t-md" data-ai-hint="white suv" />
                        <div className="p-4">
                          <div className="flex justify-center mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                              ))}
                          </div>
                          <p className="font-bold">Head Office: 123 Ngong Road</p>
                          <p>Nairobi, Kenya</p>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            </div>
        </div>
      </div>
    </div>
  );
}
