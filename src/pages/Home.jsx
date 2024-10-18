function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">Welcome to Our Shop</h1>
                    <p className="text-lg text-gray-200 mt-4">Discover amazing products at great prices</p>
                    <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500">Shop Now</button>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center mb-8">Featured Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Product Card */}
                        <div className="bg-white p-4 shadow-md rounded-lg">
                            <img src="https://via.placeholder.com/300" alt="Product 1" className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-lg font-semibold">Product Name</h3>
                            <p className="mt-2 text-gray-600">$29.99</p>
                            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">Add to Cart</button>
                        </div>
                        {/* Repeat for more products */}
                        <div className="bg-white p-4 shadow-md rounded-lg">
                            <img src="https://via.placeholder.com/300" alt="Product 2" className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-lg font-semibold">Product Name</h3>
                            <p className="mt-2 text-gray-600">$39.99</p>
                            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">Add to Cart</button>
                        </div>
                        <div className="bg-white p-4 shadow-md rounded-lg">
                            <img src="https://via.placeholder.com/300" alt="Product 3" className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-lg font-semibold">Product Name</h3>
                            <p className="mt-2 text-gray-600">$19.99</p>
                            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">Add to Cart</button>
                        </div>
                        <div className="bg-white p-4 shadow-md rounded-lg">
                            <img src="https://via.placeholder.com/300" alt="Product 4" className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-lg font-semibold">Product Name</h3>
                            <p className="mt-2 text-gray-600">$49.99</p>
                            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promotional Banner */}
            <section className="bg-blue-600 py-12">
                <div className="container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl font-semibold">Limited Time Offer!</h2>
                    <p className="mt-4 text-lg">Get 20% off on all products. Use code: SAVE20</p>
                    <button className="mt-6 px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100">Shop Now</button>
                </div>
            </section>
        </div>
    )
}

export default Home;