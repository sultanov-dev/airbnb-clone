import type { ICategoryItems } from '@/lib/category.items'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

const CategoryItem: FC<{ item: ICategoryItems }> = ({ item }) => {
	return (
		<Link href={''}>
			<div className='relative w-6 h-6'>
				<Image src={item.imageUrl} alt={item.name} width={24} height={24} />
			</div>
		</Link>
	)
}

export default CategoryItem
