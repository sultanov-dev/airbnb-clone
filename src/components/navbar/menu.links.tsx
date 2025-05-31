import { createHome } from '@/actions'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import Link from 'next/link'
import { DropdownMenuItem, DropdownMenuSeparator } from '../ui/dropdown-menu'

const MenuLinks = ({ userId }: { userId: string }) => {
	const createAirbnbHome = createHome.bind(null, {
		userId,
	})

	return (
		<>
			<DropdownMenuItem className='font-medium text-base w-full'>
				<form action={createAirbnbHome}>
					<button className='w-full text-start' type='submit'>
						Airbnb your home
					</button>
				</form>
			</DropdownMenuItem>
			<DropdownMenuItem className='font-medium text-base w-full'>
				<Link href={'/homes'} className='w-full'>
					Listings
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem className='font-medium text-base w-full'>
				<Link href={'/favorites'} className='w-full'>
					Favorites
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem className='font-medium text-base w-full'>
				<Link href={'/reservations'} className='w-full'>
					Reservation
				</Link>
			</DropdownMenuItem>
			<DropdownMenuSeparator />
			<DropdownMenuItem className='font-medium text-base w-full'>
				<LogoutLink>Log out</LogoutLink>
			</DropdownMenuItem>
		</>
	)
}

export default MenuLinks
