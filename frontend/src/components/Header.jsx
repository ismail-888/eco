import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";

const Header = () => {
  const [activeModal, setActiveModal] = useState(null); // null, "menu", or "cart"
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (activeModal) {
      document.body.classList.add("no-scroll");
      setFade(true);
    } else {
      setFade(false);
      setTimeout(() => document.body.classList.remove("no-scroll"), 300);
    }
  }, [activeModal]);

  const closeModal = () => setActiveModal(null);

  return (
    <header className="container px-4 py-4 bg-bgBlue">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-6">
          <button
            className="w-[40px] hidden sm:block"
            onClick={() => setActiveModal("menu")}
          >
            <img src={"/assets/menu.png"} alt="menu" />
          </button>
          <Link to="/">
            <img src={"/assets/logo.png"} alt="logo" className="w-[180px]" />
          </Link>
        </div>

        <div className="flex justify-center items-center gap-4">
          <nav className="sm:hidden">
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
                <NavLink to="/referral">Referral Program</NavLink>
              </li>
            </ul>
          </nav>
          <button className="w-[40px]" onClick={() => setActiveModal("cart")}>
            <img src={"/assets/cart.png"} alt="cart" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          className={`fixed inset-0 bg-zinc-100 text-white z-50 flex flex-col justify-start items-start px-5 py-10 ${
            fade ? "fade-in" : "fade-out"
          }`}
        >
          {/* Conditional Rendering Based on Modal Type */}
          {activeModal === "menu" && <Menu closeModal={closeModal} />}

          {activeModal === "cart" && <Cart closeModal={closeModal} />}
        </div>
      )}
    </header>
  );
};

export default Header;
