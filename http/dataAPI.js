import { $authHost, $host } from "./index"


export const getDataZapisi = async ({ start }) => {
	const { data } = await $authHost.get('api/zapisi/getAllZapisi', {
		params: {
			start
		}
	})
	return data
}
export const createDataZapisi = async (obj) => {
	const { data } = await $authHost.post('/api/zapisi', obj)
	return data
}
export const editDataZapisi = async (obj) => {
	const { data } = await $authHost.put('api/zapisi', obj)
	return data
}
export const deleteOneZapisi = async (id) => {
	const { data } = await $authHost.delete('api/zapisi/' + id)
	return data
}
export const getAllZapisi = async () => {

	const { data } = await $host.get('/api/zapisi');
	return data;
}
