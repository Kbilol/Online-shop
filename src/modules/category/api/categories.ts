import type { Category } from "@category/entities/category.entity";
import { httpClient } from "@common/api/client";
import { useQuery } from "@tanstack/react-query";

async function fetchCategories(): Promise<Category[]> {
  const response = await httpClient.get<Category[]>("/categories");
  return response.data;
}

export function useCategories() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await fetchCategories(),
  });

  return { data, error, isLoading };
}
