import { Link } from "react-router-dom";
import headerBG from "../../assets/image/header_bg.jpg";
import logo from "../../assets/image/logo.png";

const Header = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat p-4"
      style={{ background: `url(${headerBG})` }}
    >
      <div className="container">
        <Link to="/" className="flex items-center justify-center gap-4">
          <span>
            <img src={logo} className="inline-block h-[90px]" alt="logo" />
          </span>
          <h2 className="text-6xl font-rancho font-normal text-white">
            Espresso Emporium
          </h2>
        </Link>
      </div>
    </section>
  );
};

export default Header;
