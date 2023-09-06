import { Metadata } from 'next'
import Voyage from './Voyage'
import voitures from '@/public/voitures.svg'
import Image from 'next/image'
import { Header, Sources } from './UI'
import Emoji from '@/components/Emoji'

const title = 'Quel est le vrai coût de la bagnole ?'
const description1 =
		"Le coût d'un trajet en voiture est souvent réduit à celui du carburant et des péages d'autoroute. Mais qui alors paie l'achat, l'entretien, le parking, l'assurance ?",
	description2 =
		"On fait le point en quelques clics avec le simulateur de référence du coût d'un trajet en voiture."

export const metadata: Metadata = {
	title,
	description: description1 + ' ' + description2,
	openGraph: { images: ['https://futur.eco/voitures.png'] },
}

const Page = () => (
	<main>
		<Header>
			<Image
				src={voitures}
				alt="Illustration de plusieurs formes d'automobiles, de la citadine au camping car"
				width="100"
				height="140"
			/>
			<div>
				<h1>{title}</h1>
				<p>{description1}</p>
				<p>
					{' '}
					<Emoji e="🔻" /> {description2}
				</p>
			</div>
		</Header>
		<Voyage />
		<Sources>
			<hr />
			<h2>Sources</h2>

			<p>
				Le modèle de calcul exposé ici est entièrement open source, disponible
				en ligne{' '}
				<a href="https://github.com/laem/futureco/blob/master/app/voyage/data">
					sur la plateforme collaborative Github
				</a>
				.
			</p>
			<p>
				Ce simulateur est basé sur{' '}
				<a href="https://github.com/Clemog/train-voiture/">
					un travail initial de Clément Auger
				</a>
				.
			</p>
			<p>
				TODO pas encore fait il est renforcé par{' '}
				<a href="https://www.reddit.com/r/france/comments/14aswpe/le_vrai_coût_dun_kilomètre_parcouru_en_voiture/">
					ce modèle de calcul
				</a>{' '}
				publié sur reddit.com/r/france
			</p>
		</Sources>
	</main>
)

export default Page
