import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Details from "../Details/Details";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Details></Details>
      <PopularMenu></PopularMenu>
      {/* call section */}
      <section className="text-center py-16 bg-black text-white text-3xl font-mono w-10/12 mx-auto my-12">
        <h3>Call Us: +88 0192345678910</h3>
      </section>
    </div>
  );
};

export default Home;
