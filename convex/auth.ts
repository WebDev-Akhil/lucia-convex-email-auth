/** @format */

import { v } from 'convex/values'
import { mutationWithAuth } from '../lib/convex-lucia-auth'
import {
	signInWithEmailAndPassword,
	signUpWithEmailAndPassword,
} from '../lib/convex-lucia-auth/email'

export const signIn = mutationWithAuth({
	args: {
		email: v.string(),
		password: v.string(),
	},
	handler: async (ctx, { email, password }) => {
		const session = await signInWithEmailAndPassword(ctx, email, password)
		return session.sessionId
	},
})

export const signUp = mutationWithAuth({
	args: {
		email: v.string(),
		password: v.string(),
	},
	handler: async (ctx, { email, password }) => {
		const session = await signUpWithEmailAndPassword(ctx, email, password)
		return session.sessionId
	},
})
