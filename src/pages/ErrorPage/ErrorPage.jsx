import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import errorImg from "../../assets/404/404.gif";

const ErrorPage = () => {
  return (
    <section className="pt-12 pb-28">
      <div className="container">
        <div className="mb-12">
          <Link to="/" className="flex items-center justify-center gap-3">
            <FaArrowLeft className="text-2xl" />
            <span className="text-charcoal text__shadow text-3xl font-normal font-rancho">
              Back to home
            </span>
          </Link>
        </div>

        <div className="">
          <img src={errorImg} className="block w-full" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
