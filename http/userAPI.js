import { $authHost, $host } from "./index"
import jwt_decode from "jwt-decode"

export const registration = async (email, password, isAdmin) => {
    const { data } = await $host.post('/api/user/register', { email, password, isAdmin })  //., role: 'ADMIN'
    localStorage.setItem('token_psy', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const { data } = await $host.post('/api/user/login', { email, password })
    localStorage.setItem('token_psy', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const { data } = await $authHost.get('api/user/auth')
    localStorage.setItem('token_psy', data.token)
    return jwt_decode(data.token)
}

export const dataUser = async () => {
    const token = localStorage.getItem('token_psy')
    if (token) {
        const dataToken = await jwt_decode(token)
        const { data } = await $host.get('/api/user', {
            params: {
                id: dataToken.id
            }
        })
        return data
    } else {
        return null
    }
}

export const getMyAccount = async () => {
    const { data } = await $authHost.get('api/user/account')
    return data
}

export const resetPassword = async (login) => {
    const { data } = await $host.get('api/user/reset', {
        params: {
            login
        }
    })
    return data
}
export const newPassword = async (obj) => {
    const { data } = await $host.put('api/user/new/password', obj)
    localStorage.setItem('token_psy', data.token)
    return jwt_decode(data.token)
}

