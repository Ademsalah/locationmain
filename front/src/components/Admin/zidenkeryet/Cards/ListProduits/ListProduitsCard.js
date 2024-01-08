import React from "react";

import { useNavigate } from "react-router-dom";
import "./Cards.css";
import { deletProduct } from "../../../../../api/pro/Product";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ListProduitsCard = ({ el, del }) => {
  const notify = () => toast.success("awka rthat menou c bon  ");
  const { idcat } = useParams();
  const navigate = useNavigate();
  const handeldelete = async (id) => {
    try {
      await deletProduct(id);
      notify();
      console.log("s7itek fskhtou");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button >addi produiyte</button>{" "}
      <section className="hero-section">
        <div className="card-grid">
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
              <div className="buttons">
                <button onClick={() => navigate(`/update/:idcat/${el._id}`)}>
                  update
                </button>
                <button onClick={() => handeldelete(el._id)}>delete</button>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ListProduitsCard;
