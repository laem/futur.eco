import type { Metadata, ResolvingMetadata } from 'next'

import { getRulesFromDottedName } from '@/providers/getRules'
import Article from 'Components/Article'
import BaseCarboneReference from 'Components/BaseCarboneReference'
import { default as convert, default as css } from 'Components/css/convertToJs'
import { Markdown } from 'Components/utils/markdown'
import { title as ruleTitle } from 'Components/utils/publicodesUtils'
import Link from 'next/link'
import { utils } from 'publicodes'
import Simulateur from './Simulateur'

type Props = {
	params: { dottedName: string[] }
	searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
	props,
	parent?: ResolvingMetadata
): Promise<Metadata> {
	const { dottedName: rawDottedName } = await props.params
	const searchParams = await props.searchParams

	const dottedName = utils.decodeRuleName(
			decodeURIComponent(rawDottedName.join('/'))
		),
		rules = await getRulesFromDottedName(dottedName),
		rule = rules[dottedName] || {}

	const title = rule.exposé?.titre || ruleTitle({ ...rule, dottedName })
	const description = rule.exposé?.description || rule.description

	const image =
		rule.exposé?.image && Object.keys(searchParams).length === 0
			? rule.exposé.image
			: `/cout-voiture/og?dottedName=${dottedName}&title=${rule.titre}&emojis=${
					rule.icônes
			  }&${new URLSearchParams(searchParams).toString()}`
	return {
		title,
		description,
		openGraph: {
			images: [image],
		},
		// we could simply render SVG emojis, but SVG images don't work in og tags, we'll have to convert them
	}
}

const Page = async ({ params, searchParams }) => {
	const { dottedName: rawDottedName } = await params
	const { iframe } = await searchParams

	const dottedName = decodeURIComponent(rawDottedName.join('/'))
	const decoded = utils.decodeRuleName(dottedName)
	const rules = await getRulesFromDottedName(dottedName)
	const rule = rules[decoded]
	const text = rule.exposé?.description || rule.description
	const title = rule.exposé?.titre || rule.titre

	const isIframe = iframe != null
	return (
		<main>
			<Simulateur
				dottedName={decoded}
				rules={rules}
				searchParams={searchParams}
			/>
			<details
				open={!isIframe}
				style={css`
					margin-top: 1rem;
				`}
			>
				<summary
					style={css`
						text-align: center;
					`}
				>
					Explications
				</summary>
				<Article>
					<div style={convert(`margin-top: 2rem`)}>
						<hr />
						<h2>{title}</h2>
						<Markdown>{text}</Markdown>
						<h2>⚙️ Comprendre le calcul</h2>
						<p>
							Le modèle de calcul est entièrement ouvert et expliqué{' '}
							<Link
								href={{
									pathname: '/documentation/' + utils.encodeRuleName(decoded),
									query: searchParams,
								}}
							>
								dans la documentation intéractive.
							</Link>
						</p>
						<BaseCarboneReference rule={rule} />
					</div>
				</Article>
			</details>
		</main>
	)
}

export default Page
