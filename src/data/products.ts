import type { Product } from '@/types';

// Catálogo Apple — solo productos oficiales Apple.
export const products: Product[] = [
  {
    id: '1',
    title: 'iPhone 16 Pro',
    subtitle: '256 GB - Titanio natural',
    price: 1199.0,
    image:
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80',
    category: 'iphone',
  },
  {
    id: '2',
    title: 'Apple Watch Ultra 2',
    subtitle: 'Caja de titanio - 49 mm',
    price: 799.0,
    image:
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1200&q=80',
    badge: { text: 'Nuevo', color: 'red' },
    category: 'watch',
  },
  {
    id: '3',
    title: 'AirPods Pro (2.ª generación)',
    subtitle: 'Cancelación de ruido activa',
    price: 249.0,
    image:
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1200&q=80',
    category: 'airpods',
  },
  {
    id: '4',
    title: 'iPad Air 11"',
    subtitle: 'Wi‑Fi + Cellular - 128 GB',
    price: 799.0,
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80',
    category: 'ipad',
  },
  {
    id: '5',
    title: 'AirPods Max',
    subtitle: 'Over-ear - Cinco colores',
    price: 549.0,
    image:
      'https://images.unsplash.com/photo-1625299401802-2d0622d2e2c2?auto=format&fit=crop&w=1200&q=80',
    category: 'airpods',
  },
  {
    id: '6',
    title: 'Cargador MagSafe',
    subtitle: 'Apple Original',
    price: 39.0,
    originalPrice: 49.0,
    image:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80',
    badge: { text: 'Oferta', color: 'black' },
    category: 'accessories',
  },
  {
    id: '7',
    title: 'MacBook Air 15"',
    subtitle: 'Chip M3 - 8 GB - Midnight',
    price: 1299.0,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    category: 'mac',
  },
  {
    id: '8',
    title: 'MacBook Pro 14"',
    subtitle: 'Chip M3 Pro - 18 GB - Space Black',
    price: 1999.0,
    image:
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1200&q=80',
    category: 'mac',
  },
];
