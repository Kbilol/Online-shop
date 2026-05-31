const categories = [
  {
    id: 1,
    name: "Смартфоны",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    name: "Ноутбуки",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 3,
    name: "Наушники",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 4,
    name: "Часы",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 5,
    name: "Клавиатуры",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
  },
  {
    id: 6,
    name: "Мониторы",
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
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