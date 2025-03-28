export async function getProductApi(limit?: number, category?: string) {
  if(!category) {
    category = "smartphones"
  }
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}${
        limit ? `?limit=${limit}` : ""
      }`
    );
    const data = await response.json()
    return  data.products
  } catch (error) {
    console.log(error);
    return
  }
}