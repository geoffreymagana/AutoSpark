import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-headline text-primary">
          Expert Vehicle Services
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-300">
          From routine maintenance to high-performance tuning, our certified technicians have you covered.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} className="bg-card border-2 border-border/50 hover:border-primary hover:-translate-y-2 transition-all duration-300 group flex flex-col">
            <CardHeader className="flex-row items-center gap-4 pb-4">
              <div className="bg-primary/10 p-3 rounded-md group-hover:bg-primary transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <CardTitle className="text-2xl">{service.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-neutral-300">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
