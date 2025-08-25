
"use client";
import Link from 'next/link';
import WhatsAppIcon from '../icons/whatsapp-icon';

export default function WhatsAppFAB() {
    const phoneNumber = "+254712345678";
    const message = "Hello AutoSpark! I'd like to inquire about a part.";

    return (
        <Link 
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg group z-50"
            aria-label="Chat on WhatsApp"
        >
             <span className="absolute inline-flex h-full w-full rounded-full bg-primary/80 opacity-75 animate-ping-slow group-hover:animate-none -z-10"></span>
             <WhatsAppIcon className="w-10 h-10 text-white z-10" />
        </Link>
    );
}
