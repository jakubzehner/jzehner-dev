import { z } from 'zod';
import { ProjectTechnologyBadgesEnum, ProjectLinkIconsEnum } from '$lib/enums/project/enums';

export const ProjectLinkIconsSchema = z.enum(ProjectLinkIconsEnum);
export const ProjectTechnologyBadgesSchema = z.enum(ProjectTechnologyBadgesEnum);

export const ProjectLinkSchema = z.object({
	label: z.string(),
	href: z.string(),
	icon: ProjectLinkIconsSchema
});

export const ProjectTechnologySchema = z.object({
	category: z.string(),
	badges: z.array(ProjectTechnologyBadgesSchema)
});

export const ProjectSchema = z.object({
	title: z.string(),
	subtitle: z.string().optional(),
	description: z.string(),
	technologies: z.array(ProjectTechnologySchema),
	buttons: z.array(ProjectLinkSchema)
});

export const ProjectsSchema = z.object({
	projects: z.array(ProjectSchema)
});

export type ProjectLinkIcons = z.infer<typeof ProjectLinkIconsSchema>;
export type ProjectTechnologyBadges = z.infer<typeof ProjectTechnologyBadgesSchema>;
export type ProjectLink = z.infer<typeof ProjectLinkSchema>;
export type ProjectTechnology = z.infer<typeof ProjectTechnologySchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Projects = z.infer<typeof ProjectsSchema>;
