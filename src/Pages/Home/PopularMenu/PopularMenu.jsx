import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="sm:w-10/12 mx-auto mt-20 flex flex-col items-center justify-center mb-12">
      <div className="text-center mb-12">
        <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="mt-8 p-2 px-6 rounded-md border-b-4 border-black dark:border-white dark:hover:border-gray-400">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
