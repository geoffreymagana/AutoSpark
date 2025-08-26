import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './logo';
import { Button } from '../ui/button';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact Us' },
];

const legalLinks = [
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/cookies', label: 'Cookie Policy' },
];

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-neutral-400">
              Your trusted partner for high-performance auto parts and services.
            </p>
             <div className="flex mt-4 space-x-3">
              {socialLinks.map((social, index) => (
                <Button key={index} asChild variant="outline" size="icon" className="border-2 border-primary hover:bg-primary">
                  <Link href={social.href} aria-label={social.icon.displayName}>
                    <social.icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase text-primary tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-300 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase text-primary tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-300 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase text-primary tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3 text-neutral-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span>123 Ngong Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+254 712 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@motospark.co.ke</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} MotoSpark. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
