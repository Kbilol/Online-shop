
export interface ApiResponse<T> {
    data:T;
    error:Error[];
    meta:Meta;
}

interface Meta {
    total ?: number;
    page?:number;
    PageSize?:number;
}

interface Error {
    message: string;
    status?: number;
}