import { categoryItems } from '@/lib/category.items'
import CategoryItem from './category.item'

const Filter = () => {
	return (
		<div className='flex gap-x-10 w-full mt-5 overflow-x-scroll no-scrollbar'>
			{categoryItems.map(item => (
				<CategoryItem key={item.id} item={item} />
			))}
		</div>
	)
}

export default Filter
