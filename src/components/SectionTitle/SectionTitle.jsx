const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <p className="italic sm:text-xl text-[rgb(217,153,4)]">
        ---{subHeading}---
      </p>
      <div className="divider"></div>
      <h3 className="text-2xl sm:text-4xl mx-12">{heading}</h3>
      <div className="divider"></div>
    </div>
  );
};

export default SectionTitle;
