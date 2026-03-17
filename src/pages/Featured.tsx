import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/product/ProductCard';
import { products } from '@/data/products';

const picks = products.filter((p) => ['1', '2', '5', '8'].includes(p.id));

export const Featured: React.FC = () => {
  return (
    <div className="bg-background-light">
      <PageHeader
        eyebrow="Selección"
        title="Destacados"
        description="Nuestros favoritos elegidos a mano: dispositivos premium, más vendidos y ofertas limitadas."
      />

      {/* Hero highlight */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white border border-gray-100 rounded-2xl p-8 sm:p-12 shadow-sm">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">Estrella de la gama</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-mobix-black">
                Mobix X1 Pro
              </h2>
              <p className="mt-3 text-gray-500 max-w-prose">
                Experiencia premium: máximo rendimiento, pantalla impresionante y batería para todo el día.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button>Comprar ahora</Button>
                <Button variant="secondary">Saber más</Button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[{ k: '512GB', v: 'Almacenamiento' }, { k: '5G', v: 'Conectividad' }, { k: 'Cámara Pro', v: 'Sistema' }].map(
                  (x) => (
                    <div key={x.k} className="rounded-xl border border-gray-100 bg-background-light p-4">
                      <p className="text-mobix-black font-bold">{x.k}</p>
                      <p className="text-xs text-gray-500">{x.v}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-gray-50 to-gray-200 rounded-3xl -z-10" />
              <img
                src={products.find((p) => p.id === '1')?.image}
                alt="Mobix X1 Pro"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curated grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-mobix-black">Recomendaciones del equipo</h3>
              <p className="text-gray-500">Una selección que te recomendamos ahora mismo.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {picks.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
