
"use client";

import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppFAB from "@/components/layout/whatsapp-fab";

export function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppFAB />
          <Toaster />
        </>
    )
}
