import axios from "axios";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const { data } = useLoaderData();
  const [users, setUsers] = useState(data.data);

  const handleDeleteUser = async (id) => {
    const response = await axios.delete(`/api/v1/users/user/${id}`);

    if (response.data.data.deletedCount > 0) {
      const newUser = users.filter((user) => user._id !== id);
      setUsers(newUser);
      Swal.fire("success", "User Deleted Successfully");
    }
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-center">
              <tr>
                <th></th>
                <th>Email</th>
                <th>Created At</th>
                <th>last Sign In Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {users.map((user, idx) => (
                <tr className="hover" key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>{user?.lastSignInTime}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="inline-block p-3 rounded-md bg-[#EA4744] text-white text-2xl"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Users;
