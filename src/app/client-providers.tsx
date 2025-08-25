
"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/hooks/use-cart";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppFAB from "@/components/layout/whatsapp-fab";

export function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <CartProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppFAB />
          <Toaster />
        </CartProvider>
    )
}
