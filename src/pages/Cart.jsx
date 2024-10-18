import { useState } from 'react';
function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
    console.log(cart);

    const decrementQuantity = (productId) => {
        const updatedCart = cart.map(product => {
            if (product.id === productId) {
                return {...product, quantity: product.quantity - 1};
            } else {
                return product;
            }
        });

        setCart(updatedCart);
    };

    const incrementQuantity = (productId) => {
        const updatedCart = cart.map(product => {
            if (product.id === productId) {
                return {...product, quantity: product.quantity + 1};
            } else {
                return product;
            }
        });

        setCart(updatedCart);
    };

    const deleteProduct = (productId) => {
        const filteredProducts = cart.filter(product => product.id !== productId);

        setCart(filteredProducts);
    };

    return (
        <div>
            <h1 className="text-3xl text-black text-center my-4">Cart</h1>

            {cart.length > 0 ? (
                <div>
                    {cart.map(product => (
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 flex items-start mb-2">
                            {/* Product Image */}
                            <div className="w-1/4">
                                <img
                                    src={product.imgSrc}
                                    alt="Product"
                                    width="150px"
                                    className="rounded-md h-40"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="w-2/4 pl-6">
                                <div className="flex justify-between items-start">
                                    {/* Product Name and Rating */}
                                    <div>
                                        <h2 className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer">
                                            {product.name}
                                        </h2>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <div className="bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded">
                                                4.4 ★
                                            </div>
                                            <p className="text-sm text-gray-500">38,851 Ratings & 2,756 Reviews</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="mt-2 text-lg text-bold">{product.price}</p>
                                    {/* <button className="bg-blue-500 text-white px-3 py-2 rounded" onClick={() => addToCart(index)}>Add to Cart</button> */}
                                </div>
                            </div>

                            <div className='w-1/4'>
                                <div className="flex items-center space-x-4">
                                    <button onClick={() => decrementQuantity(product.id)} disabled={product.quantity === 1}
                                        className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l focus:outline-none hover:bg-gray-400"
                                    >
                                        -
                                    </button>
                                    <span className="text-lg font-semibold">{product.quantity}</span>
                                    <button onClick={() => incrementQuantity(product.id)}
                                        className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r focus:outline-none hover:bg-gray-400"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Delete icon */}
                                <button onClick={() => deleteProduct(product.id)}
                                    className="text-white bg-red-600 px-3 py-2 rounded mt-4 hover:bg-red-800 focus:outline-none"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='text-center my-6'>
                    <img src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' className='w-48 mx-auto' />

                    <h3 className='text-lg text-black my-3'>Missing Cart items?</h3>
                </div>
            )}


        </div>
    )
}

export default Cart;