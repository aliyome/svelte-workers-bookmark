/// <reference types="@cloudflare/workers-types" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env?: {
				SESSION_SECRET: string;
				GOOGLE_AUTH_CALLBACK_URL: string;
				GOOGLE_AUTH_CLIENT_ID: string;
				GOOGLE_AUTH_CLIENT_SECRET: string;

				SESSION_KV: KVNamespace;
				DB: D1Database;
			};
		}
	}
}

export {};
