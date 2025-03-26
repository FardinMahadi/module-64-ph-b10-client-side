import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxios";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { _id, name, category, recipe, price, image } = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: name,
      price: price,
      category: category,
      recipe: recipe,
    },
  });
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      let menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
      };

      // Only upload new image if a file was selected
      if (data.image[0]) {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        if (res.data.success) {
          menuItem.image = res.data.data.display_url;
        }
      } else {
        menuItem.image = image; // Keep existing image
      }

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        console.log(menuRes);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to update the item!",
        footer: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-20 flex flex-col items-center">
      <SectionTitle
        heading="Update Item"
        subHeading="Refresh Info"
      ></SectionTitle>

      <div className="bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-10 p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Recipe Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <span className="text-red-600 mt-1">Recipe name is required</span>
            )}
          </div>

          {/* Category and Price Row */}
          <div className="flex gap-6">
            {/* Category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
              {errors.category && (
                <span className="text-red-600 mt-1">Category is required</span>
              )}
            </div>

            {/* Price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
              {errors.price && (
                <span className="text-red-600 mt-1">Price is required</span>
              )}
            </div>
          </div>

          {/* Recipe Details */}
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-32 w-full"
              placeholder="Recipe Details"
            ></textarea>
            {errors.recipe && (
              <span className="text-red-600 mt-1">
                Recipe details is required
              </span>
            )}
          </div>

          {/* File Input */}
          <div className="form-control w-full max-w-xs">
            <input
              type="file"
              {...register("image", { required: false })}
              className="file-input file-input-bordered w-full"
            />
            <div className="mt-2">
              <p className="text-sm text-gray-500">Current image:</p>
              <img
                src={image}
                alt={name}
                className="w-24 h-24 object-cover mt-1"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white border-0"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Update Recipe Details"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
