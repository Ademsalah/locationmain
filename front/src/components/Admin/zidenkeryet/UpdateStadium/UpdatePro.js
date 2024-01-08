import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AjoutStatdium.css";
import { updateProduct } from "../../../../api/pro/Product";
const UpdatePro = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const [rating, setRating] = useState("");

  // const getStadiumById = async (stadiumId) => {
  //   const data = await GetUniqueStadiums(stadiumId);
  //   console.log("datagetunique", data);
  // };

  //partie jiben les donnée
  // useEffect(() => {
  //   if (id) {
  //     getStadiumById(id);
  //   }
  // }, [id]);

  const handleSubmit = async (id, newValue) => {
    try {
      await updateProduct(id, newValue);
      await alert("you did it ");
      navigate("/admin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <section className="MainContainer">
        <section className="LoginContainer">
          <section className="CompanyContainer">
            <div className="CompanyName">updaty esh besh tupdaty </div>
          </section>
          <section className="LoginHeaderContainer">
            <div className="LoginHeaderSubTitle">
              Please Enter your Details.
            </div>
          </section>
          <section className="FormContainer">
            <div className="InputContainer">
              <label className="label">Name</label>
              <input
                className="input"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label className="label">price</label>
              <input
                className="input"
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              <label className="label">postUrl</label>
              <input
                className="input"
                type="text"
                onChange={(e) => setPostUrl(e.target.value)}
                value={postUrl}
              />
              <label className="label">Rating</label>
              <input
                className="input"
                type="text"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
            </div>
          </section>

          <section className="ButtonsContainer">
            <div className="SignInButtonContainer">
              <button
                type="button"
                onClick={() =>
                  handleSubmit(id, { name, price, postUrl, rating })
                }
                className="SigninButton"
              >
                ziiiid hbibi
              </button>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default UpdatePro;
