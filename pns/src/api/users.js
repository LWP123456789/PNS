import request from "../utils/request";

export function getUserInfo(params = {}) {
    return request({
        method: 'GET',
        url: '/userinfo',
        params,
    })
}

export function login(params = {}) {
    return request({
        method: 'GET',
        url: '/login. ',
        params,
        
    })
}

export function getCode(email) {
    return request({
        method: 'GET',
        url: '/sendCode.do',
        params: {email},
        
    })
}

export function register(registerForm) {
    return request({
        method: 'GET',
        url: '/addUser.do',
        params: {registerForm},
    })
}