import Vue from 'vue'
import axios from 'axios'


const instance = axios.create({
	baseURL: 'http://127.0.0.1:9999',
	// headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	headers: {
		'Content-Type': 'application/json',
		'authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ3cyIsInN1YiI6InNob3BfYXBwIiwiYXVkIjoibW9iaWxlIiwianRpIjoiYWJjZGVmZzEyMzQ1NiIsImlhdCI6MTU3NTE4ODYwNywiZXhwIjoxNTc1MTg4NjM3fQ.wT7A1MjRwYVYrvq-z5ejpm3LtoGLL2V5ooYgaXYQkRc"
	}
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	if (response.status === 200) {
		return response.data
	}
	return { code: 500, msg: '网络异常' };
}, function (error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});


const MyPlugin = {}

MyPlugin.install = function (Vue) {
	// 1. 添加全局方法或属性
	Vue.$axios = instance

	// 2. 添加实例方法
	Vue.prototype.$axios = instance
}

Vue.use(MyPlugin)

export function getRequest(url, params, config = {}) {
	return Vue.$axios({ method: 'GET', url, params, ...config })
}

export function delRequest(url, params, config = {}) {
	return Vue.$axios({ method: 'DELETE', url, params, ...config })
}

export function postRequest(url, data, config = {}) {
	return Vue.$axios({ method: 'POST', url, data, ...config })
}

export function putRequest(url, data, config = {}) {
	return Vue.$axios({ method: 'PUT', url, data, ...config })
}

export default instance;