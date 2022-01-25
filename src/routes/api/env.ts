import type { RequestHandler } from '@sveltejs/kit';
import dotenv from 'dotenv';

dotenv.config();

export const get: RequestHandler = () => ({
	status: 200,
	body: JSON.stringify({ process: process.env, vite: import.meta.env })
});
