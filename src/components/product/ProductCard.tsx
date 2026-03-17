import React from 'react';
import { Product } from '@/types';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Image Container */}
            <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden">
                {product.badge && (
                    <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10 
                        ${product.badge.color === 'red' ? 'bg-red-500 text-white' : 
                          product.badge.color === 'black' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'}`}>
                        {product.badge.text}
                    </span>
                )}
                
                <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                
                {/* Overlay Button */}
                <div className="absolute inset-x-0 bottom-4 px-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Button variant="primary" fullWidth className="py-3 shadow-lg">
                        Añadir al carrito
                    </Button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-base font-medium text-gray-900">{product.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{product.subtitle}</p>
                
                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-baseline space-x-2">
                        <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};