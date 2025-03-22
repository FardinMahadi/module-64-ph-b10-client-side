import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-8">
      <p className="text-lg sm:text-xl text-[rgb(217,153,4)] capitalize mb-2">
        ---{subHeading}---
      </p>
      <div className="divider"></div>
      <h2 className="text-3xl sm:text-4xl font-bold divider-neutral mx-12 uppercase">
        {heading}
      </h2>
      <div className="divider"></div>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired
};

export default SectionTitle;
