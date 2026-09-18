export const services = [
	{
		number: '01',
		title: 'Definir la idea',
		description:
			'Ordenamos objetivos, público, propuesta y prioridades para convertir una intuición en un proyecto posible.',
		tags: ['Estrategia', 'Alcance', 'Prioridades'],
	},
	{
		number: '02',
		title: 'Diseñar la experiencia',
		description:
			'Construimos una estructura clara y una dirección visual que ayudan a entender y elegir.',
		tags: ['UX', 'Contenido', 'Dirección visual'],
	},
	{
		number: '03',
		title: 'Desarrollar desde cero',
		description:
			'Implementamos una web rápida, responsive y mantenible, preparada para publicar y crecer.',
		tags: ['Astro', 'Accesibilidad', 'Rendimiento'],
	},
	{
		number: '04',
		title: 'Mejorar cada mes',
		description:
			'Acompañamos la evolución con soporte, contenido y mejoras guiadas por las prioridades del negocio.',
		tags: ['Soporte', 'Optimización', 'Evolución'],
	},
];

export const projects = [
	{
		slug: 'norte-estudio',
		name: 'Norte Estudio',
		category: 'Marca profesional',
		service: 'Estructura y desarrollo web',
		year: 'Caso conceptual',
		accent: 'sand',
		summary:
			'Una presencia digital clara para convertir experiencia en conversaciones.',
		gallery: [
			{
				src: '/columns-marble.jpeg',
				alt: 'Vista conceptual de Norte Estudio',
				label: 'Vista principal',
			},
			{
				src: '/black-marble-texture.jpeg',
				alt: 'Detalle conceptual de Norte Estudio',
				label: 'Detalle de contenido',
			},
			{
				src: '/black-volcanic-stone-texture.jpeg',
				alt: 'Vista móvil conceptual de Norte Estudio',
				label: 'Experiencia responsive',
			},
		],
		problem:
			'La propuesta de valor estaba repartida entre distintos canales y era difícil entender el siguiente paso.',
		solution:
			'Se organizó la oferta alrededor de problemas concretos, se redujo la navegación y se llevó la conversación al contacto.',
		expectedResult:
			'Ejemplo de cómo una estructura editorial puede hacer más comprensible un servicio profesional.',
		deliverables: [
			'Estrategia de contenidos',
			'Arquitectura de información',
			'Diseño responsive',
			'Desarrollo web',
		],
	},
	{
		slug: 'casa-lumen',
		name: 'Casa Lumen',
		category: 'Negocio local',
		service: 'Diseño y experiencia móvil',
		year: 'Caso conceptual',
		accent: 'red',
		summary:
			'Una web directa para que visitar, reservar y volver resulte sencillo.',
		gallery: [
			{
				src: '/black-volcanic-stone-texture.jpeg',
				alt: 'Vista conceptual de Casa Lumen',
				label: 'Vista principal',
			},
			{
				src: '/columns-marble.jpeg',
				alt: 'Detalle conceptual de Casa Lumen',
				label: 'Detalle de contenido',
			},
			{
				src: '/black-marble-texture.jpeg',
				alt: 'Vista móvil conceptual de Casa Lumen',
				label: 'Experiencia responsive',
			},
		],
		problem:
			'La marca tenía una oferta atractiva, pero la información importante quedaba escondida en una experiencia poco adaptable.',
		solution:
			'Se priorizaron horarios, propuesta y contacto desde móvil, con una identidad cálida y una jerarquía más precisa.',
		expectedResult:
			'Ejemplo de cómo una web puede reducir dudas antes de una primera consulta.',
		deliverables: [
			'Mapa de contenidos',
			'Sistema visual',
			'Interfaz móvil',
			'Formulario de contacto',
		],
	},
	{
		slug: 'orbita-producto',
		name: 'Órbita Producto',
		category: 'Producto digital',
		service: 'Landing de lanzamiento',
		year: 'Caso conceptual',
		accent: 'blue',
		summary:
			'Una página de lanzamiento con foco en explicar, demostrar y activar.',
		gallery: [
			{
				src: '/black-marble-texture.jpeg',
				alt: 'Vista conceptual de Órbita Producto',
				label: 'Vista principal',
			},
			{
				src: '/black-volcanic-stone-texture.jpeg',
				alt: 'Detalle conceptual de Órbita Producto',
				label: 'Detalle de contenido',
			},
			{
				src: '/columns-marble.jpeg',
				alt: 'Vista móvil conceptual de Órbita Producto',
				label: 'Experiencia responsive',
			},
		],
		problem:
			'El producto resolvía un problema real, pero la página hablaba demasiado de funciones y poco del resultado.',
		solution:
			'Se ordenó el argumento de venta por contexto, beneficio, prueba y llamada a la acción.',
		expectedResult:
			'Ejemplo de cómo una landing puede acompañar la decisión sin saturar de información.',
		deliverables: [
			'Posicionamiento',
			'Copy de conversión',
			'Componentes UI',
			'Implementación técnica',
		],
	},
];

