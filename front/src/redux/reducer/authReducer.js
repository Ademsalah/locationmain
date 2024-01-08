import Cookies from "js-cookie";
const initialState = {
  isAuthenticated: false,
  user: JSON.parse(localStorage.getItem("user") || "{}"),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(initialState.isAuthenticated);

      Cookies.set("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      Cookies.remove("token");
      localStorage.removeItem("user");

      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };

    default:
      const token = Cookies.get("token");

      return {
        ...state,
        isAuthenticated: Boolean(token),
      };
  }
};

export default authReducer;
