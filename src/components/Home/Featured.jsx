import cup from "../../assets/image/feaured-cup.png";
import shop from "../../assets/image/featured-shop.png";
import { Link } from "react-router-dom";
import { TbMug } from "react-icons/tb";
import CoffeeCard from "../Coffee/CoffeeCard";

const Featured = () => {
  return (
    <section className="pt-28 relative">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-eerie_black font-raleway text-xl mb-2">
            --- Sip & Savor ---
          </p>
          <h2 className="text-[55px] text-dark_sienna font-rancho font-normal mb-4 text__shadow">
            Our Popular Products
          </h2>

          <Link to="/add-coffee" className="btn__secondary">
            <div className="flex items-center justify-center gap-[10px]">
              <span className="text__shadow">Add Coffee</span>
              <TbMug className="text-dark_sienna" />
            </div>
          </Link>
        </div>

        {/* Coffee Container */}
        <div className="grid grid-cols-2 gap-6">
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </div>

      <img src={cup} className="absolute top-32 left-0 -z-10" alt="" />
      <img src={shop} className="absolute bottom-0 right-0 -z-10" alt="" />
    </section>
  );
};

export default Featured;
