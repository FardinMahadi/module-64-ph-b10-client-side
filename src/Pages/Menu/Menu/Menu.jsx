import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBannerImg from "../../../assets/menu/banner3.jpg";
import dessertsImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import soupsImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        bgImg={menuBannerImg}
        heading="OUR MENU"
        subHeading="Would you like to try a dish?"
      ></Cover>
      <div className="flex flex-col items-center mt-20">
        <SectionTitle
          heading={"TODAY'S OFFER"}
          subHeading={"Don't miss"}
        ></SectionTitle>
        <MenuCategory menu={offered}></MenuCategory>
      </div>
      <Cover
        bgImg={dessertsImg}
        heading="DESSERTS"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <MenuCategory menu={desserts}></MenuCategory>
      <Cover
        bgImg={pizzaImg}
        heading="PIZZA"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <MenuCategory menu={pizza}></MenuCategory>
      <Cover
        bgImg={saladsImg}
        heading="SALADS"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <MenuCategory menu={salads}></MenuCategory>
      <Cover
        bgImg={soupsImg}
        heading="SOUPS"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <MenuCategory menu={soups}></MenuCategory>
    </div>
  );
};

export default Menu;
