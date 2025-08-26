export default function TurboCdnIcon({ className }: { className?: string }) {
  return (
    <img 
      width="96" 
      height="96" 
      src="https://img.icons8.com/external-goofy-solid-kerismaker/96/228B22/external-Turbo-car-auto-parts-goofy-solid-kerismaker.png" 
      alt="turbo icon"
      className={`transition-all duration-300 group-hover:brightness-0 group-hover:invert ${className}`}
    />
  );
}
