import {
	LoginLink,
	LogoutLink,
	RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { KeyRoundIcon, LogInIcon, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const UserNav = async () => {
	const { getUser } = getKindeServerSession()
	const user = await getUser()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='rounded-full flex items-center p-2 lg:px-4 border gap-x-3'>
					<MenuIcon className='w-6 h-6 lg:w-5 lg:h-5 cursor-pointer' />

					<Image
						src={user?.picture || '/person.png'}
						alt='person img'
						className='rounded-full hidden lg:block h-8 w-8 cursor-pointer'
						width={32}
						height={32}
					/>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{user ? (
					<DropdownMenuItem className='font-medium text-base'>
						<LogoutLink>Log out</LogoutLink>
					</DropdownMenuItem>
				) : (
					<>
						<DropdownMenuItem className='font-medium text-base'>
							<RegisterLink
								className='flex items-center justify-center
							gap-x-3'
							>
								<KeyRoundIcon className='text-foreground' />
								Register
							</RegisterLink>
						</DropdownMenuItem>
						<DropdownMenuItem className='font-medium text-base'>
							<LoginLink
								className='flex items-center justify-center
							gap-x-3'
							>
								<LogInIcon className='text-foreground' />
								Login
							</LoginLink>
						</DropdownMenuItem>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserNav
