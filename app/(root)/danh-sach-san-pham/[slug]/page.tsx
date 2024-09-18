
import ListProductPageBySlug from "@/components/pages/ListProductBySlug";


// Define the function to generate static paths for all products
export async function generateStaticParams() {
  const res = await fetch("http://api.dienmaygiatotsaigon.vn/api/v1/product");
  const data = await res.json();

  // Check if products are inside a `data` property or directly returned as an array
  if (!Array.isArray(data.products)) {
    // If the products are inside an object, adjust the path
    // Example: if the products are inside a `data` array, do products.data.map()
    console.log("API response is not an array, check for nested structure 1");
    return [];
  }



  // Generate paths for each product slug
  return data.products.map((product: ProductTypes) => ({
    slug: product.slug,
  }));
}

const ListProductPage = ({ params }: { params: { slug: string } }) => {
  // Pass the productSlug to the client component
  return <ListProductPageBySlug slug={params.slug} />;
};

export default ListProductPage;
