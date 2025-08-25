"use client";

import { useState, useMemo } from 'react';
import { products, carMakes, carModels, productCategories } from '@/lib/data';
import ProductCard from '@/components/shared/product-card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMake, setSelectedMake] = useState('All');
  const [selectedModel, setSelectedModel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const availableModels = useMemo(() => carModels[selectedMake as keyof typeof carModels] || ['All'], [selectedMake]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMake = selectedMake === 'All' || product.make === 'All' || product.make === selectedMake;
      const matchesModel = selectedModel === 'All' || product.model === 'All' || product.model === selectedModel;
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesMake && matchesModel && matchesCategory;
    });
  }, [searchTerm, selectedMake, selectedModel, selectedCategory]);

  const handleMakeChange = (value: string) => {
    setSelectedMake(value);
    setSelectedModel('All');
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-headline text-primary">
          Parts Catalog
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-300">
          Find the perfect high-performance parts for your vehicle.
        </p>
      </header>

      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm py-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <Input
              placeholder="Search parts..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedMake} onValueChange={handleMakeChange}>
            <SelectTrigger><SelectValue placeholder="Select Make" /></SelectTrigger>
            <SelectContent>
              {carMakes.map(make => <SelectItem key={make} value={make}>{make}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={selectedModel} onValueChange={setSelectedModel} disabled={selectedMake === 'All'}>
            <SelectTrigger><SelectValue placeholder="Select Model" /></SelectTrigger>
            <SelectContent>
              {availableModels.map(model => <SelectItem key={model} value={model}>{model}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger><SelectValue placeholder="Select Category" /></SelectTrigger>
            <SelectContent>
              {productCategories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-2xl font-bold">No products found</p>
          <p className="text-neutral-400 mt-2">Try adjusting your filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
}
