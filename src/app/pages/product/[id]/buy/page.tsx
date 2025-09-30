


type Props = {
  price?: number;
};

export default function ProductBuy({ price = 0 }: Props) {
  return (
    <aside className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-4 border border-gray-100 items-center">
      <h2 className="text-lg font-semibold text-gray-800">Покупка</h2>

      <p className="text-2xl font-bold text-green-600">${price}</p>

      <div className="flex flex-col gap-2">
        <button className="w-40 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
          Купить сейчас
        </button>
        <button className="w-40 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 rounded-lg transition">
          В корзину
        </button>
      </div>

      <div className="text-sm text-gray-500 space-y-1 text-center">
        <p>🚚 Доставка 2–5 дней</p>
        <p>🔒 Гарантия возврата</p>
      </div>
    </aside>
  );
}
