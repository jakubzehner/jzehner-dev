import profileJson from '$lib/data/profile.json';
import { ProfileSchema } from '$lib/schemas/profile/schema';

export const prerender = true;

export const load = () => {
	return ProfileSchema.parse(profileJson);
};
