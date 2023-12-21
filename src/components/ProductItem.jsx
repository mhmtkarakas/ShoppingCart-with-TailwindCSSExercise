const ProductItem = ({ product, setCart, cart }) => {
  const findProduct = cart.find((item) => item.id === product.id);
  const addToCart = (product) => {
    //  setCart([...cart, product]);
    setCart((prevState) => [...prevState, product]);
  };

  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        // eslint-disable-next-line react/prop-types
        src={product.image}
        alt="product image"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold ">{product.name}</h2>

        <p className="text-gray-600 my-2 font-semibold">{product.price} TL</p>
        <button
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full ${findProduct && "opacity-50 cursor-no-drop"}`}
          onClick={() => addToCart(product)}
          disabled={findProduct}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
