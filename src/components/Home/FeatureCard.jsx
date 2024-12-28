import PropTypes from "prop-types";

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div>
      <img className="inline-block size-20 mb-4" src={icon} alt={title} />
      <h3 className="text-dark_sienna text-4xl font-rancho font-normal mb-2">
        {title}
      </h3>
      <p className="text-eerie_black font-raleway font-normal text-base">
        {text}
      </p>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default FeatureCard;
