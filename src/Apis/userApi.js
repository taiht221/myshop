import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    const url = '/elearning/v4/register';

    return axiosClient.post(url, data);
  },
  login(data) {
    const url = '/elearning/v4/login';

    return axiosClient.post(url, data);
  },
  change(data) {
    const url = '/elearning/v4/login';

    return axiosClient.put(url, data);
  },
};

export default userApi;
