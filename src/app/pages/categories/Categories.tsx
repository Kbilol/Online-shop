const categories = [
  {
    id: 1,
    name: "Хорошом состояние хлеб",
    image:
      "https://cs.pikabu.ru/post_img/2013/04/26/7/1366967439_242656108.jpg",
  },
  {
    id: 2,
    name: "Ноутбуки Хакеров",
    image:
      "https://www.meme-arsenal.com/memes/6eca5c6d11f4dfdd0cda8ebeea7b2817.jpg",
  },
  {
    id: 3,
    name: "Наушники",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/432b1d40-884e-46dd-b459-62317a227b43/dlr0nyz-b956754e-3cf5-4510-8208-fbbb87d90f20.jpg/v1/fill/w_828,h_485,q_75,strp/angry_bird_ear_by_htlmxs_dlr0nyz-fullview.jpg",
  },
  {
    id: 4,
    name: "Нокия 18",
    image:
      "https://preview.redd.it/y78y553bdwn71.jpg?width=640&crop=smart&auto=webp&s=6628e39159f188076dfdc5c7da0ac12284b9bbbf",
  },
  {
    id: 5,
    name: "Тигр",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwjg5UtRge_buRXOtqzLFUOJJhyFD6lHrjQ&s",
  },
  {
    id: 6,
    name: "Монитор хорошом состояние",
    image:
      "https://abrakadabra.fun/uploads/posts/2022-01/1643090591_4-abrakadabra-fun-p-slomal-monitor-12.jpg",
  },
];

export const Category = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Категории товаров</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:scale-105 hover:shadow-lg"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">
                {category.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};