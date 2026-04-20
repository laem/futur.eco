import { Metadata } from 'next'
import InteractiveGrid from './InteractiveGrid'
import { Main } from './UI'

const title = 'Le tableau de bord de la planification écologique',
	description =
		"Vous êtes le pilote à bord du paquebot France. Votre objectif : respecter l'Accord de Paris, un engagement international pour garder le réchauffement climatique sous les 1,5 à 2°. Vu l'urgence et l'ambition, il va falloir planifier.."
export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		images: ['https://' + process.env.WEBSITE_URL + '/national.png'],
	},
}

export const dynamic = 'force-dynamic'

export default async function National(props) {
	const searchParams = await props.searchParams

	return (
		<Main>
			<header>
				<h1>{title}</h1>
				<p>{description}</p>
			</header>
			<p>
				Respecter l'accord, c'est réduire de <strong>5 % chaque année</strong>{' '}
				nos émissions de CO₂ₑ.
			</p>
			<p>
				À vous de jouer : 🖱️ cliquez pour explorer l'action, ☑️ cochez-la pour
				voir son impact.
			</p>
			<InteractiveGrid state={searchParams} />
		</Main>
	)
}
