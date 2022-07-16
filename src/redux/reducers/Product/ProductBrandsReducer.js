const INITIAL_STATE = {
  loading: false,
  message: null,
  brandsList: [],
  unit: [],
  currency: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "product_brands_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "product_brands_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "product_brands_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        brandsList: payload.data,
      };

    case "units_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "units_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "units_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        unit: payload.data,
      };
    case "currency_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "currency_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "currency_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        currency: payload.data,
      };
    default:
      return state;
  }
};
