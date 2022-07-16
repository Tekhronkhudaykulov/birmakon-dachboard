import requests from "../../../helpers/requests";

export const profil = (params) => (dispatch) => {
  dispatch({ type: "profil_start", payload: params });

  requests
    .profil(params)
    .then(({ data }) => {
      dispatch({ type: "profil_success", payload: data });
      alert("Успешно редактировали !");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "profil_error", payload: message });
      alert("Что-то пошло не так!");
    });
};

export const shopInformation = () => (dispatch) => {
  dispatch({ type: "shop_information_start" });
  requests
    .shopInformation()
    .then(({ data }) => {
      dispatch({ type: "shop_information_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "shop_information_error", payload: message });
    });
};
