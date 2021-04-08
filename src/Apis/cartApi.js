import axiosClient from './axiosClient';

const cartApi = {
  get(params) {
    const url = '/ecommerce/v1/cart';
    return axiosClient.get(url, { params });
  },
  post(params) {
    const url = '/ecommerce/v1/cart';
    return axiosClient.get(url, { params });
  },
};

export default cartApi;
