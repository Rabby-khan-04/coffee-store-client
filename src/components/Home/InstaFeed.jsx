import cup1 from "../../assets/cups/cup-1.png";
import cup2 from "../../assets/cups/cup-2.png";
import cup3 from "../../assets/cups/cup-3.png";
import cup4 from "../../assets/cups/cup-4.png";
import cup5 from "../../assets/cups/cup-5.png";
import cup6 from "../../assets/cups/cup-6.png";
import cup7 from "../../assets/cups/cup-7.png";
import cup8 from "../../assets/cups/cup-8.png";

const InstaFeed = () => {
  const cups = [cup1, cup2, cup3, cup4, cup5, cup6, cup7, cup8];
  return (
    <section className="py-28">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-eerie_black font-raleway text-xl mb-2">
            --- Follow Us Now ---
          </p>
          <h2 className="text-[55px] text-dark_sienna font-rancho font-normal mb-4 text__shadow">
            Follow on Instagram
          </h2>
        </div>

        {/* Insta Feed Container */}
        <div className="grid grid-cols-4 gap-6">
          {cups.map((cup, idx) => (
            <img src={cup} alt="" key={idx} className="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaFeed;
