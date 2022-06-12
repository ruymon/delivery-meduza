import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://delivery-meduza-back.herokuapp.com/',
});
