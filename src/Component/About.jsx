

function About() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 px-4">
  {/* Header Section */}
  <div className="text-center mb-8">
    <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
    <p className="text-gray-600 mt-2">Warm, Stylish, and Ready for Winter</p>
  </div>

  {/* About Content */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Side: Image */}
    <div>
      <img
        src="https://via.placeholder.com/500x300" // Replace with your winter clothing image URL
        alt="Winter Clothing"
        className="w-full h-auto rounded-md object-cover shadow-md"
      />
    </div>

    {/* Right Side: Description */}
    <div className="flex flex-col justify-center">
      <h2 className="text-xl font-medium text-gray-800">Our Mission</h2>
      <p className="text-gray-600 mt-4 leading-relaxed">
        Welcome to **[Store Name]**, your ultimate destination for premium winter clothing. Our mission is to keep you warm, comfortable, and stylish during the cold season. From cozy jackets to knitted sweaters and everything in between, we provide a wide range of options designed with quality and care.
      </p>
      <p className="text-gray-600 mt-4 leading-relaxed">
        Every piece in our collection is inspired by the beauty of winter and crafted to help you embrace the season. We focus on sustainable materials, timeless designs, and unbeatable warmth to ensure you stay protected against the elements.
      </p>
    </div>
  </div>

  {/* Values Section */}
  <div className="mt-12">
    <h2 className="text-xl font-medium text-gray-800 text-center">Why Choose Us?</h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Value 1 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
          ❄️
        </div>
        <h3 className="text-lg font-medium text-gray-800">Premium Quality</h3>
        <p className="text-gray-600 mt-2">
          Carefully selected materials to ensure maximum comfort and warmth.
        </p>
      </div>

      {/* Value 2 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
          🌿
        </div>
        <h3 className="text-lg font-medium text-gray-800">Sustainable Fashion</h3>
        <p className="text-gray-600 mt-2">
          Eco-friendly and responsibly crafted to protect the planet.
        </p>
      </div>

      {/* Value 3 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
          🛍️
        </div>
        <h3 className="text-lg font-medium text-gray-800">Wide Selection</h3>
        <p className="text-gray-600 mt-2">
          From cozy essentials to stylish winter wear for all occasions.
        </p>
      </div>
    </div>
  </div>

  {/* Call to Action */}
  <div className="text-center mt-12">
    <p className="text-gray-600">Ready to upgrade your winter wardrobe?</p>
    <button className="mt-4 px-6 py-3 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700">
      Shop Now
    </button>
  </div>
</div>

  )
}

export default About