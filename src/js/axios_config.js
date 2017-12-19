//导入axios 
import axios from 'axios';
//导入接口域名
import { domain } from "./api_config.js";

// 配置默认的域名, 将来请求接口的时候直接写路径就可以了
axios.defaults.baseURL = domain;


// withCredentials配置为true表示在ajax请求中携带cookie信息，默认是false，实现服务器状态维持的关键
axios.defaults.withCredentials=true;

export default axios;