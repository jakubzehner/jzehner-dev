import type { Component, ComponentType } from 'svelte';
import { ProjectLinkIconsEnum, ProjectTechnologyBadgesEnum } from '$lib/enums/project/enums';

import type { IconProps } from '@lucide/svelte';
import FileText from '@lucide/svelte/icons/file-text';
import Github from '@lucide/svelte/icons/github';
import Globe from '@lucide/svelte/icons/globe';

import {
	SiAngular,
	SiC,
	SiCloudflare,
	SiCplusplus,
	SiCrystal,
	SiCss,
	SiD,
	SiDart,
	SiDiagramsdotnet,
	SiDocker,
	SiDotnet,
	SiElasticsearch,
	SiExpress,
	SiFastapi,
	SiFigma,
	SiFsharp,
	SiGithub,
	SiGithubactions,
	SiGleam,
	SiGnubash,
	SiGooglecloud,
	SiGooglegemini,
	SiHono,
	SiHuggingface,
	SiJavascript,
	SiJest,
	SiJulia,
	SiJunit5,
	SiKubernetes,
	SiLatex,
	SiLodash,
	SiMongodb,
	SiNestjs,
	SiNumpy,
	SiOcaml,
	SiOpenapiinitiative,
	SiPandas,
	SiPostgresql,
	SiPython,
	SiPytorch,
	SiR,
	SiReact,
	SiReactivex,
	SiReason,
	SiRuby,
	SiRuff,
	SiRust,
	SiScikitlearn,
	SiShadcnui,
	SiSpring,
	SiSpringboot,
	SiSvelte,
	SiTailwindcss,
	SiTerraform,
	SiTypescript,
	SiUml,
	SiUv,
	SiV,
	SiVite,
	SiWebassembly,
	SiZod
} from '@icons-pack/svelte-simple-icons';

export type TechnologyBadgeConfig = {
	label: string;
	icon?: ComponentType;
};

export const PROJECT_LINK_ICON_MAP: Record<ProjectLinkIconsEnum, Component<IconProps>> = {
	[ProjectLinkIconsEnum.Cloud]: Globe,
	[ProjectLinkIconsEnum.Document]: FileText,
	[ProjectLinkIconsEnum.Github]: Github
};

