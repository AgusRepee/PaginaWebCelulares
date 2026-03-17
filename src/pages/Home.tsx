import React from 'react';
import { Hero } from '@/components/home/Hero';
import { CategoryStrip } from '@/components/home/CategoryStrip';
import { FeaturedSection } from '@/components/home/FeaturedSection';
import { ProductCard } from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';

export const Home: React.FC = () => {
    return (
        <div className="bg-background-light">
            <Hero />
            <CategoryStrip />
            
            {/* New Arrivals Grid */}
            <section className="py-20 bg-background-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-mobix-black mb-2">Última colección</h2>
                            <p className="text-gray-500">La tecnología más reciente disponible ahora.</p>
                        </div>
                        <Link to="/shop" className="hidden sm:inline-flex items-center text-sm font-semibold text-primary hover:text-mobix-black transition-colors">
                            Ver todos los productos <span className="material-icons text-sm ml-1">arrow_forward</span>
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-10 text-center sm:hidden">
                        <Link to="/shop" className="inline-flex items-center text-sm font-semibold text-primary hover:text-mobix-black transition-colors">
                            Ver todos los productos <span className="material-icons text-sm ml-1">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            <FeaturedSection />
        </div>
    );
};