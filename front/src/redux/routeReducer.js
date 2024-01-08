import { combineReducers } from "redux";
import authReducer from "./reducer/authReducer";
import StadiumsSlice from "./StadiumsSlice";
import categorieSlice from "./categorieSlice";
import productSlice from "./productSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  Stadiums: StadiumsSlice,

  categorie: categorieSlice,
  product: productSlice,
});

export default rootReducer;
