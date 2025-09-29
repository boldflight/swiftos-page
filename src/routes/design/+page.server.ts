import { loadYamlContent } from '$lib/content.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const page = loadYamlContent('design.yml');

	return {
		page
	};
};