import React from "react";

const Navbar = () => {
  return (
      <nav className="navbar bg-light mb-5">
        <div className="container-fluid">
          <a className="navbar-brand">FlipyCard</a>
          <div>
            <button
              className="btn btn-primary me-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Add new flip card
            </button>

            <button className="btn btn-outline-primary" type="button">
              Log In
            </button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
