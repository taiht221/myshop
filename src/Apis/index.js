import axios from 'axios';
// import {useRouteMatch} from 'react-router-dom';
const URL = 'https://cfd-reactjs.herokuapp.com';

export const callCategory = () => {
  // console.log('cateapi', axios.get(`${URL}/categories`));
  return axios.get(`${URL}/categories`);
};
// export const callItem = () => {
//   return axios.get(`${URL}/product`);
// };
export const callItem = (data) => {
  if (data.id) {
    return axios.get(
      `${URL}/product?categories=${data.id}&&page=${data.pageQueryParam || 1}&&sort=${
        data.sortQueryParam || 'real_price.-1'
      }`
    );
  } else {
    return axios.get(
      `${URL}/product?page=${data.pageQueryParam || 1} &&sort=${data.sortQueryParam || 'real_price.-1'}`
    );
  }
};

export const callUser = (data) => {
  // console.log('aaa');
  // let x = axios.post(`${URL}/register`, data);
  // console.log('x la', typeof x);
  return axios.post(`${URL}/register`, data);
};
