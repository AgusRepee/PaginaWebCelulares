import React from 'react';

interface CategoryItem {
    title: string;
    icon: string;
    href: string;
}

const categories: CategoryItem[] = [
    { title: 'Relojes inteligentes', icon: 'watch', href: '#' },
    { title: 'Gaming', icon: 'sports_esports', href: '#' },
    { title: 'Auriculares', icon: 'headphones', href: '#' },
    { title: 'Tablets', icon: 'tablet_mac', href: '#' },
];

export const CategoryStrip: React.FC = () => {
    return (
        <section className="py-12 bg-background-light border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div 
                            key={category.title}
                            className="group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between overflow-hidden cursor-pointer"
                        >
                            <div className="z-10">
                                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                                <span className="text-sm text-primary font-medium mt-1 inline-block group-hover:underline">Comprar ahora</span>
                            </div>
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                                <span className="material-icons text-gray-400 group-hover:text-gray-600">{category.icon}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};