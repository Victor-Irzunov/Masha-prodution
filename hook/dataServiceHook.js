import { getAllGroupArticle } from '../http/articleAPI';

export const useDataService = async (link) => {
	let data;
	
	switch (link) {
		case 'besplodie':
			const { module } = await import('../constans/besplodie/BesplodieConst');
			data = module
			break

		case 'semeinii-psikholog':
			const { dataSemejnyj } = await import('../constans/semejnyj/SemejnyjConst');
			data = dataSemejnyj
			break

		case 'psikholog-dlya-podrostka':
			const { dataPodrostok } = await import('../constans/podrostok/PodrostokConst');
			data = dataPodrostok
			break

		case 'zhenskii-psikholog':
			const { dataZhenskii } = await import('../constans/zhenskii/ZhenskiiConst');
			data = dataZhenskii
			break

		case 'lechenie-depressii':
			const { depresiya } = await import('../constans/depresiya/depresiyaConst');
			data = depresiya
			break

		case 'klinicheskij-psikholog':
			const { klinicheskij } = await import('../constans/klinicheskij/klinicheskijConst');
			data = klinicheskij
			break

		case 'individualnaya-konsultatsiya':
			const { dataIndividualnayaConst } = await import('../constans/individualnaya/IndividualnayaConst');
			data = dataIndividualnayaConst
			break

		case 'konsultatsiya-perinatalnogo-psikhologa':
			const { dataPerinatalnogoConst } = await import('../constans/perinatalnogo/PerinatalnogoConst');
			data = dataPerinatalnogoConst
			break
	}

	const extraArticles = await getAllGroupArticle(data.group);
	console.log("🚀 🚀 🚀  _ file: dataServiceHook.js:49 _ useDataService _ extraArticles:", extraArticles)

	return {
		data,
		extraArticles: extraArticles.length ? extraArticles : []
	};
}