import ProductCard from "./components/ProductCard"
import { productList } from "./data"
function App() {

  const renderProductList = productList.map(product=>{
    return <ProductCard key={product.id} product={product}/>
  })

  return (
    <main className="container mx-auto">
    <div className="border-2 m-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {renderProductList}
    </div>
    </main>
  )
}

export default App
