import type { Category } from "@category/entities/category.entity";
import { httpClient } from "@common/api/client";
import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "@common/api/types";

async function fetchCategories(): Promise<ApiResponse<Category[]>> {
  const response = await httpClient.get<ApiResponse<Category[]>>("/categories");
  return response.data;
}

export function useCategories() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await fetchCategories(),
  });

  return { categories: data, error, isLoading };
}
