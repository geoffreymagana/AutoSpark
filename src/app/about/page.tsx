import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { teamMembers } from '@/lib/data';
import { Rocket, Shield } from 'lucide-react';

function TeamMemberCard({ member }: { member: typeof teamMembers[0] }) {
  return (
    <Card className="overflow-hidden border-2 border-border/50 group">
      <div className="relative overflow-hidden aspect-[4/5] bg-card">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={500}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-ai-hint={member.aiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <div className="p-4 text-center bg-background">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-primary font-semibold">{member.role}</p>
      </div>
    </Card>
  );
}


export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-headline text-primary">
          Fueled by Passion
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-300">
          Discover the story behind AutoSpark and the team dedicated to your vehicle's performance.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-neutral-300 mb-4">
            Founded in 2010 by a group of passionate automotive enthusiasts, AutoSpark was born from a desire to provide top-tier parts and unparalleled service. We started in a small garage, fueled by late nights and a love for everything with four wheels.
          </p>
          <p className="text-neutral-300">
            Today, we've grown into a leading destination for car lovers, but our core values remain unchanged: quality, expertise, and a commitment to helping our customers achieve their automotive dreams.
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
           <Image
            src="https://placehold.co/800x600.png"
            alt="AutoSpark workshop"
            fill
            className="object-cover"
            data-ai-hint="car workshop"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-24">
          <Card className="border-2 border-border/50">
            <CardHeader className="flex-row items-center gap-4">
              <Rocket className="w-10 h-10 text-primary" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300">To empower automotive enthusiasts by providing access to the highest quality parts, expert knowledge, and exceptional service, helping them unlock the ultimate performance and potential of their vehicles.</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-border/50">
            <CardHeader className="flex-row items-center gap-4">
              <Shield className="w-10 h-10 text-primary" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300">To be the most trusted and respected name in the automotive aftermarket industry, building a global community of passionate drivers who rely on AutoSpark for all their performance needs.</p>
            </CardContent>
          </Card>
      </section>


      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-primary font-headline">Meet the Crew</h2>
          <p className="mt-2 max-w-2xl mx-auto text-neutral-400">
            The experts behind the counter and under the hood.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
