'use client'
import { KindeProvider } from '@kinde-oss/kinde-auth-nextjs'
import type { FC, PropsWithChildren } from 'react'

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <KindeProvider>{children}</KindeProvider>
}
