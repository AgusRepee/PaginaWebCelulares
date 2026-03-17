import type { Product } from '@/types';

// Centralized mock catalog.
// Later, you can replace this with API data without touching your pages/components.
export const products: Product[] = [
  {
    id: '1',
    title: 'Mobix X1 Pro',
    subtitle: '512GB - Midnight',
    price: 999.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcivS0yJoAhLWkeewY27KAZqi33CrsUysXesEvA0uUk2mcq9mTnKrQvsgMQ6kScmXKeaucUNlR4tsLoJyITYf48woF-nhexzy454peGoyvbTBSA_PRPcWhZDgQ1xeUeSbrgb14LoRSb0RqHEwkFc74PZOEsepTVMSaIFrnrHIIBK9AKDEGTH_S7i_J5BPhewoRalkQcSfeKBpensVHnYMZ-7p7yvrqvw3uHG_h2n6rv8YeCPmZPHI4zWSl91bxJzRCBwcQaSsBwLM',
    category: 'phones',
  },
  {
    id: '2',
    title: 'Ultra Watch Series 5',
    subtitle: 'Titanium Case',
    price: 499.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyg1cg6n6PFVUt9jZvAPRmSyl7rvTSk3PeGzOsjXkc_eI7BmDZaN_7s1-13CvnYztCKVYgXfGJird6J9em1YwDJMWJ2XfMgMK9CX4HwE8_YjJ9RxLdZEZ58jgTajg3GQi2SWTTmwCZ40WlOcB1eSboh_iBK5raVSdLYEBkogkUt38dN1MjL8mkI_Ywa5U7n1QTfdKuSyf6qljpO4YFqGZeCeff6lcrAOPYNyzquidYD8zw_jN2NfsLfrKMFL6Ie-3B_Wpf8wajvXQ',
    badge: { text: 'Nuevo', color: 'red' },
    category: 'wearables',
  },
  {
    id: '3',
    title: 'Sonic Over-Ear',
    subtitle: 'Noise Cancelling',
    price: 349.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSG4Jbz-mzAt1AMHiz6byJycPhTzSWQIIvIyRRfwh9HdUzN6gfnaeaU7XcgJpAuD8sgY7wSZjAmSXI5lu3VGxSVGtt1ud5Fs4VmPyMinUitLi7NtCYG90Qw5zMr3dap1gAmunXu8ItNJ6GSPC-XcYcJ-DZK9aaqWTB1zNyF348WyIqO3x1fm6rZxulZ62B9Yn-a1EfupdUQyeQNzlfmythkNTuEglYbm2IIvFv9ZcmpM9hZ8HRAKjGNNe5wrfmrFc20Aunx4RpLHI',
    category: 'audio',
  },
  {
    id: '4',
    title: 'Tab Air 10.9"',
    subtitle: 'Wi‑Fi + Cellular',
    price: 699.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCOjbdKCJbGRBxeE2bWOYBMkgPgJZrEfcy_1cuG5YOvwwxv9EtdhsWVN9MZNlACMmMSgjBoGC-1FUwYVsWUoy3BKqS0nupEzA_0oAl5dnyUomqkdtoBkcm-a3fKY5xMXtkMgGF1VmtC9tS9u9fOU-ZT88hC2HjsQ5g0fTPU7nlRmiScVMwZf6yxL5xxzPoZ5BEADO7QPWlzPcV469dv5tqWeAEz6uP0paN7CQkEEfHbTIvCq4eiKU8u4O-FPgpQUwZJSSKVgaT8mlk',
    category: 'tablets',
  },
  {
    id: '5',
    title: 'Pro Buds 2',
    subtitle: 'True Wireless',
    price: 199.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwM9vJYVpCRVeGPJ_wSwL2R6AbODuJKZmEb7Mb_xIF9G8ni0hYx6c_ZXb6O5sG4up6TEuTnIzA5zzypQiKGCggIgmmcx8tWYzHB1n7Zwfaq3fkE-pa4JiAe6TQYyCwm7O4K0DHmlhyivHAOh_9YBIW8onROqme3AG5gBKhCzRJSWGiR3vgeRCeH18qWwFcFiIN15r5DsRN_m_gY9o9chYZcgEa7Rp3ws_1RskkxcjGoVilUFZ-85itH13zZid1CJ0_v15gX4AyssM',
    category: 'audio',
  },
  {
    id: '6',
    title: 'G‑Controller',
    subtitle: 'Dual Shock',
    price: 59.0,
    originalPrice: 79.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAT_NMiywxp1n2uGTXB5jY7-s9P_CF5avLS543jLuqoHhiWx8aIlyQuirEZrbml32OJP3EvphZKjzR8m2MijiXv6NVV2vAOLJe5mGUyzzj5gSHh_7ZX1-yTRRefX0EQqt-TtQO-Hz5ZqK_PmBcNXaELoxWtnEVyKwI-xH1FZDr52QqyyWsMMGTFVl7HqYC84DfcXMU5VMURQwWjbG1qBYOgPbLNyqdG4rfIEBvDaWudmKq-5HVrV0ILRdOYrnwa9AqrHlhVwvrE0uI',
    badge: { text: 'Oferta', color: 'black' },
    category: 'gaming',
  },
  {
    id: '7',
    title: 'Vision VR',
    subtitle: 'Standalone Headset',
    price: 399.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbj--AxiU9kiV0nZJor2FmNNAOuZtEF3_GL8magbxUrE9bUSD4bjwicDlioLi11N_XkkiMVeaz7s4K9qknzvGsKOQWrkHJWIkS35wCiUH_qWiandLHRg5WQyCVEVDCuSpSMOKLzx4Di4aRmSHWvrzO9gEvciZT0RyWfyua8ReoXLpjZl_zG1OcWN8HIh2I2H5CJa0DrOa4aDIDRBv4qFuHh9_Bntei2xPdByDYEOJIl6Ltzrr7GStEz9tX9G3JIpsJzu31CMOUgDQ',
    category: 'gaming',
  },
  {
    id: '8',
    title: 'Laptop Air 15"',
    subtitle: 'M2 Chip - Silver',
    price: 1299.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDzrCwotOlPYrrLB2NmMN2yvphm1bNMAi85MsGahFedVdpfFhme199ePce9Dmkg2-whlLpnPqfw8W6jDWHNZFlq1VKuE4KSPkhwhiZfYIyzmpZamJCP8wA5irxkzfbpGJw39B8ZTysx_8ku4SWaaTHfT-IKkq3CBwZsWzDhV1QLU7ARxhlUSuRSO3Iai3HwUyiwHi6lguKCPjHJcIdE9-wUDon0sp8JjuGt46OVu5e7TzTJV0KQ4Mpqe7DzF7FZomtNMZBWlgYSYxQ',
    category: 'laptops',
  },
];
