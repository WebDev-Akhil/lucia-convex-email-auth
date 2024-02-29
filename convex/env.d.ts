/** @format */

// convex/env.d.ts
declare namespace Lucia {
	type Auth = import('../lib/convex-lucia-auth').Auth
	type DatabaseUserAttributes = import('../lib/convex-lucia-auth').DatabaseUserAttributes & {
		email: string
	}
	type DatabaseSessionAttributes = import('../lib/convex-lucia-auth').DatabaseSessionAttributes
}

declare namespace ConvexLuciaAuth {
	type DataModel = import('./_generated/dataModel').DataModel
}
