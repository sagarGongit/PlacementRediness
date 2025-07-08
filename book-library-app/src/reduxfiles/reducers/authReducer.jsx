import { produce } from "immer";
import { LOGIN, LOGOUT } from "../actionType";

const initState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : {
      isLogged: false,
      email: "",
      token: null,
    };

export const authReducer = produce((draft, { type, payload }) => {
  switch (type) {
    case LOGIN:
      draft.isLogged = true;
      draft.email = payload.email;
      draft.token = payload.token;
      break;
    case LOGOUT:
      localStorage.removeItem("auth");
      draft.isLogged = false;
      draft.email = "";
      draft.token = null;
      break;
    default:
      break;
  }
}, initState);
