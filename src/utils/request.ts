import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const REQUEST: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 30 * 1000, // 超时时间设置为30s
});

const {request, response} = REQUEST.interceptors;

request.use((config: InternalAxiosRequestConfig<any>) => config, (erro:any) => Promise.reject(erro))
response.use((res: AxiosResponse<any, any>) => res, (erro:any) => erro)

export default REQUEST;
