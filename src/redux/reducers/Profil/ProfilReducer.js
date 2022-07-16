const INITIAL_STATE = {
  loading: false,
  token: null,
  message: null,
  shop: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "profil_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "profil_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "profil_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
      };
    case "shop_information_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "shop_information_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "shop_information_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        shop: payload.data,
      };
    default:
      return state;
  }
};
