<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		SiNestjs,
		SiTypescript,
		SiHono,
		SiReactivex,
		SiExpress,
		SiJest,
		SiSpring,
		SiSpringboot,
		SiJunit5,
		SiKubernetes,
		SiDocker,
		SiTerraform,
		SiPostgresql,
		SiOpenapiinitiative,
		SiGithub,
		SiGithubactions,
		SiFigma,
		SiUml,
		SiGoogledocs
	} from '@icons-pack/svelte-simple-icons';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title><span class="text-xl font-bold">JakPrzyjade</span></Card.Title>
	</Card.Header>
	<Card.Content>
		<p>
			A microservice-based public transit ticketing system. It consists of a set of services that
			handle various aspects of public transport ticketing, such as user accounts, ticket purchases,
			and payment processing. Designed and implemented for the Software System Design university
			course.
		</p>

		<div class="pt-3">
			Services
			<div class="flex flex-wrap gap-1 p-1">
				<Badge variant="secondary">Java</Badge>
				<Badge variant="secondary"><SiTypescript /> TypeScript</Badge>
				<Badge variant="secondary"><SiSpring /> Spring</Badge>
				<Badge variant="secondary"><SiSpringboot /> Spring Boot</Badge>
				<Badge variant="secondary"><SiJunit5 /> JUnit 5</Badge>
				<Badge variant="secondary"><SiNestjs /> NestJs</Badge>
				<Badge variant="secondary"><SiHono /> Hono</Badge>
				<Badge variant="secondary"><SiReactivex /> RxJs</Badge>
				<Badge variant="secondary"><SiExpress /> Express</Badge>
				<Badge variant="secondary"><SiJest /> Jest</Badge>
			</div>
		</div>

		<div class="pt-3">
			Deployment
			<div class="flex flex-wrap gap-1 p-1">
				<Badge variant="secondary"><SiKubernetes /> Kubernetes</Badge>
				<Badge variant="secondary"><SiDocker /> Docker</Badge>
				<Badge variant="secondary"><SiTerraform /> Terraform</Badge>
				<Badge variant="secondary"><SiPostgresql /> PostgreSQL</Badge>
				<Badge variant="secondary">AWS</Badge>
			</div>
		</div>

		<div class="pt-3">
			Tools
			<div class="flex flex-wrap gap-1 p-1">
				<Badge variant="secondary"><SiUml /> UML</Badge>
				<Badge variant="secondary"><SiOpenapiinitiative /> OpenAPI</Badge>
				<Badge variant="secondary"><SiFigma /> Figma</Badge>
				<Badge variant="secondary"><SiGithub /> GitHub</Badge>
				<Badge variant="secondary"><SiGithubactions /> GitHub Actions</Badge>
			</div>
		</div>
	</Card.Content>
	<Card.Footer>
		<div class="flex flex-wrap gap-1 p-1">
			<Button
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/PWR-ACS-SE-24/SoftwareSystemDesign"><SiGithub /> Repository</Button
			>
			<Button
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/PWR-ACS-SE-24/SoftwareSystemDesign/tree/main/documentation/course/e1/README.md"
				><SiGoogledocs /> Business modeling, specification, and requirements analysis (PL)</Button
			>
			<Button
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/PWR-ACS-SE-24/SoftwareSystemDesign/tree/main/documentation/course/e2/README.md"
				><SiGoogledocs /> Definition of system architecture (PL)</Button
			>
			<Button
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/PWR-ACS-SE-24/SoftwareSystemDesign/tree/main/documentation/course/e3/README.md"
				><SiGoogledocs /> Implementation report (PL)</Button
			>
		</div>
	</Card.Footer>
</Card.Root>
