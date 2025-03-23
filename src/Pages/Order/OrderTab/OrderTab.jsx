import FoodCart from "../../../components/FoodCart/FoodCart";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => (
        <FoodCart key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
