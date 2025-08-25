
import { Suspense } from 'react';
import ProductsClientPage from './products-client-page';
import { Skeleton } from '@/components/ui/skeleton';

function ProductsLoading() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <header className="text-center mb-12">
                <Skeleton className="h-16 w-1/2 mx-auto" />
                <Skeleton className="h-6 w-3/4 mx-auto mt-4" />
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center mb-8">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="space-y-2">
                        <Skeleton className="h-48 w-full" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-8 w-1/2" />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default function ProductsPage() {
    return (
        <Suspense fallback={<ProductsLoading />}>
            <ProductsClientPage />
        </Suspense>
    );
}
