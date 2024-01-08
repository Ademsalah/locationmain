import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postProduct } from "../../../api/pro/Product";
import "./AddPro.css";
import toast from "react-hot-toast";
const AddPro = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const [rating, setRating] = useState("");
  const notify = toast.success("a7sant");
  const handleSubmit = async (value) => {
    await postProduct(value);
    await notify();
  };
  return (
    <form className="survey-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required=""
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Price:</label>
        <input
          type="string"
          id="price"
          name="price"
          required=""
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <label className="form-group">postUrl</label>
      <input
        className="input"
        type="text"
        onChange={(e) => setPostUrl(e.target.value)}
        value={postUrl}
      />
      <div className="form-group">
        <label htmlFor="rating">Rating:</label>
        <input
          type="range"
          id="rating"
          name="rating"
          min={1}
          max={5}
          step={1}
          required=""
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button
        type="submit"
        onClick={() => handleSubmit({ name, price, postUrl, rating })}
      >
        Zyyyyd hbibi
      </button>
    </form>
  );
};

export default AddPro;
