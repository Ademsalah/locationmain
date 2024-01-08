import React, { useEffect } from "react";
import "./user.css";
import Cartetna from "./jibenhom/Cartetna";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../redux/action/authaction";
import { fetchCategorie } from "../../api/Cathegories/Cath";
import { setCategorie } from "../../redux/categorieSlice";
/*  import StadiumCards from '../Cards/StadiumCards'  */
export default function Client() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const llogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const authUser = useSelector((state) => state.auth);
  const categ = useSelector((state) => state.categorie);

  console.log("nthbtou foil aut", authUser);
  const fetchcate = async (idcat) => {
    const data = await fetchCategorie(idcat);
    console.log("data jib cat", data, categ);
    dispatch(setCategorie(data.getAll));
  };
  useEffect(() => {
    fetchcate();
  }, []);

  return (
    <div className="bodyF">
      <div className="appClient">
        <header className="app-header">
          <div className="app-header-logo">
            <div className="logo">
              <span className="logo-icon">
                <img src="../../../partner.png" />
              </span>
              <h1 className="logo-title">
                <span>Almeria</span>
                <span>kerya.com</span>
              </h1>
            </div>
          </div>
          <div className="app-header-navigation">
            <div className="tabs">
              <a href="#">Overview</a>
              <a href="#" className="active">
                Payments
              </a>
              <a href="#">Cards</a>
              <a href="#">Account</a>
              <a href="#">System</a>
              <a href="#">Business</a>
            </div>
          </div>
          <div className="app-header-actions">
            <button className="user-profile">
              <span>
                {authUser.name} {authUser.lastName}
              </span>
              <span style={{ height: "74px", width: "77px" }}>
                <img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" />
              </span>
            </button>
            <div className="app-header-actions-buttons">
              <button className="icon-button large" onClick={() => llogout()}>
                <i className="ph-magnifying-glass" />
              </button>
              <button className="icon-button large">
                <i className="ph-bell" />
              </button>
            </div>
          </div>
          <div className="app-header-mobile">
            <button className="icon-button large">
              <i className="ph-list" />
            </button>
          </div>
        </header>
        <div className="app-body">
          <div className="app-body-navigation">
            <nav className="navigation">
              {categ.map((el) => (
                <div>
                  <Link className="ph-browsers" to={`viewProduit/${el._id}`}>
                    {el.name}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          <div className="app-body-main-content">
            <section className="service-section">
              <h2>Service</h2>
              <div className="service-section-header">
                <div className="search-field">
                  <i className="ph-magnifying-glass" />
                  <input type="text" placeholder="Account number" />
                </div>
                <div className="dropdown-field">
                  <select>
                    <option>Home</option>
                    <option>Work</option>
                  </select>
                  <i className="ph-caret-down" />
                </div>
                <button className="flat-button">Search</button>
              </div>
              <div className="mobile-only">
                <button className="flat-button">Toggle search</button>
              </div>

              <div className="tiles"></div>
              <div className="service-section-footer">
                <p>
                  Services are paid according to the current state of the
                  currency and tariff.
                </p>
                <Outlet />
              </div>
            </section>
            {/*     <Cartetna /> */}
          </div>
          <div className="app-body-sidebar">
            <section className="payment-section">
              <h2> keryetek</h2>
              <div className="payment-section-header">
                <p>inchallah 5iiiir </p>
                <div></div>
              </div>
              <div className="payments">
                <div className="payment">
                  <div className="card green">
                    <span>01/22</span>
                    <span>•••• money</span>
                  </div>
                  <div className="payment-details">
                    <h3>kerya 1</h3>
                    <div>
                      <span>$ 2,110</span>
                      <button className="icon-button">
                        <i className="ph-caret-right-bold" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="payment">
                  <div className="card olive">
                    <span>12/23</span>
                    <span> 2228</span>
                  </div>
                  <div className="payment-details">
                    <h3>kerya 2</h3>
                    <div>
                      <span> 5,621</span>
                      <button className="icon-button">
                        <i className="ph-caret-right-bold" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="payment">
                  <div className="card gray">
                    <span>03/22</span>
                    <span> 5214</span>
                  </div>
                  <div className="payment-details">
                    <h3>kerya 3</h3>
                    <div>
                      <span> 3,473</span>
                      <button className="icon-button">
                        <i className="ph-caret-right-bold" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq">
                <p>any probleme ask</p>
                <div>
                  <label>Question</label>
                  <input type="text" placeholder="Type here" />
                </div>
              </div>
              <div className="payment-section-footer">
                <button className="save-button">Save</button>
                <button className="settings-button">
                  <i className="ph-gear" />
                  <span>More settings</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
