export const services = [
	{
		number: '01',
		title: 'Estrategia',
		description:
			'Ordenamos objetivos, público, propuesta y prioridades para definir qué debe resolver la web.',
		tags: ['Estrategia', 'Alcance', 'Prioridades'],
	},
	{
		number: '02',
		title: 'Experiencia',
		description:
			'Diseñamos la estructura, los recorridos y la dirección visual para facilitar decisiones.',
		tags: ['UX', 'Contenido', 'Dirección visual'],
	},
	{
		number: '03',
		title: 'Desarrollo',
		description:
			'Construimos una web rápida, responsive, accesible y preparada para mantenerse.',
		tags: ['Astro', 'Accesibilidad', 'Rendimiento'],
	},
	{
		number: '04',
		title: 'Evolución',
		description:
			'Acompañamos las mejoras posteriores con soporte, contenidos, optimización y nuevas funcionalidades.',
		tags: ['Soporte', 'Optimización', 'Evolución'],
	},
];

export const projects = [
	{
		slug: 'aurea-propiedades',
		url: 'https://aureapropiedades.vercel.app/',
		name: 'Áurea Propiedades',
		category: 'Inmobiliaria',
		service: 'Diseño y desarrollo web',
		year: 'Proyecto publicado',
		plan: 'Lanzamiento',
		accent: 'sand',
		summary:
			'Una experiencia inmobiliaria para descubrir propiedades y avanzar hacia una decisión con más claridad.',
		gallery: [
			{
				src: '/projects/aurea/a1.png',
				alt: 'Portada de Áurea Propiedades con buscador inmobiliario',
				label: 'Portada y buscador',
			},
			{
				src: '/projects/aurea/a2.png',
				alt: 'Selección de propiedades de Áurea Propiedades',
				label: 'Selección de propiedades',
			},
			{
				src: '/projects/aurea/a3.png',
				alt: 'Listado inmobiliario de Áurea Propiedades',
				label: 'Listado inmobiliario',
			},
			{
				src: '/projects/aurea/a4.png',
				alt: 'Detalle de una propiedad de Áurea Propiedades',
				label: 'Detalle de propiedad',
			},
			{
				src: '/projects/aurea/a5.png',
				alt: 'Información de una propiedad en Áurea Propiedades',
				label: 'Información y características',
			},
			{
				src: '/projects/aurea/a6.png',
				alt: 'Propuesta de valor de Áurea Propiedades',
				label: 'Propuesta de valor',
			},
			{
				src: '/projects/aurea/a7.png',
				alt: 'Método de trabajo y cierre de Áurea Propiedades',
				label: 'Método y cierre',
			},
		],
		problem:
			'Buscar una propiedad podía resultar disperso: había que cruzar operación, tipo de inmueble, ubicación, precio y cantidad de habitaciones.',
		solution:
			'Se construyó una experiencia editorial y funcional que permite explorar propiedades en venta o alquiler, filtrar la búsqueda y pasar de una selección a una consulta.',
		expectedResult:
			'Una búsqueda más clara y una presentación cuidada para ayudar a que cada persona encuentre opciones relevantes y avance hacia una visita o consulta.',
		deliverables: [
			'Arquitectura de información inmobiliaria',
			'Filtros de búsqueda',
			'Fichas de propiedades',
			'Diseño responsive',
			'Desarrollo web',
		],
	},
	{
		slug: 'casa-lumen',
		url: null,
		name: 'Casa Lumen',
		category: 'Negocio local',
		service: 'Diseño y experiencia móvil',
		year: 'Caso conceptual',
		plan: 'Reposicionamiento',
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
		url: null,
		name: 'Órbita Producto',
		category: 'Producto digital',
		service: 'Landing de lanzamiento',
		year: 'Caso conceptual',
		plan: 'Lanzamiento',
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
	{
		text: 'Tu oferta es buena, pero cuesta entenderla.',
		plan: 'Lanzamiento',
		href: '#plan-lanzamiento',
	},
	{
		text: 'Tu web ya no representa la calidad de tu negocio.',
		plan: 'Reposicionamiento',
		href: '#plan-reposicionamiento',
	},
	{
		text: 'Recibes visitas, pero pocas consultas.',
		plan: 'Reposicionamiento',
		href: '#plan-reposicionamiento',
	},
	{
		text: 'Necesitas lanzar algo nuevo y no sabes por dónde empezar.',
		plan: 'Lanzamiento',
		href: '#plan-lanzamiento',
	},
	{
		text: 'Tu operación necesita una solución más específica que una web tradicional.',
		plan: 'Sistema digital',
		href: '#plan-sistema-digital',
	},
];

export const pricingPlans = [
	{
		slug: 'lanzamiento',
		title: 'Lanzamiento',
		label: 'Para empezar',
		description:
			'Para profesionales, marcas personales y negocios que necesitan una presencia digital sólida para empezar a recibir consultas.',
		problem:
			'Tienes una oferta concreta, pero todavía no una web que la explique con claridad y genere confianza.',
		audience: 'Profesionales, marcas personales y negocios que empiezan.',
		features: [
			'Definición de objetivos y público',
			'Estructura de contenidos y copy de la página',
			'Diseño visual responsive',
			'Desarrollo web',
			'Formulario, email o WhatsApp',
			'Configuración básica de SEO',
			'Publicación y puesta en marcha',
		],
		result:
			'Una web lista para explicar lo que haces y facilitar el siguiente contacto.',
		duration: '2 a 4 semanas',
		cta: 'Quiero lanzar mi web',
	},
	{
		slug: 'reposicionamiento',
		title: 'Reposicionamiento',
		label: 'Si ya tienes web',
		description:
			'Para empresas y profesionales que ya tienen web, pero necesitan mejorar el mensaje, la estructura, el diseño o la conversión.',
		problem:
			'Tu web quedó atrás, no representa la calidad de tu negocio o recibe visitas que no se convierten en consultas.',
		audience:
			'Empresas y profesionales con una web que necesita una revisión profunda.',
		features: [
			'Auditoría de contenido y experiencia',
			'Revisión de propuesta de valor',
			'Nueva arquitectura de información',
			'Reorganización o reescritura de contenidos',
			'Rediseño visual y mejora de llamadas a la acción',
			'Desarrollo o migración',
			'Revisión responsive',
			'Medición básica de formularios y conversiones',
		],
		result: 'Una web más clara, actual y orientada a generar oportunidades.',
		duration: '4 a 6 semanas',
		cta: 'Quiero mejorar mi web',
	},
	{
		slug: 'sistema-digital',
		title: 'Sistema digital',
		label: 'Para negocios en crecimiento',
		description:
			'Para negocios que necesitan reservas, automatizaciones, áreas privadas, catálogos, gestión de clientes o integraciones específicas.',
		problem:
			'Una web estándar ya no cubre el proceso que tu negocio necesita organizar.',
		audience: 'Negocios en crecimiento con procesos digitales específicos.',
		features: [
			'Relevamiento del proceso',
			'Definición de alcance y prioridades',
			'Arquitectura técnica y diseño de la experiencia',
			'Reservas, formularios avanzados o áreas privadas',
			'Automatizaciones e integraciones externas',
			'Base de datos y desarrollo por etapas',
			'Soporte y evolución',
		],
		result:
			'Un sistema digital que conecta la experiencia del cliente con la operación del negocio.',
		duration: 'Por etapas, según alcance',
		cta: 'Diseñar mi sistema',
	},
];

export const planComparison = [
	[
		'Empezar desde cero',
		'Lanzamiento',
		'Web clara para presentar y captar consultas',
	],
	[
		'Mejorar una web existente',
		'Reposicionamiento',
		'Mejor mensaje, estructura y conversión',
	],
	[
		'Resolver procesos complejos',
		'Sistema digital',
		'Solución conectada con la operación',
	],
] as const;
