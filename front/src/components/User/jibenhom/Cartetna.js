import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import "./cartetna.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

const Cartetna = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setproduct] = useState("");
  const { idp } = useParams();
  const produits = useSelector((state) => state.product);
  console.log("produits", produits);
  console.log("idp", idp);
  const getproduit = async (idp) => {
    const data = await axios.get(
      `http://localhost:4000/produits/jibproduit/${idp}`
    );
    console.log("data lina", data.data.products);
    dispatch(setproduct(data.data.products));
  };
  useEffect(() => {
    getproduit(idp);
  }, [idp]);
  console.log("produitsproduitsproduits", produits);
  return (
    <div>
      {" "}
      <div className="card-gridp">
        <div className="button-container"></div>
        {produits.length <= 0
          ? "pas de produits"
          : produits.map((el) => (
              <>
                <section className="hero-section">
                  <div className="card-gridp">
                    <a className="card" href="#">
                      <div
                        className="card__background"
                        style={{
                          backgroundImage: `url(${el.postUrl})`,
                        }}
                      />
                      <div className="card__content">
                        <p className="card__category">{el.name}</p>
                        <h3 className="card__heading">Example Card Heading</h3>
                        <a className="btn">
                          {el.price} dt || {el.rating}
                        </a>
                      </div>
                    </a>
                  </div>
                </section>
              </>
            ))}
      </div>
    </div>
  );
};

export default Cartetna;
