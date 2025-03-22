import bgImg from "../../../assets/home/chef-service.jpg";

const Details = () => {
  return (
    <section
      className="sm:w-10/12 mx-auto py-10 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="relative flex items-center justify-center bg-white bg-opacity-75 text-black text-center w-10/12 mx-auto py-10">
        <div className="w-2/3 flex flex-col items-center justify-center">
          <h3 className="text-5xl font-mono">Bistro Boss</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
