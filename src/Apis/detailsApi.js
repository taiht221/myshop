import axiosClient from './axiosClient';

const detailsApi = {
  get(slug) {
    const url = `/product?slug=${slug}`;
    return axiosClient.get(url);
  },
};

export default detailsApi;
