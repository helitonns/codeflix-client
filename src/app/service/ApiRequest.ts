
const API_URL = process.env.API_URL || "http://localhost:3333";


// Feature
// Movies
export interface ApiQueryParams {
    [key: string]: string | number |boolean;
}

export interface RequestOptions {
    page?: number;
    _limit?: number;
    rating_like?: string;
}

export const defaultRequestOptions: RequestOptions = {
    page: 1,
    _limit: 10,
}

export function buildQueryString(params: ApiQueryParams){
    const query = Object.entries(params)
        .filter(([, value])=> value !== undefined)
        .map(([key, value])=> [key, encodeURIComponent(String(value))]);
    
    return `?${new URLSearchParams(Object.fromEntries(query)).toString()}`;
}

export async function apiRequest(
    endpoint: string, 
    query: ApiQueryParams = {},
    options: RequestOptions = {}
) {
    const mergedOptions:RequestOptions = {...defaultRequestOptions, ...options}
    const queryString = buildQueryString({...query, ...mergedOptions});

    try {
        const response = fetch(`${API_URL}/${endpoint}${queryString}`);
        
        if(!(await response).ok){
            throw new Error(`API request failed : ${(await response).statusText}`);
        }
        const data = await (await response).json();
        return data;
    } catch (error) {
        throw error;
    }
}