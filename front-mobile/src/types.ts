export type Order = {
    id: number;
    adderss: string;
    latitude: number;
    longitude: number;
    moment: string;
    status: string;
    products: Product[];
    total: number;
}

export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}