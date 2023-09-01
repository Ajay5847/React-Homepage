import './Navbar.scss'
import {BiSearch} from 'react-icons/bi'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Skin Care
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Body & Hand
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Hair
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fragrance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kits & Travel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Gifts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Body & Hand
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Read
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Stores
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Facial Appointments
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <BiSearch />
              </button>
            </form>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Log in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cabinet
                </a>
              </li>
			  <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart
                </a>
              </li>
			  </ul>
			  </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
