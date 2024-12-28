import feature1 from "../../assets/icons/feature-1.png";
import feature2 from "../../assets/icons/feature-2.png";
import feature3 from "../../assets/icons/feature-3.png";
import feature4 from "../../assets/icons/feature-4.png";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: feature1,
      title: "Awesome Aroma",
      text: "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      id: 2,
      icon: feature2,
      title: "High Quality",
      text: "We served the coffee to you maintaining the best quality",
    },
    {
      id: 3,
      icon: feature3,
      title: "Pure Grades",
      text: "The coffee is made of the green coffee beans which you will love",
    },
    {
      id: 4,
      icon: feature4,
      title: "Proper Roasting",
      text: "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];

  return (
    <section className="bg-alabaster py-14">
      <div className="container grid grid-cols-4 gap-10">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
