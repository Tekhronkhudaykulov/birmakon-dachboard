import requests from "../../../helpers/requests";

export const sendChat = (params) => (dispatch) => {
  dispatch({ type: "send_chat_start", payload: params });

  requests
    .sendChat(params)
    .then(({ data }) => {
      dispatch({ type: "send_chat_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "send_chat_error", payload: message });
    });
};
