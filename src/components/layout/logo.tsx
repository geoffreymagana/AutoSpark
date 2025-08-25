import Link from 'next/link';
import { Cog } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="AutoSpark Home">
      <Cog className="h-8 w-8 text-primary animate-spin" style={{ animationDuration: '5s' }} />
      <span className="text-2xl font-black tracking-tighter uppercase font-headline">
        AutoSpark
      </span>
    </Link>
  );
}
