import projectsJson from '$lib/data/projects.json';
import { ProjectsSchema } from '$lib/schemas/project/schema';

export const load = () => {
    const result = ProjectsSchema.parse(projectsJson);
    return { projects: result.projects };
};