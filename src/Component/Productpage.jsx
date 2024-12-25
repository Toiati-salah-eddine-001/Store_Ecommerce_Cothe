

function Productpage() {
  return (
    <>


  

{/* <div className="w-[1000px] bg-gray-50 rounded-xl p-6 shadow-md m-auto">
  <div className="grid grid-cols-3 gap-4">

    <div className="col-span-1 flex flex-col gap-4">
      <img src="https://cdn.usegalileo.ai/sdxl10/b49eaa09-03f7-4e8c-8775-0255fbbb48e4.png" alt="Image 1" className="w-full aspect-square rounded-md object-cover" />
      <img src="https://cdn.usegalileo.ai/sdxl10/f9b21541-557d-4fa6-a086-dd2f4fa7bda5.png" alt="Image 2" className="w-full aspect-square rounded-md object-cover" />
    </div>


    <div className="col-span-1 flex items-center justify-center ">
      <img src="https://cdn.usegalileo.ai/sdxl10/a2576afe-47c9-4543-8600-d43f01792cf2.png" alt="Large Image" className="w-full h-full rounded-md object-cover" />
    </div>


    <div className="col-span-1 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4">Description Of Web Product</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md">-</button>
        <span className="text-lg font-medium">Qte</span>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md">+</button>
      </div>
      <div className="mt-4">
        <p className="text-lg font-bold">PRICE</p>
      </div>
    </div>
  </div>
</div> */}





<div className="w-[1000px] bg-gray-50 rounded-xl p-6 shadow-md m-auto">
  <div className="grid grid-cols-3 gap-4">

    {/* Left Column: Smaller Images */}
    <div className="col-span-1 flex flex-col gap-4">
      <img src="https://cdn.usegalileo.ai/sdxl10/b49eaa09-03f7-4e8c-8775-0255fbbb48e4.png" alt="Image 1" className="w-full aspect-square rounded-md object-cover" />
      <img src="https://cdn.usegalileo.ai/sdxl10/f9b21541-557d-4fa6-a086-dd2f4fa7bda5.png" alt="Image 2" className="w-full aspect-square rounded-md object-cover" />
    </div>

    {/* Center Column: Large Image */}
    <div className="col-span-1 flex items-center justify-center">
      <img src="https://cdn.usegalileo.ai/sdxl10/a2576afe-47c9-4543-8600-d43f01792cf2.png" alt="Large Image" className="w-full h-full rounded-md object-cover" />
    </div>

    {/* Right Column: Product Details */}
    <div className="col-span-1 flex flex-col justify-between p-4 h-[70%]">
      {/* Product Description */}
      <div>
        <h2 className="text-xl font-bold mb-2" >Description Of Web Product</h2>
        <p className="text-sm text-gray-600">
          This is a high-quality web product designed to meet your needs. Featuring durable materials, sleek design, 
          and unmatched performance, it offers everything you need for your projects. Whether you're a professional or a beginner, 
          this product ensures ease of use and excellent results. Get yours today and take your experience to the next level!
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-4 mt-0">
        <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md">-</button>
        <span className="text-lg font-medium">Qte</span>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md">+</button>
      </div>

      {/* Price */}
      <div className="mt-2">
        <p className="text-lg text-gray-700">$215</p>
      </div>

      {/* Add to Panier Button */}
      <div className="mt-3">
        <button className="w-full h-10 flex items-center justify-center bg-green-500 text-white rounded-md">
          Add to Panier
        </button>
      </div>
    </div>
  </div>
</div>



  


</>
  

  )
}

export default Productpage