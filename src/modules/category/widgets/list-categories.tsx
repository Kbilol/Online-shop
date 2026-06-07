import { useCategories } from "@category/api/categories";

export function ListCategories() {
  const { data, error, isLoading } = useCategories();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);
  return <div>Ура данные получили: {JSON.stringify(data)}</div>;
}
