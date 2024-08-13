import PopularProductsCard from "../componants/PopularProductsCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <div>
     <section id="products"
     className="max-container max-sm:mt-12">
   <div className="flex flex-col justify-start gap-5">
<h2 className="text-4xl font-palanquin font-bold">
Our <span className="text-coral-red">Best-Selling </span> Collection
</h2>
<p className="lg:max-w-lg font-montserrat text-slate-gray leading-8 mt-2 mb-14 sm:max-w-sm">Discover the Most Popular Products
Loved by Customers Worldwide for Quality,Value, and Exceptional Performance</p> 
   </div>

   <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
  {products.map((product)=>(
    <PopularProductsCard key={product.name} {...product}  /> 
    
  ))}
</div>

     </section>
    </div>
  )
}

export default PopularProducts
