import { Parallax } from "react-parallax";

const Cover = ({ bgImg, heading, subHeading }) => {
  return (
    <Parallax
      blur={{ min: -5, max: 5 }}
      bgImage={bgImg}
      bgImageAlt="the cat"
      strength={200}
    >
      <div className="h-[700px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center font-cinzel text-white bg-black bg-opacity-50 w-10/12 h-1/2 px-10">
          <h1 className="mb-5 font-bold uppercase text-7xl">{heading}</h1>
          <p className="mb-5 text-2xl text-center">{subHeading}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
