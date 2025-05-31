'use client'

import { Card, CardHeader } from '@/components/ui/card'
import { categoryItems } from '@/lib/category.items'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

const SelectCategory = () => {
	const [selected, setSelected] = useState<string | null>(null)

	return (
		<div className='grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto'>
			<input type='hidden' name='categoryName' value={selected as string} />
			{categoryItems.map(item => (
				<div key={item.id} className='cursor-pointer'>
					<Card
						className={cn(selected === item.name ? 'border-rose-500' : '')}
						onClick={() => setSelected(item.name)}
					>
						<CardHeader>
							<Image
								src={item.imageUrl}
								alt={item.name}
								height={32}
								width={32}
							/>
							<h2 className='font-medium'>{item.title}</h2>
						</CardHeader>
					</Card>
				</div>
			))}
		</div>
	)
}

export default SelectCategory
