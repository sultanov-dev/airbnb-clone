import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const UserNav = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='rounded-full flex items-center p-2 lg:px-4 border gap-x-3'>
					<MenuIcon className='w-6 h-6 lg:w-5 lg:h-5 cursor-pointer' />

					<Image
						src={'/person.png'}
						alt='person img'
						className='rounded-full hidden lg:block h-8 w-8 cursor-pointer'
						width={32}
						height={32}
					/>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem className='font-medium text-base'>
					Register
				</DropdownMenuItem>
				<DropdownMenuItem className='font-medium text-base'>
					Login
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserNav
