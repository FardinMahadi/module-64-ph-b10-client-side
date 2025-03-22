import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import bgImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section
      className="featured-item relative py-10 bg-cover bg-center bg-fixed flex items-center justify-center mb-20"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="z-10 flex flex-col items-center justify-center gap-4 w-10/12 mx-auto">
        <SectionTitle
          heading={"Featured Items"}
          subHeading={"Check it out"}
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-12 gap-5">
          <img src={bgImg} />
          <div>
            <p className="text-2xl">
              {new Date().toLocaleString("default", { month: "long" })}{" "}
              {new Date().getDate()}, {new Date().getFullYear()}
            </p>
            <h6 className="text-2xl">WHERE CAN I GET SOME?</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-ghost hover:bg-transparent mt-8 p-2 px-6 rounded-md border-x-0 border-t-0 border-b-4 border-black dark:border-white dark:hover:border-gray-400">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
