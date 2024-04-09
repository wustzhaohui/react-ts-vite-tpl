import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
const REQUEST: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 30 * 1000, // 超时时间设置为30s
});

const { request, response } = REQUEST.interceptors;
/**
 * 请求前操作处理
 */
request.use(
    (config: InternalAxiosRequestConfig<any>) => config,
    (erro: any) => Promise.reject(erro),
);

/**
 * 请求后相应操作处理
 */
response.use(
    (res: AxiosResponse<any, any>) => res,
    (erro: any) => erro,
);

export default REQUEST;
