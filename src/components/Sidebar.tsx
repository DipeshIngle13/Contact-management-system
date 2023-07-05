import { BiSolidContact,BiMap } from "react-icons/bi";
import { BsBarChartLineFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-row flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li>
              <Link
                to="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <BiSolidContact className="w-6 h-6" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Contact
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/chart"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <BsBarChartLineFill className="w-6 h-6" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Chart
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/map"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <BiMap className="w-6 h-6" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Map
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
