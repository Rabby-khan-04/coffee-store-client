import { Link, useLoaderData } from "react-router-dom";
import addCoffeeBG from "../../assets/image/add-coffee-bg.png";
import { FaArrowLeft } from "react-icons/fa6";

const Coffee = () => {
  const { data } = useLoaderData();
  return (
    <section
      className="pt-12 pb-28 bg-cover bg-center bg-no-repeat"
      style={{ background: `url(${addCoffeeBG})` }}
    >
      <div className="container">
        <div className="mb-12">
          <Link to="/" className="flex items-center gap-3">
            <FaArrowLeft className="text-2xl" />
            <span className="text-charcoal text__shadow text-3xl font-normal font-rancho">
              Back to home
            </span>
          </Link>
        </div>
        <div className="bg-anti_flash_white rounded-md py-20 px-40 flex items-center gap-6">
          <div>
            <img
              src={data.data.photo}
              className="inline-block h-[455px]"
              alt=""
            />
          </div>
          <div className="grow text-xl font-normal font-raleway text-davys_grey space-y-3">
            <h2 className="text-4xl font-rancho text-dark_sienna text__shadow">
              Niceties
            </h2>
            <p>
              <span className="text-eerie_black font-semibold">Name: </span>
              {data.data.name}
            </p>
            <p>
              <span className="text-eerie_black font-semibold">Chef: </span>
              {data.data.chef}
            </p>
            <p>
              <span className="text-eerie_black font-semibold">Supplier: </span>
              {data.data.supplier}
            </p>
            <p>
              <span className="text-eerie_black font-semibold">Taste: </span>
              {data.data.taste}
            </p>
            <p>
              <span className="text-eerie_black font-semibold">Category: </span>
              {data.data.category}
            </p>
            <p>
              <span className="text-eerie_black font-semibold">Price: </span>
              {data.data.price} Taka
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coffee;
