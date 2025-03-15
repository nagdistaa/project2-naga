import { IProduct } from "../interfaces";
import textSlicer from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface Iprops {
product : IProduct
}

const ProductCard = ({ product}: Iprops) => {
    return (
        <div className="max-w-sm md:max-w-lg  mx-auto border rounded-md p-2 flex flex-col">
          <Image imageUrl={product.imageURL} alt="product image" className="rounded-md mb-2" />

            <h3>{product.title}</h3>
            <p>{textSlicer(product.description,50)}</p>

            <div className="flex items-center my-4">
                <span className="w-5 h-5 bg-indigo-600 rounded-full space-x-5  cursor-pointer mr-2" />
                <span className="w-5 h-5 bg-yellow-600 rounded-full space-x-5 cursor-pointer mr-2" />
                <span className="w-5 h-5 bg-red-600 rounded-full space-x-5 cursor-pointer mr-2" />
            </div>

            <div className="flex justify-between items-center">
                <span>$500</span>

                <Image imageUrl="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png" alt="product image" className="w-10 h-10 rounded-full object-center"/>
            </div>


            <div className="flex justify-between items-center gap-4 mt-5">
             <Button className="bg-indigo-700" 
             width="w-full"
             >Add</Button>
             <Button className="bg-red-500">remove</Button>
            </div>
        </div>
    )
}

export default ProductCard; 