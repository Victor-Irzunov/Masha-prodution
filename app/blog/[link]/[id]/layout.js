import { getOneArticle } from "../../../../http/articleAPI";
import { transliterate } from "../../../../transliterate/transliterate";

export async function generateMetadata({ params: { id } }) {


	const data = await getOneArticle({ id });

	const title = `${data.link} | Психолог Мария Ирзунова`
	const description = data.description

	const alternates = {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}blog/${transliterate(data.link.split(' ').join('-'))}`,
	};

	return {
		title,
		description,
		alternates
	};
}

export default function Layout({ children }) {

	return (
		<>
			{children}
		</>
	)
}
