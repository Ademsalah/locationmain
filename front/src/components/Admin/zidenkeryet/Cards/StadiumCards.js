import React, { useEffect, useState } from 'react';
import "./Btn.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deletStadiums, fetchStadiums } from '../../../../api/admin/stadiumApi';
import { setStadium } from '../../../../redux/StadiumsSlice';
import { Link, useNavigate } from 'react-router-dom';
import Card from './Card';

const StadiumCards = ({ auth }) => {
  console.log('auth admin statdi ', auth);
  const Sstadium = useSelector(state => state.Stadiums);
  console.log('StadiumsSlice Sstadium Sstadium', Sstadium);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getAllSstadium = async () => {
    const data = await fetchStadiums();
    console.log('data jeyamil data base', data.stadiums);
    dispatch(setStadium(data.stadiums));
  };

  useEffect(() => {
    getAllSstadium();
  }, []);


  const del = async (id) => {
    await deletStadiums(id);
    getAllSstadium();
  };

  return (
    <>
     <div className="container">

    <div className="box-container">
      {Sstadium.map((el) => (
        <Card  el={el} del={del}  />
      ))}
      </div>
      </div>
    </>
  );
};

export default StadiumCards;
