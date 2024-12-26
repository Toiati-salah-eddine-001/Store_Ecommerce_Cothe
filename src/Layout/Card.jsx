import { useDispatch } from "react-redux";

function Card({ product , handelAddtopanier }) {
  const dispatch = useDispatch()
  // const handeladdtopanier = (id) => {
  //   handelAddtopanier(id)
  // };
  console.log(product);
  return (

    <div className="group flex flex-col gap-3 pb-3">
    {/* Image Section */}
    <div className="relative aspect-[3/4]">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full rounded-xl object-cover transition-transform group-hover:scale-105"
      />
    </div>

    {/* Grid Layout Inside Card */}
    <div className="bg-white group-hover:bg-[#F5F1E8] p-4 rounded-xl transition-colors grid gap-3 grid-cols-[1fr]">
      <div>
        <p className="text-[#1C160C] text-base font-medium leading-normal">
          {product.name}
        </p>
      </div>
      <div>
        <p className="text-[#A18249] text-sm font-normal leading-normal">
          {product.price}
        </p>
      </div>
      {/* Additional Info in Grid */}
      <div className="text-[#A18249] text-sm font-normal leading-normal">
        <span>Available Stock: {product.stock}</span>
      </div>
      <div>
        <button className="rounded-full bg-[#019863] text-white px-4 py-1 text-sm font-medium" onClick={()=>handelAddtopanier(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  );
}

export default Card;
