import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions/contact";
import { useNavigate } from "react-router-dom";

const CreateContact = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    id: null,
    firstName: "",
    lastName: "",
    status: false,
  });
  const dispatch = useDispatch();

  const handleSaveContact = () => {
    dispatch(addContact({ ...contact, id: new Date().getTime() }));
    setContact({
      id: null,
      firstName: "",
      lastName: "",
      status: false,
    });
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto  p-8  rounded-md">
      <div className="mb-6">
        <label
          htmlFor="firstName"
          className="block mb-2 text-lg font-medium text-gray-800"
        >
          First Name:
        </label>
        <input
          id="firstName"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          value={contact.firstName}
          onChange={(e) =>
            setContact({ ...contact, firstName: e.target.value })
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="lastName"
          className="block mb-2 text-lg font-medium text-gray-800"
        >
          Last Name:
        </label>
        <input
          id="lastName"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          value={contact.lastName}
          onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-lg font-medium text-gray-800">
          Status:
        </label>
        <div className="flex items-center">
          <input
            type="radio"
            id="activeStatus"
            value="active"
            checked={contact.status}
            onChange={() => setContact({ ...contact, status: true })}
          />
          <label htmlFor="activeStatus" className="text-gray-800">
            Active
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="inactiveStatus"
            value="inactive"
            checked={!contact.status}
            onChange={() => setContact({ ...contact, status: false })}
          />
          <label htmlFor="inactiveStatus" className="text-gray-800">
            Inactive
          </label>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className=" bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
          onClick={handleSaveContact}
        >
          Save Contact
        </button>
      </div>
    </div>
  );
};

export default CreateContact;
