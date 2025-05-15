import Image from 'next/image'
import Link from 'next/link'

import DesktopLogo from '../../../public/airbnb-desktop.png'
import MobileLogo from '../../../public/airbnb-mobile.png'
import UserNav from './user-nav'

const Navbar = () => {
	return (
		<div className='w-full border-b'>
			<div className='flex items-center justify-between container mx-auto px-5 lg:px-10 py-5'>
				<Link href={'/'}>
					<Image
						src={DesktopLogo}
						alt='airbnb logo'
						className='w-32 hidden lg:block'
					/>
					<Image
						src={MobileLogo}
						alt='airbnb logo'
						className='block lg:hidden w-12'
					/>
				</Link>

				<div className='rounded-full border px-5 py-2'>search bar</div>

				<UserNav />
			</div>
		</div>
	)
}

export default Navbar
