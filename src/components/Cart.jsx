const Cart = ({ cart, emptyCart }) => {
  const total = cart.reduce((acc,item)=>acc+item.price,0);

  if (cart.length === 0) return;
  return (
    <div className="border w-64 ml-auto p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="mt-2 flex justify-between">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl">Toplam: {total} TL</p>
      <button
        className="bg-red-500 w-full text-white px-4 py-2 rounded hover:bg-red-600 mt-4 transition-all"
        onClick={emptyCart}
      >
        Sepeti Bosalt
      </button>
    </div>
  );
};

export default Cart;
