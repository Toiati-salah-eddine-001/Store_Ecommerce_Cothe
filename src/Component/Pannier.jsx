

function Pannier() {
  return (
    <div className="w-full mt-8 px-4 max-w-7xl mx-auto">
  {/* Product Row */}
  <div className="flex items-center justify-between border-b pb-4">
    {/* Product Info */}
    <div className="flex items-center">
      <img
        src="https://via.placeholder.com/50" // Replace with your product image URL
        alt="Product Thumbnail"
        className="w-12 h-12 rounded-md object-cover mr-4"
      />
      <div>
        <h3 className="text-lg font-medium text-gray-800">Product Name</h3>
        <p className="text-sm text-gray-500">Price: $XX.XX</p>
      </div>
    </div>

    {/* Quantity Controls */}
    <div className="flex items-center">
      <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full">
        -
      </button>
      <span className="mx-4 text-gray-800 text-lg">1</span>
      <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full">
        +
      </button>
    </div>
  </div>

  {/* Total Price */}
  <div className="text-center mt-6">
    <p className="text-lg font-medium text-gray-800">Total Price: $XX.XX</p>
  </div>
</div>

  )
}

export default Pannier