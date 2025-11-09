


import type { ProductEntity } from "../entity/product.entity";



export const products: ProductEntity[] = [
    {
        id:1,
        title:'Кофе',
        description: 'Description 1',
        price:100,
        rating:4,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuxACngXzSRce4KLL5BgaTKcBKKWzKmEnnQ&s'
    },
    {
        id:2,
        title:'Ноутбук',
        description: 'Description 2',
        price:200,
        rating:5,
        image:'https://www.meme-arsenal.com/memes/6eca5c6d11f4dfdd0cda8ebeea7b2817.jpg'
    },
    {
        id:3,
        title:'Iphone 17 Pro max',
        description: 'Description 3',
        price:1600,
        rating:5,
        image:'https://preview.redd.it/y78y553bdwn71.jpg?width=640&crop=smart&auto=webp&s=6628e39159f188076dfdc5c7da0ac12284b9bbbf'
    },
    {
        id:4,
        title:'Хлеб',
        description: 'Description 4',
        price:10,
        rating:0.39,
        image:'https://cs.pikabu.ru/post_img/2013/04/26/7/1366967439_242656108.jpg'
    },
    {
        id:5,
        title:'Крокодил',
        description: 'Description 5',
        price:9999,
        rating:5,
        image:'https://news.store.rambler.ru/img/db522dbdee37e55a2de67a03a0ba5da5?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen'
    },
    {
        id:6,
        title:'Динозавор',
        description: 'Description 6',
        price:99999,
        rating:5,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHkgQJYT80I6CU9cdOlbE0yPIkEVGXu7-z_LeLkJT88ivwxfYevfeg_NlCmOICbpDxQA&usqp=CAU'
    }
]