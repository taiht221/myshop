import axiosClient from './axiosClient';

const homeProductApi = {
  getAll(params) {
    const url = '/home/product';
    return axiosClient.get(url, { params });
  },
};

export default homeProductApi;
