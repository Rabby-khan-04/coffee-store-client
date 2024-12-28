import { Link } from "react-router-dom";
import cup1 from "../../assets/1.png";
import { MdRemoveRedEye, MdEdit, MdDelete } from "react-icons/md";

const CoffeeCard = () => {
  return (
    <div className="flex items-center justify-between gap-6 bg-cultured py-8 px-12 rounded-xl">
      <div>
        <img src={cup1} className="h-60 inline-block" alt="" />
      </div>

      <div className="grow text-xl font-normal font-raleway text-davys_grey">
        <p>
          <span className="text-eerie_black font-semibold">Name: </span>
          Americano Coffee
        </p>
        <p>
          <span className="text-eerie_black font-semibold">Chef: </span>
          Mr. Matin Paul
        </p>
        <p>
          <span className="text-eerie_black font-semibold">Price: </span>
          890 Taka
        </p>
      </div>
      <div className="text-xl text-white flex flex-col gap-4">
        <Link
          to={`/coffee/${""}`}
          className="inline-block p-3 rounded-md bg-[#D2B48C]"
        >
          <MdRemoveRedEye />
        </Link>
        <Link
          to={`/update-coffee/${""}`}
          className="inline-block p-3 rounded-md bg-[#3C393B]"
        >
          <MdEdit />
        </Link>
        <Link to={``} className="inline-block p-3 rounded-md bg-[#EA4744]">
          <MdDelete />
        </Link>
      </div>
    </div>
  );
};

export default CoffeeCard;
