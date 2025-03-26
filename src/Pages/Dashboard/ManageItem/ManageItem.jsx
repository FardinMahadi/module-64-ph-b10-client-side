import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxios";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleUpdateItem = (item) => {
    console.log(item._id);
  };

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/menu/${item._id}`);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${item.name} has been deleted`,
              icon: "success",
            });
          }
        } catch (err) {
          console.log(err);
        }
      }
    });
  };

  return (
    <div className="flex flex-col items-center w-full px-4">
      <SectionTitle
        heading="MANAGE ALL ITEMS"
        subHeading="Hurry Up!"
      ></SectionTitle>

      <div className="w-full p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 font-cinzel">
          TOTAL ITEMS: {menu.length}
        </h2>

        <div className="overflow-x-auto max-h-[calc(100vh-200px)] w-full">
          <table className="table w-[800px] min-w-full table-pin-rows">
            {/* head */}
            <thead className="">
              <tr className="bg-[#D1A054] text-white uppercase">
                <th className="py-4">#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>Update</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id} className="border-b">
                  <td className="py-2">{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-16 h-16 rounded-md">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <Link to={`/dashboard/update-item/${item._id}`}>
                      <button
                        onClick={() => handleUpdateItem(item)}
                        className="btn btn-soft btn-warning p-3 rounded text-white"
                      >
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-soft btn-error p-3 rounded text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
