import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCategorie } from "../../../api/Cathegories/Cath";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
const AddCath = () => {
  const dispatch = useDispatch();
  const notify = () => toast.success("a7sant ");
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = async (value) => {
    await postCategorie(value);
    await notify();
    navigate("/admin");
  };
  return (
    <div>
      <br />
      <br />
      <form className="form-add">
        <label>zzzzz</label>
        <br />
        <br />
        <input
          className="input"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <section className="ButtonsContainer">
          <button onClick={() => handleSubmit({ name })}>ziiiid hbibi</button>
        </section>
      </form>
    </div>
  );
};

export default AddCath;
