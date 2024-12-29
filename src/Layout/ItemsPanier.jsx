

function ItemsPanier({item, AddQuantite , MinceProduct ,DeleteProductPanier}) {
    console.log(item)
    console.log(typeof AddQuantite)
    // const {DeleteProductPanier}=ActionOperation;
    // const Add=(itemP)=>{
    //     AddQuantite(itemP);  
    // }
  return (
    <>
    <div className="flex items-center justify-between border-b pb-4">
    {/* Product Info */}
    <div className="flex items-center">
      <img
        src={item.img} // Replace with your product image URL
        alt="Product Thumbnail"
        className="w-12 h-12 rounded-md object-cover mr-4"
      />
      <div>
        <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.price} $</p>
      </div>
    </div>

    {/* Quantity Controls */}
    <div className="flex items-center">
      <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full"
    onClick={()=>MinceProduct(item)}
      >
        -
      </button>
      <span className="mx-4 text-gray-800 text-lg">{item.qte} </span>
      <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full"
      onClick={()=>AddQuantite(item)}
      >
        +
      </button>
      <button className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full ml-4" 
      onClick={()=>DeleteProductPanier(item)}
      >
        ×
      </button>
    </div>
  </div>




  </>
  )
}

export default ItemsPanier