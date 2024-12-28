import { Link } from "react-router-dom";
import bannerBG from "../../assets/image/banner-bg.png";

const Banner = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-72"
      style={{ background: `url(${bannerBG})` }}
    >
      <div className="container grid grid-cols-3">
        <div></div>
        <div className="col-span-2">
          <h2 className="text-[55px] font-normal font-rancho text-white mb-4">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-white font-raleway font-normal text-base mb-8">
            It{"'"}s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>

          <Link to="/" className="btn__primary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
