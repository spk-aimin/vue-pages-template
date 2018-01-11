import axios from 'axios';

const service = axios.create({
    baseURL: process.env.BASE_URL,
    withCredentials: true
});

// Add a request interceptor
service.interceptors.request.use(function (config) {
    return config;
    }, function (error) {
    // Do something with request error
    return Promise.reject(error);
    });

// Add a response interceptor
service.interceptors.response.use(function (response) {
        if(response.data.success && response.data.code == 0) {
            return response.data;
        } else {
            if(response.data.code == 401) {
                appBridge.onSessionLost();
                return Promise.reject(response.data);
            } else {
                return Promise.reject(response.data);
            }
        }
    }, function (error) {
    
        return Promise.reject(error);
    });

export default service;