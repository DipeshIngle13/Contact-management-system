import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Contact as Contacts, deleteContact } from "../redux/actions/contact";

const Contact = () => {
  const contacts = useSelector((state) => state.reducers);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleEditContact = (contactId: number) => {
    navigate(`/edit-contact/${contactId}`);
  };

  const handleDeleteContact = (contactId: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (confirmDelete) {
      dispatch(deleteContact(contactId));
    }
  };

  return (
    <div>
      <div className="flex justify-center my-4">
        <button
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
          onClick={() => navigate("/create-contact")}
        >
          Create Contact
        </button>
      </div>
      {contacts.length===0 && (
        <div className="flex justify-center items-center" >
          <p className="text-black" >No Contact Found Please add contact from Create Contact Button</p>
        </div>
      )}

      <div className="flex flex-wrap ">
        {contacts &&
          contacts.map((contact: Contacts) => (
            <div
              key={contact.id}
              className="max-w-md mx-4 my-2 p-4 border border-gray-300 rounded-md"
            >
              <h3 className="text-lg font-medium text-gray-800">
                Name: {contact.firstName} {contact.lastName}
              </h3>
              <p className="text-gray-600">
                Status: {contact.status ? "Active" : "Inactive"}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
                  onClick={() => handleEditContact(contact.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Contact;
