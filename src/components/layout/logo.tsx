import Link from 'next/link';
export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="MotoSpark Home">
      <img 
        width="32" 
        height="32" 
        src="https://img.icons8.com/stencil/32/motorbike-helmet.png" 
        alt="motorbike-helmet"
        className="text-primary"
      />
      <span className="text-2xl font-black tracking-tighter uppercase font-headline">
        MotoSpark
      </span>
    </Link>
  );
}
