'use client'

import type { ICategoryItems } from '@/lib/category.items'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback, type FC } from 'react'

const CategoryItem: FC<{ item: ICategoryItems }> = ({ item }) => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const filter = searchParams.get('filter')

	const createQuery = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString())

			params.set(name, value)

			return params.toString()
		},
		[searchParams]
	)

	return (
		<Link
			href={pathname + '?' + createQuery('filter', item.name)}
			className={cn(
				filter === item.name
					? 'border-b-2 pb-2 border-black flex-shrink-0'
					: 'opacity-70 flex-shrink-0',
				'flex items-center flex-col gap-y-2'
			)}
		>
			<div className='relative w-6 h-6'>
				<Image src={item.imageUrl} alt={item.name} width={24} height={24} />
			</div>
			<p className='text-base font-medium capitalize'>{item.title}</p>
		</Link>
	)
}

export default CategoryItem
