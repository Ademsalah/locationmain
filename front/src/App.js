import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
// import HomePage from "./components/Homepage/HomePage";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import Register2 from "./components/register/Register2";
import Dorra from "./components/Dorra/Dorra";
import Admin from "./components/Admin/Admin";
import AppVisitPage from "./components/VisitPage/AppVisitPage";
// import AjoutStatdium from './components/Admin/zidenkeryet/AjoutStadium/AjoutStatdium';
// import UpdateStadium from './components/Admin/zidenkeryet/UpdateStadium/UpdateStadium'
import AddPro from "./components/Admin/AddingProduct/AddPro";
import ListProduits from "./components/Admin/zidenkeryet/Cards/ListProduits/ListProduits";
import AddCath from "./components/Admin/AddCath/AddCath";
import Client from "./components/User/Client";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
// import UpdateStadium from "./components/Admin/zidenkeryet/UpdateStadium/UpdateStadium";
import UpdatePro from "./components/Admin/zidenkeryet/UpdateStadium/UpdatePro";
import Cartetna from "./components/User/jibenhom/Cartetna";
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  console.log(isAuthenticated, user);
  return (
    <div>
      <Routes>
        {/* partie genrale  */}
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<AppVisitPage />} />
        <Route path="/dorra" element={<Dorra />} />
        <Route path="/register" element={<Register2 />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Admin /> : <Login />}
        />
        <Route path="/app/privateRoute" element={<PrivateRoute />}></Route>
        {/* partie admin  */}
        {isAuthenticated && (
          <Route path="/admin" element={<Admin />}>
            <Route path="viewProduit/:id" element={<ListProduits />} />
            <Route path="addProduit" element={<AddPro />} />
            <Route path="update/:idcat/:idProduit" element={<UpdatePro />} />
          </Route>
        )}
        <Route path="/addCath" element={<AddCath />} />

        {isAuthenticated && (
          <Route path="/user" element={<Client />}>
            <Route path="viewProduit/:idp" element={<Cartetna />} />
          </Route>
        )}
      </Routes>
      <div>
        <Toaster />
      </div>
    </div>
  );
}
export default App;
