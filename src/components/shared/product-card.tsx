
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import ProductBadge from './product-badge';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import type { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const finalPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price;

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="flex flex-col overflow-hidden border-2 border-border/50 hover:border-primary transition-all duration-300 group">
      <CardHeader className="p-0 relative">
        <Link href={`/products/${product.id}`} className="block">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
            data-ai-hint={product.aiHint}
          />
        </Link>
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.status !== 'none' && <ProductBadge status={product.status} />}
          {product.discount > 0 && <ProductBadge status="discount" discount={product.discount} />}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <p className="text-sm text-neutral-400">{product.category}</p>
        <CardTitle className="mt-1 text-lg">
          <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </CardTitle>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div>
          {product.discount > 0 && (
            <p className="text-sm text-neutral-500 line-through">
              KES {product.price.toLocaleString()}
            </p>
          )}
          <p className="text-2xl font-bold text-primary">KES {finalPrice.toLocaleString()}</p>
        </div>
        <Button 
          variant={product.status === 'outOfStock' ? 'outline' : 'default'} 
          size="icon" 
          disabled={product.status === 'outOfStock'}
          onClick={handleAddToCart}
          aria-label="Add to cart"
        >
          <ShoppingCart />
        </Button>
      </CardFooter>
    </Card>
  );
}