export const TECHNOLOGY_BADGE_MAP: Record<ProjectTechnologyBadgesEnum, TechnologyBadgeConfig> = {
	// Frontend / UI
	[ProjectTechnologyBadgesEnum.Angular]: { label: 'Angular', icon: SiAngular },
	[ProjectTechnologyBadgesEnum.Css]: { label: 'CSS', icon: SiCss },
	[ProjectTechnologyBadgesEnum.Figma]: { label: 'Figma', icon: SiFigma },
	[ProjectTechnologyBadgesEnum.React]: { label: 'React', icon: SiReact },
	[ProjectTechnologyBadgesEnum.Reactnative]: { label: 'React Native', icon: SiReact },
	[ProjectTechnologyBadgesEnum.Shadcnui]: { label: 'Shadcn-svelte', icon: SiShadcnui },
	[ProjectTechnologyBadgesEnum.Svelte]: { label: 'Svelte', icon: SiSvelte },
	[ProjectTechnologyBadgesEnum.Sveltekit]: { label: 'SvelteKit', icon: SiSvelte },
	[ProjectTechnologyBadgesEnum.Tailwindcss]: { label: 'Tailwind CSS', icon: SiTailwindcss },

	// Backend / Frameworks
	[ProjectTechnologyBadgesEnum.Dotnet]: { label: '.NET', icon: SiDotnet },
	[ProjectTechnologyBadgesEnum.Entityframework]: { label: 'Entity Framework' },
	[ProjectTechnologyBadgesEnum.Express]: { label: 'Express', icon: SiExpress },
	[ProjectTechnologyBadgesEnum.Fastapi]: { label: 'FastAPI', icon: SiFastapi },
	[ProjectTechnologyBadgesEnum.Hono]: { label: 'Hono', icon: SiHono },
	[ProjectTechnologyBadgesEnum.Mediatr]: { label: 'MediatR' },
	[ProjectTechnologyBadgesEnum.Nestjs]: { label: 'NestJS', icon: SiNestjs },
	[ProjectTechnologyBadgesEnum.Spring]: { label: 'Spring', icon: SiSpring },
	[ProjectTechnologyBadgesEnum.Springboot]: { label: 'Spring Boot', icon: SiSpringboot },
	[ProjectTechnologyBadgesEnum.Sqlmodel]: { label: 'SQLModel' },

	// Languages
	[ProjectTechnologyBadgesEnum.C]: { label: 'C', icon: SiC },
	[ProjectTechnologyBadgesEnum.CSharp]: { label: 'C#' },
	[ProjectTechnologyBadgesEnum.Cplusplus]: { label: 'C++', icon: SiCplusplus },
	[ProjectTechnologyBadgesEnum.Crystal]: { label: 'Crystal', icon: SiCrystal },
	[ProjectTechnologyBadgesEnum.D]: { label: 'D', icon: SiD },
	[ProjectTechnologyBadgesEnum.Dart]: { label: 'Dart', icon: SiDart },
	[ProjectTechnologyBadgesEnum.Fsharp]: { label: 'F#', icon: SiFsharp },
	[ProjectTechnologyBadgesEnum.Gleam]: { label: 'Gleam', icon: SiGleam },
	[ProjectTechnologyBadgesEnum.Java]: { label: 'Java' },
	[ProjectTechnologyBadgesEnum.Javascript]: { label: 'JavaScript', icon: SiJavascript },
	[ProjectTechnologyBadgesEnum.Julia]: { label: 'Julia', icon: SiJulia },
	[ProjectTechnologyBadgesEnum.Ocaml]: { label: 'OCaml', icon: SiOcaml },
	[ProjectTechnologyBadgesEnum.Python]: { label: 'Python', icon: SiPython },
	[ProjectTechnologyBadgesEnum.R]: { label: 'R', icon: SiR },
	[ProjectTechnologyBadgesEnum.Reasonml]: { label: 'ReasonML', icon: SiReason },
	[ProjectTechnologyBadgesEnum.Ruby]: { label: 'Ruby', icon: SiRuby },
	[ProjectTechnologyBadgesEnum.Rust]: { label: 'Rust', icon: SiRust },
	[ProjectTechnologyBadgesEnum.Typescript]: { label: 'TypeScript', icon: SiTypescript },
	[ProjectTechnologyBadgesEnum.V]: { label: 'V', icon: SiV },
	[ProjectTechnologyBadgesEnum.Visualbasic]: { label: 'Visual Basic' },

	// Reactive / Utils
	[ProjectTechnologyBadgesEnum.Lodash]: { label: 'Lodash', icon: SiLodash },
	[ProjectTechnologyBadgesEnum.Reactivex]: { label: 'RxJS', icon: SiReactivex },
	[ProjectTechnologyBadgesEnum.Zod]: { label: 'Zod', icon: SiZod },

	// Tests
	[ProjectTechnologyBadgesEnum.Jest]: { label: 'Jest', icon: SiJest },
	[ProjectTechnologyBadgesEnum.Junit5]: { label: 'JUnit 5', icon: SiJunit5 },
	[ProjectTechnologyBadgesEnum.XUnitdotnet]: { label: 'xUnit.Net' },

	// DevOps / Infra
	[ProjectTechnologyBadgesEnum.AWS]: { label: 'AWS' },
	[ProjectTechnologyBadgesEnum.Cloudflare]: { label: 'Cloudflare', icon: SiCloudflare },
	[ProjectTechnologyBadgesEnum.Docker]: { label: 'Docker', icon: SiDocker },
	[ProjectTechnologyBadgesEnum.Github]: { label: 'GitHub', icon: SiGithub },
	[ProjectTechnologyBadgesEnum.Githubactions]: { label: 'GitHub Actions', icon: SiGithubactions },
	[ProjectTechnologyBadgesEnum.GnuBash]: { label: 'Bash', icon: SiGnubash },
	[ProjectTechnologyBadgesEnum.Googlecloud]: { label: 'Google Cloud', icon: SiGooglecloud },
	[ProjectTechnologyBadgesEnum.Kubernetes]: { label: 'Kubernetes', icon: SiKubernetes },
	[ProjectTechnologyBadgesEnum.Ruff]: { label: 'Ruff', icon: SiRuff },
	[ProjectTechnologyBadgesEnum.Terraform]: { label: 'Terraform', icon: SiTerraform },
	[ProjectTechnologyBadgesEnum.Uv]: { label: 'uv', icon: SiUv },

	// DB / Search
	[ProjectTechnologyBadgesEnum.Elasticsearch]: { label: 'Elasticsearch', icon: SiElasticsearch },
	[ProjectTechnologyBadgesEnum.Mongodb]: { label: 'MongoDB', icon: SiMongodb },
	[ProjectTechnologyBadgesEnum.Postgresql]: { label: 'PostgreSQL', icon: SiPostgresql },

	// API / Docs / Modeling
	[ProjectTechnologyBadgesEnum.Diagramsdotnet]: { label: 'Diagrams.net', icon: SiDiagramsdotnet },
	[ProjectTechnologyBadgesEnum.Latex]: { label: 'LaTeX', icon: SiLatex },
	[ProjectTechnologyBadgesEnum.Openapiinitiative]: { label: 'OpenAPI', icon: SiOpenapiinitiative },
	[ProjectTechnologyBadgesEnum.Uml]: { label: 'UML', icon: SiUml },

	// AI / Data
	[ProjectTechnologyBadgesEnum.Googlegemini]: { label: 'Gemini API', icon: SiGooglegemini },
	[ProjectTechnologyBadgesEnum.Huggingface]: {
		label: 'Hugging Face Transformers',
		icon: SiHuggingface
	},
	[ProjectTechnologyBadgesEnum.Matplotlib]: { label: 'Matplotlib' },
	[ProjectTechnologyBadgesEnum.Numpy]: { label: 'NumPy', icon: SiNumpy },
	[ProjectTechnologyBadgesEnum.Pandas]: { label: 'Pandas', icon: SiPandas },
	[ProjectTechnologyBadgesEnum.Pytorch]: { label: 'PyTorch', icon: SiPytorch },
	[ProjectTechnologyBadgesEnum.Scikitlearn]: { label: 'Scikit-learn', icon: SiScikitlearn },

	// Runtime
	[ProjectTechnologyBadgesEnum.Vite]: { label: 'Vite', icon: SiVite },
	[ProjectTechnologyBadgesEnum.Webassembly]: { label: 'WebAssembly', icon: SiWebassembly }
};
