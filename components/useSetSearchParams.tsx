'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export default function useSetSearchParams() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const createQueryString = useCallback(
		(newSearchParams: object, clear: boolean) => {
			const params = new URLSearchParams(clear ? {} : searchParams)

			Object.entries(newSearchParams).map(([k, v]) => {
				v === undefined ? params.delete(k) : params.set(k, v)
			})

			return params.toString()
		},
		[searchParams]
	)
	return (
		newSearchParams: object,
		noPush: boolean = false,
		clear: boolean = false
	) => {
		const newUrl =
			pathname +
			'?' +
			createQueryString(newSearchParams, clear) +
			window.location.hash
		if (!noPush) router.push(newUrl)
		else return newUrl
	}
}
