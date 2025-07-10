import setDefaultsToZero from './setDefaultsToZero'
import transformRules from './transformRules'
import voyageRules from '@/app/cout-voiture/data/rules'
import carburantRules from '@/app/carburants/prix-a-la-pompe/rules'
import dataUrl from '@/components/dataUrl'

export async function getRules(
	ruleSet: 'NGC' | 'futureco' | 'voyage' | 'carburants'
) {
	if (ruleSet === 'voyage') return voyageRules
	if (ruleSet === 'carburants') return carburantRules

	const rulesDomain =
		ruleSet === 'NGC'
			? 'data.nosgestesclimat.fr/co2-model.FR-lang.fr.json'
			: dataUrl

	const url = 'https://' + rulesDomain

	console.log('🟣🟣🟣', url)

	const res = await fetch(url)

	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch rules data for set ' + ruleSet)
	}

	const json = await res.json()

	const newRules =
		ruleSet === 'futureco' ? transformRules(json) : setDefaultsToZero(json)

	return newRules
}

export async function getRulesFromDottedName(dottedName) {
	const ruleSet =
		dottedName === 'bilan'
			? 'NGC'
			: dottedName.startsWith('voyage')
			? 'voyage'
			: dottedName.startsWith('carburants')
			? 'carburants'
			: 'futureco'
	const rules = await getRules(ruleSet)
	return rules
}
