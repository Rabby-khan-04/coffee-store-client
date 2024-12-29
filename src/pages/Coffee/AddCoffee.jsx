import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import addCoffeeBG from "../../assets/image/add-coffee-bg.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const AddCoffee = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addCoffee = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, key === "photo" ? value[0] : value);
      });

      const response = await axios.post(
        "http://localhost:5000/api/v1/coffee/add-coffee",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setLoading(false);
      console.log(response);

      Swal.fire({
        title: "Success!!",
        text: "Coffee Added Successfully!",
        icon: "success",
      });
      reset();
    } catch (error) {
      setLoading(false);
      console.error(
        `ERROR: ${error.response ? error.response.data : error.message}`
      );
    }
  };

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
        <div className="bg-anti_flash_white rounded-md py-20 px-28">
          <div className="text-center">
            <h1 className="text__shadow font-rancho text-charcoal text-5xl font-normal m-8">
              Add New Coffee
            </h1>
            <p className="font-raleway text-eerie_black/70 text-lg font-normal mb-8">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>

          {/* Form */}

          <form onSubmit={handleSubmit(addCoffee)} className="space-y-4">
            <div className="flex items-center gap-6">
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input block w-full"
                  placeholder="Enter coffee name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="chef">
                  Chef
                </label>
                <input
                  type="text"
                  id="chef"
                  className="input block w-full"
                  placeholder="Enter coffee chef"
                  {...register("chef", { required: true })}
                />
                {errors.chef && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="supplier">
                  Supplier
                </label>
                <input
                  type="text"
                  id="supplier"
                  className="input block w-full"
                  placeholder="Enter coffee supplier"
                  {...register("supplier", { required: true })}
                />
                {errors.supplier && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="taste">
                  Taste
                </label>
                <input
                  type="text"
                  id="taste"
                  className="input block w-full"
                  placeholder="Enter coffee taste"
                  {...register("taste", { required: true })}
                />
                {errors.taste && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="category">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  className="input block w-full"
                  placeholder="Enter coffee category"
                  {...register("category", { required: true })}
                />
                {errors.category && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="details">
                  Details
                </label>
                <input
                  type="text"
                  id="details"
                  className="input block w-full"
                  placeholder="Enter coffee details"
                  {...register("details", { required: true })}
                />
                {errors.details && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="price">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="input block w-full"
                  placeholder="Enter coffee price"
                  {...register("price", { required: true })}
                />
                {errors.details && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="photo">
                  Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  defaultValue=""
                  className="file-input block w-full"
                  placeholder="Enter photo URL"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="submit__btn text__shadow w-full cursor-pointer"
            >
              <div className="flex items-center justify-center gap-4">
                <span>Add Coffee</span>
                {loading && (
                  <span className="loading loading-spinner loading-md text-dark_sienna"></span>
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCoffee;
