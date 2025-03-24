import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";

const FoodCart = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post(`/carts`, cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location.pathname } });
        }
      });
    }
  };

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

        <button
          onClick={handleAddToCart}
          className="btn btn-ghost bg-gray-700 border-t-0 border-x-0 border-b-2 border-yellow-600 hover:bg-gray-800 hover:text-yellow-400"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
