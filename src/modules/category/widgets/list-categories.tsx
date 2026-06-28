import { useCategories } from "@category/api/categories.api";
import type { Category } from "@category/entities/category.entity";


export function ListCategories() {
    const { categories, error, isLoading } = useCategories();

    if (isLoading) return <div>Loading... </div>
    if (error) return <div>Error: {error.message}</div>;
    if (!categories) return null;


    console.log(categories)
    return(
 <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Категории товаров</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {categories.data.map((category: Category) => (
          <div
            key={category.id}
            className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:scale-105 hover:shadow-lg"
          >
            <img
            //   src={category.image}
              alt={category.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">
                {category.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}