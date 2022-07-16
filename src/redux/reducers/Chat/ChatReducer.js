const INITIAL_STATE = {
  loading: false,
  message: null,
  chatList: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "send_chat_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "send_chat_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "send_chat_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        chatList: payload.data,
      };
    default:
      return state;
  }
};
