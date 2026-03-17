export interface Product {
    id: string;
    title: string;
    subtitle: string;
    price: number;
    originalPrice?: number;
    image: string;
    badge?: {
        text: string;
        color: 'red' | 'black' | 'gray';
    };
    category?: string;
}

export interface NavItem {
    label: string;
    href: string;
}

export interface CategoryCardProps {
    title: string;
    icon: string;
    href: string;
}