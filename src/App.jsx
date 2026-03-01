function App() {
  const products = [
    { id: 1, name: "Minimal Sneakers", price: 89, image: "https://picsum.photos/300?1" },
    { id: 2, name: "Classic Hoodie", price: 59, image: "https://picsum.photos/300?2" },
    { id: 3, name: "Modern Watch", price: 199, image: "https://picsum.photos/300?3" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyShop</h1>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Cart (0)
        </button>
      </nav>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">${product.price}</p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;