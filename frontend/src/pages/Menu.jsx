import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = ({ closeModal }) => {
  return (
    <>
    <div className="flex">
      <img
        src={"/assets/navLogo.png"}
        alt="navLogo"
        className="w-[250px] pb-2 -mt-2"
      />
      <button
        className="absolute top-4 right-4 text-txtGray text-5xl"
        onClick={closeModal}
      >
        &times;
      </button>
    </div>
    <ul className="text-left text-txtGray text-xl font-[400] space-y-4 mt-16">
      <li>
        <NavLink onClick={closeModal} to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink onClick={closeModal} to="/videos">
          Videos
        </NavLink>
      </li>
      <li>
        <NavLink onClick={closeModal} to="/bundles">
          Bundles
        </NavLink>
      </li>
      <li>
        <NavLink onClick={closeModal} to="/referral">
          Referral Program
        </NavLink>
      </li>
    </ul>
  </>
  )
}

export default Menu