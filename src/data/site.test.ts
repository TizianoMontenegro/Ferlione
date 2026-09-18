import { describe, expect, test } from 'bun:test';
import { problems, processSteps, projects, services } from './site';

describe('contenido del portfolio', () => {
	test('incluye el contenido mínimo del MVP', () => {
		expect(projects.length).toBeGreaterThanOrEqual(3);
		expect(services).toHaveLength(4);
		expect(processSteps).toHaveLength(4);
		expect(problems.length).toBeGreaterThanOrEqual(4);
	});

	test('cada proyecto tiene una ruta y un caso completo', () => {
		const slugs = new Set(projects.map((project) => project.slug));

		expect(slugs.size).toBe(projects.length);
		for (const project of projects) {
			expect(project.summary.length).toBeGreaterThan(20);
			expect(project.problem.length).toBeGreaterThan(20);
			expect(project.solution.length).toBeGreaterThan(20);
			expect(project.expectedResult.length).toBeGreaterThan(20);
			expect(project.deliverables.length).toBeGreaterThan(0);
		}
	});
});
