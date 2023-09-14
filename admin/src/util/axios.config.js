import axios from 'axios'

axios.interceptors.request.use(function (config) {
    //每次发请求携带token
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    

    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {
    // console.log(response.headers);
    //获取token
    const {authorization} = response.headers
    //如果token存在
    authorization && localStorage.setItem('token',authorization)

    return response;
  }, function (error) {
    const {status} = error.response
    if (status===401) {
        localStorage.removeItem('token')
        //重定向到登录页
        window.location.href = '#/login'
    }
    return Promise.reject(error);
  });