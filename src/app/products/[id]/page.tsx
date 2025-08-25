
"use client";

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Check, ShoppingCart, ArrowLeft } from 'lucide-react';
import ProductBadge from '@/components/shared/product-badge';
import ProductCard from '@/components/shared/product-card';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetailPage() {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const params = useParams();
  const id = params.id as string;

  const product = useMemo(() => products.find((p) => p.id.toString() === id), [id]);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const finalPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price;

  const relatedProductDetails = products.filter(p => product.relatedProducts.includes(p.id) && p.id !== product.id);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-8">
        <Button asChild variant="outline">
          <Link href="/products"><ArrowLeft /> Back to Products</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="relative">
          <Card className="overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="w-full h-auto object-cover aspect-square"
              data-ai-hint={product.aiHint}
            />
          </Card>
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {product.status !== 'none' && <ProductBadge status={product.status} />}
            {product.discount > 0 && <ProductBadge status="discount" discount={product.discount} />}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <p className="text-primary font-semibold">{product.category}</p>
          <h1 className="text-4xl md:text-5xl font-bold my-2">{product.name}</h1>
          
          <div className="mt-4">
            {product.discount > 0 && (
              <p className="text-xl text-neutral-500 line-through">
                KES {product.price.toLocaleString()}
              </p>
            )}
            <p className="text-5xl font-black text-primary">KES {finalPrice.toLocaleString()}</p>
          </div>

          <Separator className="my-6" />

          <p className="text-neutral-300 text-lg leading-relaxed">{product.description}</p>
          
          <div className="mt-auto pt-8">
             <Button 
                size="lg" 
                className="w-full text-xl font-bold py-8"
                disabled={product.status === 'outOfStock'}
                onClick={handleAddToCart}
              >
               <ShoppingCart className="mr-4" /> {product.status === 'outOfStock' ? 'Out of Stock' : 'Add to Cart'}
             </Button>
          </div>
        </div>
      </div>

      {/* Product Specs and Related Products */}
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
           <h2 className="text-3xl font-bold mb-6">Specifications</h2>
           <Card>
            <CardContent className="p-0">
               <ul className="divide-y divide-border/50">
                 {product.specs.map(spec => (
                   <li key={spec.name} className="flex justify-between items-center p-4">
                     <span className="font-semibold text-neutral-300">{spec.name}</span>
                     <span className="text-neutral-400">{spec.value}</span>
                   </li>
                 ))}
               </ul>
            </CardContent>
           </Card>
        </div>
        <div>
           <h2 className="text-3xl font-bold mb-6">You Might Also Like</h2>
           <div className="space-y-4">
              {relatedProductDetails.slice(0,2).map(related => (
                <Link href={`/products/${related.id}`} key={related.id} className="block">
                  <Card className="flex items-center gap-4 p-4 border-2 border-transparent hover:border-primary transition-colors">
                    <Image src={related.image} alt={related.name} width={80} height={80} className="rounded-md object-cover aspect-square" data-ai-hint={related.aiHint} />
                    <div>
                      <p className="font-semibold">{related.name}</p>
                      <p className="text-primary font-bold">KES {related.price.toLocaleString()}</p>
                    </div>
                  </Card>
                </Link>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
