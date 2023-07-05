import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Contact from "./components/Contact";
import CreateContact from "./components/CreateContact";
import Sidebar from "./components/Sidebar";
import EditContact from "./components/EditContact";
import Chart from "./components/Chart";
import WorldMap from "./components/WorldMap";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Contact />} />
        <Route path="/create-contact" element={<CreateContact />} />
        <Route path="/edit-contact/:id" element={<EditContact />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/map" element={<WorldMap />} />


      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Outlet />
      </div>
    </div>
  );
};
