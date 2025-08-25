
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { featuredProducts, services, testimonials, logos } from '@/lib/data';
import ProductCard from '@/components/shared/product-card';
import { ArrowRight, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import LogoIpsum1Icon from '@/components/icons/logoipsum-1-icon';
import LogoIpsum2Icon from '@/components/icons/logoipsum-2-icon';
import LogoIpsum3Icon from '@/components/icons/logoipsum-3-icon';
import LogoIpsum4Icon from '@/components/icons/logoipsum-4-icon';
import LogoIpsum5Icon from '@/components/icons/logoipsum-5-icon';
import LogoIpsum6Icon from '@/components/icons/logoipsum-6-icon';

function LogoMarquee() {
  const extendedLogos = [...logos, ...logos]; // Duplicate for a seamless loop

  return (
    <div className="relative w-full overflow-hidden bg-primary h-24">
      <div className="flex animate-marquee whitespace-nowrap">
        {extendedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8 text-primary-foreground">
            <logo.src className="w-auto h-10" />
          </div>
        ))}
      </div>
      <div className="flex absolute top-0 animate-marquee whitespace-nowrap" style={{ animationDelay: "-12.5s" }}>
        {extendedLogos.map((logo, index) => (
          <div key={`clone-${index}`} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8 text-primary-foreground">
            <logo.src className="w-auto h-10" />
          </div>
        ))}
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="/images/main/car engine.jpg"
          alt="Car Engine"
          fill
          className="absolute z-0 brightness-50 object-cover"
          data-ai-hint="car engine"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter font-headline">
            Unleash Peak Performance
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-300">
            Your ultimate source for premium auto parts and expert car services. We fuel your passion for driving.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="font-bold text-lg text-white">
              <Link href="/products">Shop Parts <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold text-lg bg-black/20 backdrop-blur-sm">
              <Link href="/booking">Book Service</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-primary font-headline">Our Services</h2>
            <p className="mt-2 max-w-2xl mx-auto text-neutral-400">
              Expert care for your vehicle, from routine maintenance to performance upgrades.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service) => (
              <Card key={service.id} className="bg-card border-2 border-transparent hover:border-primary transition-all duration-300 group text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-md group-hover:bg-primary transition-all duration-300">
                       <service.icon className="w-12 h-12 text-primary group-hover:text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-neutral-400">{service.description.substring(0, 80)}...</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
             <Button asChild size="lg" variant="outline" className="font-bold">
               <Link href="/booking">Book a Service <ArrowRight /></Link>
             </Button>
           </div>
        </div>
      </section>

       <section className="py-12 bg-card/20">
          <LogoMarquee />
       </section>

      <section id="featured-products" className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-primary font-headline">Featured Products</h2>
            <p className="mt-2 max-w-2xl mx-auto text-neutral-400">
              Top-quality parts to boost your vehicle's performance and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="/products">View All Products <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-primary font-headline">Rave Reviews</h2>
            <p className="mt-2 max-w-2xl mx-auto text-neutral-400">
              See what our satisfied customers have to say about their AutoSpark experience.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col justify-between h-full bg-card/50 border-border/50">
                      <CardContent className="p-6">
                         <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-600'}`} />
                          ))}
                        </div>
                        <p className="text-neutral-300 italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <div className="p-6 pt-0 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-neutral-400">{testimonial.vehicle}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
