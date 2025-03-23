import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import coverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import FoodCart from "../../../components/FoodCart/FoodCart";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        bgImg={coverImg}
        heading={"Our shop"}
        subHeading={"Would you like to try a dish"}
      />

      <div className="flex flex-col items-center justify-center my-20 w-10/12 mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex gap-10 mb-10 items-center justify-center">
            <Tab
              className={`uppercase font-semibold pb-2 ${
                tabIndex === 0
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }`}
            >
              Salad
            </Tab>
            <Tab
              className={`uppercase font-semibold pb-2 ${
                tabIndex === 1
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }`}
            >
              Pizza
            </Tab>
            <Tab
              className={`uppercase font-semibold pb-2 ${
                tabIndex === 2
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }`}
            >
              Soups
            </Tab>
            <Tab
              className={`uppercase font-semibold pb-2 ${
                tabIndex === 3
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }`}
            >
              Desserts
            </Tab>
            <Tab
              className={`uppercase font-semibold pb-2 ${
                tabIndex === 4
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }`}
            >
              Drinks
            </Tab>
          </TabList>

          <TabPanel
            className={`transition-opacity duration-300 ease-in-out ${
              tabIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <OrderTab items={salads}></OrderTab>
          </TabPanel>

          <TabPanel
            className={`transition-opacity duration-300 ease-in-out ${
              tabIndex === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>

          <TabPanel
            className={`transition-opacity duration-300 ease-in-out ${
              tabIndex === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <OrderTab items={soups}></OrderTab>
          </TabPanel>

          <TabPanel
            className={`transition-opacity duration-300 ease-in-out ${
              tabIndex === 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <OrderTab items={desserts}></OrderTab>
          </TabPanel>

          <TabPanel
            className={`transition-opacity duration-300 ease-in-out ${
              tabIndex === 4 ? "opacity-100" : "opacity-0"
            }`}
          >
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
