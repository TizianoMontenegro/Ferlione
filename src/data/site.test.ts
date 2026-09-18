import { describe, expect, test } from 'bun:test';
import {
	pricingPlans,
	problems,
	processSteps,
	projects,
	services,
} from './site';

describe('contenido del portfolio', () => {
	test('incluye el contenido mínimo del MVP', () => {
		expect(projects.length).toBeGreaterThanOrEqual(3);
		expect(services).toHaveLength(4);
		expect(processSteps).toHaveLength(4);
		expect(problems.length).toBeGreaterThanOrEqual(4);
		expect(pricingPlans).toHaveLength(4);
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

	test('el primer proyecto corresponde a Áurea Propiedades', () => {
		expect(projects[0].name).toBe('Áurea Propiedades');
		expect(projects[0].gallery).toHaveLength(7);
		expect(projects[0].year).toBe('Proyecto publicado');
	});

	test('cada plan explica su alcance y siguiente acción', () => {
		for (const plan of pricingPlans) {
			expect(plan.problem.length).toBeGreaterThan(20);
			expect(plan.audience.length).toBeGreaterThan(10);
			expect(plan.features.length).toBeGreaterThan(0);
			expect(plan.cta.length).toBeGreaterThan(5);
		}
	});
});
