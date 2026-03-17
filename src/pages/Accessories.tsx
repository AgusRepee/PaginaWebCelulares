import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/product/ProductCard';
import { products } from '@/data/products';

const accessoryCards = [
  { title: 'Audio', icon: 'headphones', description: 'Auriculares, cascos y altavoces.' },
  { title: 'Wearables', icon: 'watch', description: 'Relojes inteligentes y tecnología fitness.' },
  { title: 'Gaming', icon: 'sports_esports', description: 'Mandos y equipamiento VR.' },
  { title: 'Tablets', icon: 'tablet_mac', description: 'Trabajo, ocio y portabilidad.' },
];

const accessoryPicks = products.filter((p) => ['2', '3', '5', '6', '7'].includes(p.id));

export const Accessories: React.FC = () => {
  return (
    <div className="bg-background-light">
      <PageHeader
        eyebrow="Extras"
        title="Accesorios"
        description="Mejora tu equipo con audio, wearables, gaming y más, seleccionados para combinar con tus dispositivos."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category cards (similar vibe to your Home CategoryStrip, but as a page grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessoryCards.map((c) => (
              <div
                key={c.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-background-light flex items-center justify-center">
                  <span className="material-icons text-mobix-black">{c.icon}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-mobix-black">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{c.description}</p>
                <div className="mt-5">
                  <Button variant="secondary" size="sm">
                    Comprar {c.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Picks */}
          <div className="mt-14">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-mobix-black">Accesorios populares</h2>
                <p className="text-gray-500">Productos que suelen comprarse junto con el móvil.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessoryPicks.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
