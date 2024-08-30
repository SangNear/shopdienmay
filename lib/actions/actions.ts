export const getAllProductBySlug = async (slug: string) => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/${slug}`)
    return products.json()
}