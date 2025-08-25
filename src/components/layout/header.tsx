"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingCart, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/use-cart';
import { Badge } from '@/components/ui/badge';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/products', label: 'Products' },
  { href: '/booking', label: 'Booking' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cart } = useCart();

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-lg font-semibold transition-colors hover:text-primary",
                pathname === href ? "text-primary" : "text-neutral-300"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="ghost" size="icon" className="relative">
            <Link href="/cart">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                 <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 justify-center p-0">{cartItemCount}</Badge>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>
          <Button asChild>
            <Link href="/login"><User className="mr-2" /> Login</Link>
          </Button>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
             <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
             </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background p-0">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                 <Logo />
                 <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                   <X className="h-6 w-6" />
                   <span className="sr-only">Close menu</span>
                 </Button>
              </div>
              <nav className="flex-1 flex flex-col p-4 gap-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-xl font-semibold p-2 rounded-md transition-colors hover:bg-primary/10 hover:text-primary",
                      pathname === href ? "text-primary bg-primary/10" : "text-neutral-200"
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <div className="p-4 border-t mt-auto flex flex-col gap-4">
                 <Button asChild variant="outline" size="lg" className="relative">
                   <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Shopping Cart
                      {cartItemCount > 0 && (
                          <Badge variant="destructive" className="absolute top-1.5 right-1.5">{cartItemCount}</Badge>
                      )}
                   </Link>
                  </Button>
                <Button asChild size="lg">
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <User className="mr-2" /> Login / Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
