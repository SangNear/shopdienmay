type CollectionsTypes = {
    _id: string;
    name: string;
    products: ProductType[];
}

type ProductTypes = {
    _id: string,
    name: string,
    slug: string,
    original: string,
    price: number,
    categories: CollectionsTypes,
    quantity: string,
    description: string,
    brands: string,
    images: string | StaticImport
}