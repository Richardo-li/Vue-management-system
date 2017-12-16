//导入axios 
import axios from 'axios';
//导入接口域名
import { domain } from "./api_config.js";

// 配置默认的域名, 将来请求接口的时候直接写路径就可以了
axios.defaults.baseURL = domain;

export default axios;