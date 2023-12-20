const Cart = () => {
  return (
    <div className="border w-64 ml-auto p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
      <ul>
        <li className="mt-2 flex justify-between">
          <span>Urun 1</span>
          <span>100 TL</span>
        </li>
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl">Toplam: 100 TL</p>
      <button className="bg-red-500 w-full text-white px-4 py-2 rounded hover:bg-red-600 mt-4 transition-all">Sepeti Bosalt</button>
    </div>
  );
};

export default Cart;
