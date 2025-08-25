import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
      <AlertTriangle className="w-24 h-24 text-primary mb-4" />
      <h1 className="text-8xl font-black text-white tracking-tighter font-headline">404</h1>
      <h2 className="text-3xl font-bold mt-2">Wrong Turn?</h2>
      <p className="mt-4 max-w-md text-neutral-300">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button asChild size="lg" className="mt-8 font-bold">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  );
}
