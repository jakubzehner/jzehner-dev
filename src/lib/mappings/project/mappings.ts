import type { ComponentType } from 'svelte';
import { ProjectLinkIconsEnum, ProjectTechnologyBadgesEnum } from '$lib/enums/project/enums';

import {
    SiAngular,
    SiC,
    SiCss,
    SiDiagramsdotnet,
    SiDocker,
    SiDotnet,
    SiElasticsearch,
    SiExpress,
    SiFastapi,
    SiFigma,
    SiGithub,
    SiGithubactions,
    SiGnubash,
    SiGooglecloud,
    SiGoogledocs,
    SiHono,
    SiHuggingface,
    SiJest,
    SiJunit5,
    SiKubernetes,
    SiLatex,
    SiLodash,
    SiNestjs,
    SiNumpy,
    SiOpenapiinitiative,
    SiPandas,
    SiPostgresql,
    SiPython,
    SiPytorch,
    SiReact,
    SiReactivex,
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
    SiVite,
    SiWebassembly,
} from '@icons-pack/svelte-simple-icons';

export type TechnologyBadgeConfig = {
    label: string;
    icon?: ComponentType;
};

export const PROJECT_LINK_ICON_MAP: Record<ProjectLinkIconsEnum, ComponentType> = {
    [ProjectLinkIconsEnum.Cloud]: SiGooglecloud,
    [ProjectLinkIconsEnum.Document]: SiGoogledocs,
    [ProjectLinkIconsEnum.Github]: SiGithub,
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

    // Languages
    [ProjectTechnologyBadgesEnum.CSharp]: { label: 'C#', icon: SiC },
    [ProjectTechnologyBadgesEnum.Java]: { label: 'Java' },
    [ProjectTechnologyBadgesEnum.Python]: { label: 'Python', icon: SiPython },
    [ProjectTechnologyBadgesEnum.Rust]: { label: 'Rust', icon: SiRust },
    [ProjectTechnologyBadgesEnum.Typescript]: { label: 'TypeScript', icon: SiTypescript },

    // Reactive / Utils
    [ProjectTechnologyBadgesEnum.Lodash]: { label: 'Lodash', icon: SiLodash },
    [ProjectTechnologyBadgesEnum.Reactivex]: { label: 'RxJS', icon: SiReactivex },

    // Tests
    [ProjectTechnologyBadgesEnum.Jest]: { label: 'Jest', icon: SiJest },
    [ProjectTechnologyBadgesEnum.Junit5]: { label: 'JUnit 5', icon: SiJunit5 },
    [ProjectTechnologyBadgesEnum.XUnitdotnet]: { label: 'xUnit.Net' },

    // DevOps / Infra
    [ProjectTechnologyBadgesEnum.AWS]: { label: "AWS" },
    [ProjectTechnologyBadgesEnum.Docker]: { label: 'Docker', icon: SiDocker },
    [ProjectTechnologyBadgesEnum.Github]: { label: 'GitHub', icon: SiGithub },
    [ProjectTechnologyBadgesEnum.Githubactions]: { label: 'GitHub Actions', icon: SiGithubactions },
    [ProjectTechnologyBadgesEnum.GnuBash]: { label: 'Bash', icon: SiGnubash },
    [ProjectTechnologyBadgesEnum.Kubernetes]: { label: 'Kubernetes', icon: SiKubernetes },
    [ProjectTechnologyBadgesEnum.Terraform]: { label: 'Terraform', icon: SiTerraform },

    // DB / Search
    [ProjectTechnologyBadgesEnum.Elasticsearch]: { label: 'Elasticsearch', icon: SiElasticsearch },
    [ProjectTechnologyBadgesEnum.Postgresql]: { label: 'PostgreSQL', icon: SiPostgresql },

    // API / Docs / Modeling
    [ProjectTechnologyBadgesEnum.Diagramsdotnet]: { label: 'Diagrams.net', icon: SiDiagramsdotnet },
    [ProjectTechnologyBadgesEnum.Latex]: { label: 'LaTeX', icon: SiLatex },
    [ProjectTechnologyBadgesEnum.Openapiinitiative]: { label: 'OpenAPI', icon: SiOpenapiinitiative },
    [ProjectTechnologyBadgesEnum.Uml]: { label: 'UML', icon: SiUml },

    // AI / Data
    [ProjectTechnologyBadgesEnum.Huggingface]: { label: 'Hugging Face Transformers', icon: SiHuggingface },
    [ProjectTechnologyBadgesEnum.Matplotlib]: { label: 'Matplotlib' },
    [ProjectTechnologyBadgesEnum.Numpy]: { label: 'NumPy', icon: SiNumpy },
    [ProjectTechnologyBadgesEnum.Pandas]: { label: 'Pandas', icon: SiPandas },
    [ProjectTechnologyBadgesEnum.Pytorch]: { label: 'PyTorch', icon: SiPytorch },
    [ProjectTechnologyBadgesEnum.Scikitlearn]: { label: 'Scikit-learn', icon: SiScikitlearn },

    // Runtime
    [ProjectTechnologyBadgesEnum.Vite]: { label: 'Vite', icon: SiVite },
    [ProjectTechnologyBadgesEnum.Webassembly]: { label: 'WebAssembly', icon: SiWebassembly },
};