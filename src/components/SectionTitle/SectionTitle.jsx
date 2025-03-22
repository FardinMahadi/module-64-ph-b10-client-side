const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <p className="italic sm:text-xl text-[rgb(217,153,4)] capitalize">
        ---{subHeading}---
      </p>
      <div className="divider "></div>
      <h3 className="text-5xl sm:text-4xldivider-neutral mx-12 uppercase">
        {heading}
      </h3>
      <div className="divider"></div>
    </div>
  );
};

export default SectionTitle;
