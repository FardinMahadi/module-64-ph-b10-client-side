import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxios";

const Cart = () => {
  const axiosSecure = useAxiosSecure();

  const [cart, refetch] = useCart();
  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(3);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="mt-10 flex flex-col justify-center max-h-screen">
      <SectionTitle heading="WANNA ADD MORE?" subHeading="My Cart" />
      <div className="font-cinzel flex items-center justify-evenly mb-8">
        <h2 className="text-xl">Items: {cart.length}</h2>
        <h2 className="text-xl">Total Price: ${totalPrice}</h2>
        <button className="btn bg-yellow-500">Pay</button>
      </div>

      <div className="overflow-x-auto">
        <div className="h-[calc(100vh-200px)] overflow-y-auto">
          <table className="table table-pin-rows">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr className="uppercase">
                <th></th>
                <th>Item image</th>
                <th>Item name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => {
                return (
                  <tr key={item._id}>
                    <td>{idx + 1}</td>
                    <td>
                      <img
                        className="aspect-square rounded-md h-16 object-cover"
                        src={item.image}
                        alt={item.name}
                      />
                    </td>
                    <td className="text-xl">{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-sm btn-soft btn-error text-white"
                      >
                        <MdDelete className="text-lg" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
