import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ menu }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <div className="sm:w-10/12 mx-auto m-20 grid grid-cols-1 sm:grid-cols-2 w-full gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${menu[0]?.category}`}>
        <button className="mt-8 p-2 px-6 rounded-md border-b-4 border-black dark:border-white dark:hover:border-gray-400 uppercase">
          Order your favorite food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
