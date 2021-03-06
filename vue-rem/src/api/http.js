import { getRequest, putRequest, postRequest, instance } from "./request.js"
// import qs from 'qs'

// 下面是示列代码
export function getData(params) {
	return getRequest('/getData', params);
}

export function postData(data) {
	return postRequest('/postData', data);
}

export function putData(data) {
	return putRequest('/putData', data, {
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		transformRequest: [function (data) {
			// 对 data 进行任意转换处理
			// // 方法一：
			// console.log(qs.stringify(data))
			// return qs.stringify(data)

			// 方法二：
			let ret = ""
			for (let it in data) {
				ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&"
			}
			return ret

			// return data
		}],
	});
}

export function draw(params) {
	return getRequest('/choujiang', params);
}
// 新加的http方法
export function getVerifyCode(params) {
	return getRequest('/lotteryUser/sendVerificationCode/' + params, params);
}

export function logIn(params) {
	return getRequest('/lotteryUser/login/' + params.num + '/' + params.code , params);
}

export function getAllPrize(params) {
	return getRequest('/lotteryUser/getWinLotteryUserList', params);
}

export function getAPrize(data) {
	return getRequest('/prizeInfo/startLottery/' + data, data);
}

export function savePrize(params) {
	return postRequest('/lotteryUser/saveAddress', params)
}

export function userPrizeResult(params) {
	return getRequest('/prizeInfo/getDrawLotteryInfo', params);
}

export function postAgree(params) {
	return getRequest('/lotteryUser/agreeRules', params);
}

// 获取用户信息
export function getUserInfo() {
	return instance({
		method: 'get',
		url: '/lotteryUser/getUserInfo'
	})
}

// 获取奖品数量
export function getPrizeCount(params) {
	return instance({
		method: 'get',
		url: '/prizeInfo/getPrizeInfoList',
	})
}
