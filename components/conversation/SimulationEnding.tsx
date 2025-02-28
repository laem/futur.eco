import AvionExplanation from '../AvionExplanation'
import Animate from 'Components/ui/animate'
import Emoji from '../Emoji'

const ShareButton = dynamic(() => import('Components/ShareButton'), {
	ssr: false,
})

import { title } from '../utils/publicodesUtils'
import dynamic from 'next/dynamic'
import { ogImageURL } from '@/app/cout-voiture/ogImageUrl'
import Image from 'next/image'
import dimensions from '../simulationImageDimensions'

const SimulationEnding = ({
	rule,
	engine,
	objectives,
	query,
	searchParams,
}) => {
	const avion = objectives[0] === 'transport . avion . impact'
	const coutVoitureDottedName =
		'voyage . trajet voiture . coût trajet par personne'
	const coutVoiture = objectives[0] === coutVoitureDottedName
	const ferry = objectives[0] === 'transport . ferry . empreinte du voyage'
	return (
		<div style={{ textAlign: 'center' }}>
			<>
				{Object.keys(query).length > 0 && (
					<>
						<Emoji e={'🌟'} customSizeEm={3.5} />
						<p>Vous avez terminé votre simulation. Partagez-là !</p>
					</>
				)}
				{ferry && (
					<Animate.appear delay={1}>
						<p
							style={{
								color: 'var(--lighterColor)',
								lineHeight: '1rem',
								fontSize: '85%',
								maxWidth: '30rem',
								textAlign: 'center',
								margin: '0 auto',
								marginBottom: '.6rem',
								marginTop: '.6rem',
							}}
						>
							🐬 L'empreinte du ferry ne se résume pas au climat : écoutez cet
							épisode de podcast pour découvrir ses conséquences sur la
							biodiversité marine.
						</p>
						<iframe
							title="Arte Radio"
							src="https://www.arteradio.com/son/le-chant-de-l-extinction-2-3-interferences?embed"
							width="600"
							height="180"
							css={`
								max-width: 100%;
								border: 3px solid var(--lighterColor) !important;
								@media (min-width: 800px) {
									height: 145px;
								}
							`}
						></iframe>
					</Animate.appear>
				)}
				{coutVoiture && (
					<img
						src={ogImageURL(
							coutVoitureDottedName,
							rule.rawNode.icônes,
							searchParams
						)}
						alt="Une illustration du coût de la voiture incluant le résultat du calcul et les paramètres saisis pour partager sur les réseaux sociaux"
						{...dimensions}
						style={{
							height: 'min(30vh, 45vw)',
							width: 'auto',
							borderRadius: '1rem',
						}}
					/>
				)}
				<ShareButton {...{ text: title(rule) }} />
				{avion && (
					<AvionExplanation
						engine={engine}
						description={rule.rawNode.description}
					/>
				)}
			</>
		</div>
	)
}

export default SimulationEnding
