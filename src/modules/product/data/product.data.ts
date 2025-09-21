import type { ProductEntity } from "../product.entity";



export const products: ProductEntity[] = [
    {
        id: 1,
        title: 'Кофе',
        description: 'Кофе из Британии. Свежий и вкусный',
        price: 100,
        rating: 4,
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        id: 2,
        title: 'Ноутбук',
        description: 'i5-8400, 16gb, 512gb ssd, 2gb vga, nvidia RTX 4080',
        price: 2000,
        rating: 5,
        image: 'https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?cs=srgb&dl=pexels-natri-129208.jpg&fm=jpg'
    }
]