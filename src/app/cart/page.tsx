
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const { toast } = useToast();

  const subtotal = cart.reduce((sum, item) => {
    const finalPrice = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price;
    return sum + finalPrice * item.quantity;
  }, 0);

  const handleCheckout = () => {
    toast({
      title: "Checkout Initiated!",
      description: "This is a demo. No real transaction will be made.",
    });
    clearCart();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-headline text-primary">
          Your Cart
        </h1>
      </header>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <ShoppingCart className="w-24 h-24 text-neutral-600 mx-auto mb-4" />
          <p className="text-2xl font-bold mb-2">Your cart is empty</p>
          <p className="text-neutral-400 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild size="lg">
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Cart Items ({cart.reduce((sum, item) => sum + item.quantity, 0)})</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="divide-y divide-border/50">
                  {cart.map((item) => {
                    const finalPrice = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price;
                    return (
                      <li key={item.id} className="flex items-center gap-4 py-4">
                        <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md object-cover" />
                        <div className="flex-grow">
                          <Link href={`/products/${item.id}`} className="font-semibold hover:text-primary">{item.name}</Link>
                          <p className="text-sm text-neutral-400">{item.category}</p>
                          <p className="text-lg font-bold text-primary mt-1">KES {finalPrice.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input type="number" value={item.quantity} readOnly className="w-16 h-10 text-center" />
                           <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="w-24 text-right font-semibold text-lg">KES {(finalPrice * item.quantity).toLocaleString()}</p>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">KES {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold">KES 500</span>
                </div>
                <Separator />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>KES {(subtotal + 500).toLocaleString()}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full font-bold" onClick={handleCheckout}>
                  Proceed to Checkout <ArrowRight />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
