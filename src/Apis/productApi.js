import axiosClient from './axiosClient';

const ProductApi = {
  getAll(params) {
    const url = '/product';
    if (isNaN(params.categories)) {
      delete params.categories;
      return axiosClient.get(url, { params });
    } else {
      return axiosClient.get(url, { params });
    }
  },
};
export default ProductApi;
// export default ProductApi;
// if (data.id) {
//   return axios.get(
//     `${URL}/product?categories=${data.id}&&page=${data.pageQueryParam || 1}&&sort=${
//       data.sortQueryParam || 'real_price.-1'
//     }`
//   );
// } else {
//   return axios.get(`${URL}/product?page=${data.pageQueryParam || 1} &&sort=${data.sortQueryParam || 'real_price.-1'}`);
// }
