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
    images: string | StaticImport | [string]
}
type CartTypes = {
    _id: string,
    name: string,
    categories: string,
    price: number,
    quantity: number,
    slug: string,
    original: string,
    images: [string],
    description: string,

}
type ProductCartProps = {
    name?: string
    slug?: string
    image?: string | StaticImport
    price?: number

}