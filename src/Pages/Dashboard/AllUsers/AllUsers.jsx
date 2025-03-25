import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxios";
import { FaTrashAlt, FaUsers, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  // Get axios secure instance
  const axiosSecure = useAxiosSecure();

  // Fetch all users data using tanstack query
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  /**
   * Handle making a user admin
   * @param {Object} user - The user object to be promoted to admin
   */
  const handleMakeAdmin = (user) => {
    // Send PATCH request to update user role
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        // Refetch users to update the UI
        refetch();
        // Show success notification
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  /**
   * Handle deleting a user
   * @param {Object} user - The user object to be deleted
   */
  const handleDeleteUser = (user) => {
    // Show confirmation dialog
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
        // Send DELETE request to remove user
        axiosSecure
          .delete(`/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              // Refetch users to update the UI
              refetch();
              // Show success message
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
            } else {
              // Show error if deletion was not successful
              Swal.fire({
                title: "Error!",
                text: "User could not be deleted.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            // Handle any errors during deletion
            console.error("Error deleting user:", error);
            Swal.fire({
              title: "Error!",
              text: "There was an issue deleting the user.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="flex flex-col items-center">
      {/* Page Title Section */}
      <SectionTitle heading="MANAGE ALL USERS" subHeading="How many??" />

      <div className="w-full max-w-4xl">
        {/* Users Count Display */}
        <h2 className="my-2 text-3xl font-bold font-cinzel">
          Total Users: {users.length}
        </h2>

        {/* Users Table Container */}
        <div className="overflow-x-auto">
          {/* Vertical Scroll Container */}
          <div className="h-[500px] overflow-y-auto">
            <table className="table table-pin-rows table-zebra w-full">
              {/* Table Header */}
              <thead className="bg-[#D1A054] text-white uppercase">
                <tr>
                  <th className="bg-[#D1A054]">#</th>
                  <th className="bg-[#D1A054]">NAME</th>
                  <th className="bg-[#D1A054]">EMAIL</th>
                  <th className="bg-[#D1A054]">ROLE</th>
                  <th className="bg-[#D1A054]">ACTION</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user._id}
                    className="hover:bg-white hover:bg-opacity-5"
                  >
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    {/* Role Column with Conditional Rendering */}
                    <td>
                      {user.role === "admin" ? (
                        <div className="flex items-center gap-2 text-[#D1A054]">
                          <FaUserShield className="text-lg" />
                          <span className="font-medium">Admin</span>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn btn-ghost bg-[#D1A054] text-white"
                        >
                          <FaUsers className="text-lg" />
                        </button>
                      )}
                    </td>
                    {/* Action Column */}
                    <td>
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="btn btn-soft btn-error text-white"
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
    </div>
  );
};

export default AllUsers;
