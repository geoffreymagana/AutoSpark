
"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { pricingTiers, services } from '@/lib/data';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

type ServiceWithPrice = typeof services[0] & { price: number };

export default function PricingPage() {
  const [pricedServices, setPricedServices] = useState<ServiceWithPrice[]>([]);

  useEffect(() => {
    // Generate prices on the client-side to avoid hydration issues
    setPricedServices(
      services.map(service => ({
        ...service,
        price: Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000
      }))
    );
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-headline text-primary">
          Plans & Pricing
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-300">
          Transparent pricing for our services and exclusive benefits for our members.
        </p>
      </header>
      
      <Tabs defaultValue="membership" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-auto">
          <TabsTrigger value="membership" className="py-2 text-lg">Membership Tiers</TabsTrigger>
          <TabsTrigger value="services" className="py-2 text-lg">Service Rates</TabsTrigger>
        </TabsList>
        <TabsContent value="membership" className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card key={tier.name} className={`flex flex-col border-2 ${index === 1 ? 'border-primary shadow-lg shadow-primary/20' : 'border-border/50'}`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">{tier.name}</CardTitle>
                    <CardDescription className="text-2xl font-semibold text-primary">{tier.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                          <span className="text-neutral-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full text-lg font-bold" variant={index === 1 ? 'default' : 'outline'}>
                      {tier.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
        </TabsContent>
        <TabsContent value="services" className="mt-12">
            <div className="max-w-4xl mx-auto">
                <Card className="border-border/50">
                    <CardHeader>
                        <CardTitle>Standard Service Rates</CardTitle>
                        <CardDescription>Prices are estimates and may vary based on vehicle make and model. Contact us for a precise quote.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="divide-y divide-border/50">
                            {pricedServices.map(service => (
                                <li key={service.id} className="flex justify-between items-center py-4">
                                    <span className="text-lg font-medium text-neutral-200">{service.name}</span>
                                    <span className="text-lg font-semibold text-primary">Starting from KES {service.price.toLocaleString()}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
