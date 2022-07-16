import requests from "../../../helpers/requests";
import { toast } from "react-toastify";

export const auth = (params) => (dispatch) => {
  dispatch({ type: "auth_login_start", payload: params });
  requests
    .auth(params)
    .then(({ data }) => {
      dispatch({ type: "auth_login_success", payload: data });
      toast.success("Saytga kirganizdan minnatdormiz!");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      toast.error("Login yoki parolni tekshiring!");
      dispatch({ type: "auth_login_error", payload: message });
    });
};
