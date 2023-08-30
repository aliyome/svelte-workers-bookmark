import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import type { Handle } from '@sveltejs/kit';

export const handle = SvelteKitAuth(async (event) => {
	const authOptions = {
		providers: [
			Google({
				clientId: event?.platform?.env?.GOOGLE_AUTH_CLIENT_ID,
				clientSecret: event?.platform?.env?.GOOGLE_AUTH_CLIENT_SECRET,
				redirectProxyUrl: event?.platform?.env?.GOOGLE_AUTH_CALLBACK_URL
			})
		],
		secret: event?.platform?.env?.SESSION_SECRET,
		trustHost: true
	};
	return authOptions;
}) satisfies Handle;
