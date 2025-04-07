/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {NavLink} from "react-router-dom";
  
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post Job" },
  ];

  return (
    <header>
      <nav>
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="12.0143"
              cy="12.5143"
              r="12.0143"
              fill="#3575E2"
              fillOpacity="0.4"
            />
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
          </svg>
          <span>Job Portal</span>
        </a>

        {/* Nav Items for the large devices  */}

        <ul>
            {
                navItems.map(({path, title}) => {
                    // console.log(pa)
                    <li>
                        <NavLink
                    to={path}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {title}
                  </NavLink></li>
                })
            }
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
