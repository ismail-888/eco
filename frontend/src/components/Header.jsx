import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
      setFade(true);
    } else {
      setFade(false);
      setTimeout(() => document.body.classList.remove("no-scroll"), 300);
    }
  }, [showModal]);
  return (
    <header className="w-full px-4 py-4 bg-bgBlue">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-6 ">
          <button
            className="w-[40px] hidden sm:block"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <img src={"/assets/menu.png"} alt="menu" />
          </button>
          <Link to={'/'}><img src={"/assets/logo.png"} alt="logo" className="w-[180px]" /></Link>
        </div>

        <div className="flex justify-center items-center gap-4">
          <nav className=" sm:hidden">
            <ul className="flex justify-center items-center gap-3 text-white font-bold">
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/videos">Videos</NavLink>
              </li>
              <li>
                <NavLink to="/bundles">Bundles</NavLink>
              </li>
              <li>
                <NavLink to="/referral">Referral Progam</NavLink>
              </li>
            </ul>
          </nav>

          <button className="w-[40px]">
            <img src={"/assets/cart.png"} alt="cart" />
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className={`fixed inset-0 bg-white text-white z-50 flex flex-col justify-start items-start px-5 py-10 ${
            fade ? "fade-in" : "fade-out"
          }`}
        >
          <div>
            <img src={"/assets/navLogo.png"} alt="navLogo" className="w-[250px] pb-2 -mt-2" />
          </div>
          <button
            className="absolute top-4 right-4 text-txtGray text-5xl"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>

          <ul className="text-left text-txtGray text-xl font-[400] space-y-4 mt-16">
            <li>
              <NavLink onClick={() => setShowModal(false)} to="/products">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShowModal(false)} to="/Videos">
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShowModal(false)} to="/bundles">
                Bundles
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShowModal(false)} to="/referral">
                Referral Progam
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
