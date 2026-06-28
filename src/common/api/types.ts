export interface ApiResponse<T> {
  data: T;
  errors: Error[];
  meta: Meta;
}

interface Meta {
  total?: number;
  page?: number;
  pageSize?: number;
}

interface Error {
  message: string;
  status?: number;
}
