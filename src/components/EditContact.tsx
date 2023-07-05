import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Contact, updateContact } from "../redux/actions/contact";

const EditContact = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.reducers);

  // Find the contact to be edited based on the ID from params

  // State to hold the edited contact data

  const contactToEdit = contacts.find(
    (contact: Contact) => Number(contact.id) === Number(params.id)
  );

  const [editedContact, setEditedContact] = useState({
    id: contactToEdit.id,
    firstName: contactToEdit.firstName,
    lastName: contactToEdit.lastName,
    status: contactToEdit.status,
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setEditedContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(editedContact);

  const handleEdit = () => {
    // Dispatch an action to update the contact data
    dispatch(updateContact(editedContact));
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-md">
      <div className="mb-6">
        <label
          htmlFor="firstName"
          className="block mb-2 text-lg font-medium text-gray-800"
        >
          First Name:
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          value={editedContact.firstName}
          onChange={handleInputChange}
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
          name="lastName"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          value={editedContact.lastName}
          onChange={handleInputChange}
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
            name="status"
            value="active"
            checked={editedContact.status}
            onChange={() =>
              setEditedContact({ ...editedContact, status: true })
            }
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
            checked={!editedContact.status}
            onChange={() =>
              setEditedContact({ ...editedContact, status: false })
            }
          />
          <label htmlFor="inactiveStatus" className="text-gray-800">
            Inactive
          </label>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className=" bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
          onClick={handleEdit}
        >
          Edit Contact
        </button>
      </div>
    </div>
  );
};

export default EditContact;
