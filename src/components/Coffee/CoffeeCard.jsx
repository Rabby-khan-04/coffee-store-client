import { Link } from "react-router-dom";
import { MdRemoveRedEye, MdEdit, MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import axios from "axios";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const handleDeleteCoffee = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`/api/v1/coffee/delete/${id}`);
        } catch (error) {
          console.log(error);
        }
        Swal.fire("Coffee Deleted Successfully!", "", "success");

        const updatedCoffees = coffees.filter((coffee) => coffee._id !== id);
        setCoffees(updatedCoffees);
      }
    });
  };

  return (
    <div className="flex items-center justify-between gap-6 bg-cultured py-8 px-12 rounded-xl">
      <div>
        <img src={coffee.photo} className="h-60 inline-block" alt="" />
      </div>

      <div className="grow text-xl font-normal font-raleway text-davys_grey">
        <p>
          <span className="text-eerie_black font-semibold">Name: </span>
          {coffee.name}
        </p>
        <p>
          <span className="text-eerie_black font-semibold">Chef: </span>
          {coffee.chef}
        </p>
        <p>
          <span className="text-eerie_black font-semibold">Price: </span>
          {coffee.price} Taka
        </p>
      </div>
      <div className="text-xl text-white flex flex-col gap-4">
        <Link
          to={`/coffee/${coffee._id}`}
          className="inline-block p-3 rounded-md bg-[#D2B48C]"
        >
          <MdRemoveRedEye />
        </Link>
        <Link
          to={`/update-coffee/${coffee._id}`}
          className="inline-block p-3 rounded-md bg-[#3C393B]"
        >
          <MdEdit />
        </Link>
        <button
          onClick={() => handleDeleteCoffee(coffee._id)}
          className="inline-block p-3 rounded-md bg-[#EA4744]"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func,
};

export default CoffeeCard;
