import { Button } from '@/components/ui/button'
import SelectCategory from './_components/select.category'

const CreatePage = () => {
	return (
		<>
			<div className='w-3/5 mx-auto'>
				<h2 className='text-3xl font-semibold tracking-tight transition-colors'>
					Which of these best describe your Home?
				</h2>
			</div>

			<form>
				<SelectCategory />

				<div className='fixed z-10 bottom-0 bg-white w-full h-24 border-t border'>
					<div className='flex items-center justify-between mx-auto px-5 lg:px-10 h-full'>
						<Button
							className='text-lg font-medium transition-colors'
							variant={'outline'}
							size={'lg'}
						>
							Cancel
						</Button>
						<Button
							className='text-lg font-medium bg-rose-500 hover:bg-rose-400 transition-colors'
							size={'lg'}
						>
							Save
						</Button>
					</div>
				</div>
			</form>
		</>
	)
}

export default CreatePage
