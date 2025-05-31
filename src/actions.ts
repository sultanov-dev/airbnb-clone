'use server'

import { redirect } from 'next/navigation'
import prisma from './lib/db'

export const createHome = async ({ userId }: { userId: string }) => {
	const data = await prisma.home.findFirst({
		where: {
			id: userId,
		},
	})

	if (data === null) {
		const data = await prisma.home.create({
			data: {
				id: userId,
			},
		})

		return redirect(`/create/${data.id}/structure`)
	} else if (
		!data.isAddCategory &&
		!data.isAddDescription &&
		!data.isAddLocation
	) {
		return redirect(`/create/${data.id}/structure`)
	} else if (data.isAddCategory && !data.isAddDescription) {
		return redirect(`/create/${data.id}/description`)
	}
}

export const createHomeCategory = async (formData: FormData) => {
	const categoryName = formData.get('categoryName') as string
	const homeId = formData.get('homeId') as string

	await prisma.home.update({
		where: {
			id: homeId,
		},
		data: {
			categoryName,
			isAddCategory: true,
		},
	})

	return redirect(`/create/${homeId}/description`)
}
