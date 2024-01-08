import React, { useEffect } from "react";
import ListProduitsCard from "./ListProduitsCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../../../api/pro/Product";
import { setproduct } from "../../../../../redux/productSlice";
import axios from "axios";
const ListProduits = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const produits = useSelector((state) => state.product);
  console.log("produits", produits);
  console.log("id", id);
  const getproduit = async (id) => {
    const data = await axios.get(
      `http://localhost:4000/produits/jibproduit/${id}`
    );
    console.log("data lina", data.data.products);
    dispatch(setproduct(data.data.products));
  };
  useEffect(() => {
    getproduit(id);
  }, [id]);
  console.log("produitsproduitsproduits", produits);
  return (
    <div className="card-grid">
      <div className="button-container"></div>
      {produits.length <= 0
        ? "pas de produits"
        : produits.map((el) => (
            <>
              <ListProduitsCard el={el} />
            </>
          ))}
    </div>
  );
};

export default ListProduits;
