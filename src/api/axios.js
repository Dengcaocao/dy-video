import axios from 'axios'
 
// create an axios instance
const service = axios.create({
	baseURL: 'http://172.20.10.2:1012/api', // url = base url + request url
	timeout: 6000,
	crossDomain: true
})
 
// request拦截器,在请求之前做一些处理
service.interceptors.request.use(config => {
		//添加请求头
		// config.headers["accessToken"] = "123"
		console.log('请求拦截成功')
		return config
	},
	error => {
		console.log(error)
		return Promise.reject(error)
	}
);
 
//配置成功后的拦截器
service.interceptors.response.use(res => {
	if (res.data.status == 200) {
		return res.data
	} else {
		return Promise.reject(res.data.msg)
	}
}, error => {
	if (error.response.status) {
		switch (error.response.status) {
			case 401:
				break
			default:
				break
		}
	}
	return Promise.reject(error)
})

export default service
