const FoodCart = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden">
      <figure>
        <img src={image} alt={name} className="w-full h-48 object-cover " />
        <p className="absolute top-2 right-2 bg-gray-800 text-gray-200 px-3 py-1 rounded-md">
          ${price}
        </p>
      </figure>
      <div className="card-body flex flex-col items-center gap-4 p-4 bg-gray-200 dark:bg-gray-800">
        <h2 className="card-title text-lg font-bold">{name}</h2>
        <p className="text-center">{recipe}</p>

        <button className="btn btn-ghost bg-gray-700 border-t-0 border-x-0 border-b-2 border-yellow-600 hover:bg-gray-800 hover:text-yellow-400">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