export const processSteps = [
	[
		'01',
		'Entender',
		'Empezamos por el negocio, el objetivo y el problema que la web tiene que resolver.',
	],
	[
		'02',
		'Ordenar',
		'Definimos estructura, contenido y prioridades antes de convertir decisiones en pantallas.',
	],
	[
		'03',
		'Construir',
		'Diseñamos y desarrollamos una experiencia responsive, accesible y fácil de mantener.',
	],
	[
		'04',
		'Avanzar',
		'Publicamos, observamos lo que ocurre y elegimos la siguiente mejora con criterio.',
	],
];

export const problems = [
	'Tu web no explica con claridad lo que vendes.',
	'Tu marca creció, pero tu sitio se quedó atrás.',
	'Recibes visitas y pocas conversaciones.',
	'Necesitas lanzar una oferta sin improvisar.',
];

export const pricingPlans = [
	{
		title: 'Presencia inicial',
		label: 'Para empezar',
		description:
			'Una landing page clara para presentar tu propuesta y empezar a recibir consultas.',
		problem:
			'Tienes una oferta concreta, pero todavía no una presencia online que la explique y genere confianza.',
		audience:
			'Negocios locales, profesionales independientes y marcas personales.',
		features: [
			'Estructura y copy de una landing page',
			'Diseño responsive y desarrollo web',
			'Contacto por WhatsApp o formulario',
		],
		cta: 'Hablar de mi presencia inicial',
	},
	{
		title: 'Mejora digital',
		label: 'Si ya tienes web',
		description:
			'Rediseño de una web existente para modernizarla, ordenar el mensaje y hacerla más efectiva.',
		problem:
			'Tu web quedó atrás, no representa la calidad de tu negocio o recibe visitas que no se convierten en consultas.',
		audience:
			'Negocios y profesionales con una web que necesita una revisión profunda.',
		features: [
			'Auditoría de contenido y experiencia',
			'Reestructuración y nuevo diseño responsive',
			'Mejora de llamadas a la acción y contacto',
		],
		cta: 'Mejorar mi web',
	},
	{
		title: 'Presencia profesional',
		label: 'Para mostrar tu recorrido',
		description:
			'Una web corporativa completa para mostrar servicios, experiencia y casos de éxito con claridad.',
		problem:
			'Necesitas una base sólida para explicar lo que haces, respaldar tu experiencia y facilitar el siguiente paso.',
		audience:
			'Empresas de servicios, estudios y profesionales con una oferta consolidada.',
		features: [
			'Arquitectura de páginas y contenidos',
			'Diseño de servicios, equipo y casos',
			'Desarrollo, publicación y formulario de contacto',
		],
		cta: 'Pedir una propuesta',
		featured: true,
	},
	{
		title: 'Sistema de crecimiento',
		label: 'Solución personalizada',
		description:
			'Una solución digital conectada a la operación de tu negocio para captar y gestionar oportunidades.',
		problem:
			'Tu negocio necesita reservas, automatizaciones, un área privada o una gestión de clientes que una web estándar no cubre.',
		audience:
			'Negocios en expansión y equipos con procesos digitales específicos.',
		features: [
			'Relevamiento del proceso y alcance',
			'Reservas, automatizaciones o áreas privadas',
			'Integraciones y evolución por etapas',
		],
		cta: 'Diseñar mi sistema',
	},
];
