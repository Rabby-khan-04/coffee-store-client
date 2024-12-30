import { Link, NavLink } from "react-router-dom";
import headerBG from "../../assets/image/header_bg.jpg";
import logo from "../../assets/image/logo.png";

const Header = () => {
  return (
    <header>
      <div
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
      </div>
      <div className="py-4">
        <div className="container">
          <ul className="flex items-center justify-center gap-6 font-raleway text-sm font-semibold text-eerie_black divide-x divide-eerie_black">
            <li className="py-3 px-4">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="py-3 px-4">
              <NavLink to="/add-coffee">Add Coffee</NavLink>
            </li>
            <li className="py-3 px-4">
              <NavLink to="/users">Users</NavLink>
            </li>
            <li className="py-3 px-4">
              <NavLink to="/signup">Signup</NavLink>
            </li>
            <li className="py-3 px-4">
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
