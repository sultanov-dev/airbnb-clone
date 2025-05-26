import { categoryItems } from '@/lib/category.items'
import CategoryItem from './category.item'

const Filter = () => {
	return (
		<div>
			{categoryItems.map(item => (
				<CategoryItem key={item.id} item={item} />
			))}
		</div>
	)
}

export default Filter
