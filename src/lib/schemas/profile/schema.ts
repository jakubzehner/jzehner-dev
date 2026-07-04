import { z } from 'zod';
import { ProjectTechnologyBadgesSchema } from '../project/schema';

export const ProfileInfoSchema = z.object({
	name: z.string(),
	role: z.string(),
	location: z.string(),
	email: z.email(),
	github: z.url(),
	linkedin: z.url(),
	intro: z.string()
});

export const ExperienceEntrySchema = z.object({
	role: z.string(),
	company: z.string(),
	companyUrl: z.url().optional(),
	period: z.string(),
	location: z.string(),
	summary: z.string()
});

export const EducationLinkSchema = z.object({
	label: z.string(),
	href: z.string()
});

export const EducationHighlightSchema = z.object({
	label: z.string(),
	href: z.string().optional()
});

export const EducationEntrySchema = z.object({
	degree: z.string(),
	field: z.string(),
	school: z.string(),
	period: z.string(),
	grade: z.string().optional(),
	thesis: EducationLinkSchema.optional(),
	highlights: z.array(EducationHighlightSchema).optional()
});

export const StackGroupSchema = z.object({
	category: z.string(),
	badges: z.array(ProjectTechnologyBadgesSchema)
});

export const ProfileSchema = z.object({
	profile: ProfileInfoSchema,
	experience: z.array(ExperienceEntrySchema),
	education: z.array(EducationEntrySchema),
	stack: z.array(StackGroupSchema)
});

export type ProfileInfo = z.infer<typeof ProfileInfoSchema>;
export type ExperienceEntry = z.infer<typeof ExperienceEntrySchema>;
export type EducationLink = z.infer<typeof EducationLinkSchema>;
export type EducationHighlight = z.infer<typeof EducationHighlightSchema>;
export type EducationEntry = z.infer<typeof EducationEntrySchema>;
export type StackGroup = z.infer<typeof StackGroupSchema>;
export type Profile = z.infer<typeof ProfileSchema>;
