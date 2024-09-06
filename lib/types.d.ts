type CollectionsTypes = {
    _id: string;
    name: string;
    products: ProductType[];
}

type ProductTypes = {
    _id: string,
    name: string,
    original: string,
    price: string,
    categories: CollectionsTypes,
    quantity: string
}