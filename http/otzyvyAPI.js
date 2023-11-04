import { $authHost, $host } from "./index"

export const createOtzyvy = async (obj) => {
	const { data } = await $host.post('/api/otzyvy', obj)
	return data
}
export const getAllOtzyvy = async () => {
	const { data } = await $host.get('/api/otzyvy/all')
	return data
}
export const getNewOtzyvy = async () => {
	const { data } = await $authHost.get('/api/otzyvy')
	console.log("🚀 🚀 🚀  _ file: otzyvyAPI.js:13 _ getNewOtzyvy _ data:", data)
	return data
}
export const changeOtzyvy = async (obj) => {
	const { data } = await $authHost.put('/api/otzyvy', obj)
	return data
}