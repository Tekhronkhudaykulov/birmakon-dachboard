import axios from "axios";
const url = `https://birmakon.loko.uz`;

const token = window.localStorage.getItem("@token");

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
};

let formData = (rawData) => {
  let form = new FormData();
  Object.keys(rawData).forEach((key) => {
    if (rawData[key]) {
      if (Array.isArray(rawData[key])) {
        rawData[key].forEach((item, index) => {
          form.append(`${key}[${index}]`, item);
        });
      } else {
        form.append(key, rawData[key]);
      }
    }
  });
  return form;
};

// let formData = (rawData) => {
//   let form = new FormData();
//   Object.keys(rawData).forEach((key) => {
//     if (rawData[key]) {
//       if (typeof rawData[key] === "object") {
//         Object.entries(rawData[key]).forEach(([, value], index) => {
//           if (typeof value === "object") {
//             Object.entries(value).forEach(([_key, _value], _index) => {
//               form.append(`${key}[${_key}][${index}]`, _value);
//             });
//           }
//         });
//       } else {
//         form.append(key, rawData[key]);
//       }
//     }
//   });
//   return form;
// };

const packageData = (data) => {
  const form = new FormData();
  for (const key in data) {
    if (Array.isArray(data[key])) {
      for (const childKey in data[key]) {
        form.append(`${key}[${childKey}]`, data[key][childKey]);
      }
    } else {
      form.append(key, data[key]);
    }
  }
  return form;
};

const requests = {
  auth: (params) => axios.post(`${url}/dashboard/auth`, params, config),
  orders: (params) =>
    axios.get(`${url}/dashboard/order`, { params, ...config }),
  profil: (params) =>
    axios.post(`${url}/dashboard/shop/update`, formData(params), config),
  shopInformation: () => axios.get(`${url}/dashboard/shop`, config),
  renameProfile: (params) =>
    axios.post(`${url}/dashboard/profile/update`, formData(params), config),
  product: (params) =>
    axios.get(`${url}/dashboard/product`, { params, ...config }),
  categoryProduct: () =>
    axios.get(`${url}/dashboard/category?type=product`, config),
  profileClient: () => axios.get(`${url}/dashboard/profile`, config),
  categoryRegion: () =>
    axios.get(`${url}/dashboard/category?type=region`, config),
  productLock: (params) =>
    axios.post(`${url}/dashboard/product/lock`, params, config),
  productOnLock: (params) =>
    axios.post(`${url}/dashboard/product/unlock`, params, config),
  deleteProduct: (params) =>
    axios.post(`${url}/dashboard/product/remove`, params, config),
  deleteOrderId: (id) =>
    axios.post(`${url}/dashboard/order/remove?id=${id}`, null, config),
  checkOrder: (params) =>
    axios.post(`${url}/dashboard/order/accept`, params, config),
  declineOrder: (params) =>
    axios.post(`${url}/dashboard/order/decline`, params, config),
  addProduct: (params) =>
    axios.post(`${url}/dashboard/product/create`, formData(params), config),
  brands: () => axios.get(`${url}/dashboard/brand`, config),
  subCategory: (id) =>
    axios.get(`${url}/dashboard/category/sub-category?id=${id}`, config),
  filterCategory: (category_id) =>
    axios.get(
      `${url}/dashboard/category/filter?category_id=${category_id}`,
      config
    ),
  renameProduct: (params) =>
    axios.post(`${url}/dashboard/product/create/`, params, config),
  productDetailView: (id) =>
    axios.get(`${url}/dashboard/product/detail?id=${id}`, config),
  productColor: () => axios.get(`${url}/dashboard/color`, config),
  units: () => axios.get(`${url}/dashboard/category?type=unit`, config),
  currency: () => axios.get(`${url}/dashboard/category?type=currency`, config),
  reviews: (id) => axios.get(`${url}/dashboard/review/detail?id=${id}`, config),
  sendChat: (params) =>
    axios.post(`${url}/dashboard/chat/send`, formData(params), config),
};
export default requests;
