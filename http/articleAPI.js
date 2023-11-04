import { $authHost, $host } from "./index"

export const createArticle = async (obj) => {
	const { data } = await $authHost.post('api/article/admin', obj)
	return data
}

export const getOneArticle = async ({ id }) => {
	const { data } = await $host.get('/api/article/'+ id)
	return data
}
export const getAllGroupArticle = async ( group ) => {
	console.log("🚀 🚀 🚀  _ file: articleAPI.js:13 _ getAllGroupArticle _ group:", group)
	const { data } = await $host.get('/api/article/group/'+ group)
	console.log("🚀 🚀 🚀  _ file: articleAPI.js:14 _ getAllGroupArticle _ data:", data)
	return data
}
export const getAllArticle = async () => {
	const { data } = await $host.get('api/article/all')
	return data
}
export const changeOneArticle = async (obj) => {
	const { data } = await $authHost.put('api/article/admin', obj)
	return data
}
export const deleteOneArticle = async (id) => {
	const { data } = await $host.delete('api/article/'+ id)
	return data
}
export const userViewArticle = async (id) => {
	const { data } = await $host.put('/api/article/view-article/'+ id)
	return data
}
export const userLikeArticle = async ({ id }) => {
	const { data } = await $host.put('/api/article/like/'+ id)
	return data
}