import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AjoutStatdium.css";
import { postStadiums } from '../../../../api/admin/stadiumApi';

const AjoutStadium = () => {
  const navigate=useNavigate()
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [postUrl, setPostUrl] = useState(""); 
  const [rating, setRating] = useState(""); 

  const handleSubmit=async(value)=>{
    await postStadiums(value)
    await alert('you coulld add it ')
    navigate('/admin')
      }
  return (
    <div>
      <section className="MainContainer">
        <section className="LoginContainer">
          <section className="CompanyContainer">
            <div className="CompanyName">zyyyd esh besh tzyyyd </div>
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
              <label className="label">posterURL</label>
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
              <button onClick={()=>handleSubmit({name,price,postUrl,rating})} className="SigninButton">
                ziiiid hbibi
              </button>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default AjoutStadium; 
