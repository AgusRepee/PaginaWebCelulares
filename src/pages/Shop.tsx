import React, { useMemo, useState } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { ProductCard } from '@/components/product/ProductCard';
import { products } from '@/data/products';
import type { Product } from '@/types';

type FilterKey = 'all' | 'phones' | 'audio' | 'wearables' | 'tablets' | 'laptops' | 'gaming';

const filters: Array<{ key: FilterKey; label: string }> = [
  { key: 'all', label: 'Todos' },
  { key: 'phones', label: 'Móviles' },
  { key: 'audio', label: 'Audio' },
  { key: 'wearables', label: 'Wearables' },
  { key: 'tablets', label: 'Tablets' },
  { key: 'laptops', label: 'Portátiles' },
  { key: 'gaming', label: 'Gaming' },
];

function filterProducts(list: Product[], active: FilterKey, query: string) {
  const q = query.trim().toLowerCase();
  return list.filter((p) => {
    const matchesCategory = active === 'all' ? true : p.category === active;
    const matchesQuery = !q
      ? true
      : `${p.title} ${p.subtitle}`.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });
}

export const Shop: React.FC = () => {
  const [active, setActive] = useState<FilterKey>('all');
  const [query, setQuery] = useState('');

  const visible = useMemo(() => filterProducts(products, active, query), [active, query]);

  return (
    <div className="bg-background-light">
      <PageHeader
        eyebrow="Tienda online"
        title="Tienda"
        description="Navega por nuestros últimos dispositivos y accesorios. Usa los filtros para encontrar lo que buscas."
        actions={
          <div className="w-full sm:w-auto">
            <div className="relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">
                search
              </span>
              <input
                value={query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                placeholder="Buscar productos…"
                className="w-full sm:w-80 pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
          </div>
        }
      />

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={
                  "px-4 py-2 rounded-full text-sm font-medium border transition-all " +
                  (active === f.key
                    ? "bg-mobix-black text-white border-mobix-black"
                    : "bg-white text-gray-600 border-gray-200 hover:text-mobix-black hover:border-gray-300")
                }
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Products */}
          {visible.length === 0 ? (
            <div className="bg-white border border-gray-100 rounded-xl p-10 text-center">
              <p className="text-mobix-black font-semibold">No se encontraron productos</p>
              <p className="text-gray-500 text-sm mt-1">Prueba otro filtro o término de búsqueda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {visible.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
