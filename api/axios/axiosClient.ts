import axios from 'axios';
import queryString from 'query-string';
import apiConfig from './apiConfig';

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    encode: (params: any) => queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
  },
});

axiosClient.interceptors.request.use(async (config: any) => config);

export default axiosClient;
