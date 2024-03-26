import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  // Get the current location using useLocation hook from React Router
  const location = useLocation();
  const path = location.pathname; // Extract the current path from location

  return (
    <Navbar className="border-b-2 px-3 bg-gradient-to-br from-teal-300/25 via-white to-blue-300/30">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-xl  font-semibold dark:text-white font-mono"
      >
        Drive.
        <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Hub
        </span>
      </Link>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to={"/booking-details"}>Booking Details</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
