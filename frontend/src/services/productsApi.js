import { products as demoProducts } from '../data/products'

// Add VITE_PRODUCTS_API=http://localhost/your-project/api/products.php to .env
// The PHP endpoint should return a JSON array with id, name, category, price, image and specs.
export async function getProducts() {
  const endpoint = import.meta.env.VITE_PRODUCTS_API
  if (!endpoint) return demoProducts

  const response = await fetch(endpoint)
  if (!response.ok) throw new Error('Could not load products')
  return response.json()
}
