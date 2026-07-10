import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? "bg-[#f8aa00] text-black px-8 py-2 rounded-full font-semibold transition-all duration-300"
      : "text-white px-8 py-2 font-semibold transition-all duration-300 hover:text-[#f8aa00]";

  return (
    <div className="sticky top-4 z-50 w-full flex justify-center px-4">
      <div className="w-[90%] bg-[#16110A]/95 backdrop-blur-md rounded-full px-6 py-2 flex items-center justify-between border border-[#2f2413] shadow-lg">
        
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>

        <NavLink to="/Food-menu" className={navClass}>
          Menu
        </NavLink>

        <div className="border border-[#7a5a18] rounded-full px-10 py-2">
          <span className="text-[#f8aa00] text-[18px] font-bold">
            noonna
          </span>
        </div>

        <NavLink to="/reviews" className={navClass}>
          Reviews
        </NavLink>

        <NavLink to="/contact" className={navClass}>
          Contact Us
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;