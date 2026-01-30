import { Injectable } from '@angular/core';

export interface TechTag {
    name: string;
    icon: string;
    color: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    fullDescription: string[];
    technologies: string[];
    tags: TechTag[];
    image: string;
    carouselImages: string[];
    githubLink: string;
}

// Mapeo de tecnologías a íconos y colores de Font Awesome
export const TECH_ICONS: { [key: string]: { icon: string, color: string } } = {
    'Java': { icon: 'fab fa-java', color: '#007396' },
    'Spring Boot': { icon: 'fas fa-leaf', color: '#6DB33F' },
    'React': { icon: 'fab fa-react', color: '#61DAFB' },
    'Next.js': { icon: 'fas fa-bolt', color: '#000000' },
    'MySQL': { icon: 'fas fa-database', color: '#4479A1' },
    'Tailwind': { icon: 'fas fa-wind', color: '#06B6D4' },
    'Docker': { icon: 'fab fa-docker', color: '#2496ED' },
    'Angular': { icon: 'fab fa-angular', color: '#DD0031' },
    'Python': { icon: 'fab fa-python', color: '#3776AB' },
    'Django': { icon: 'fas fa-server', color: '#092E20' },
    'PostgreSQL': { icon: 'fas fa-database', color: '#4169E1' },
    'HTML/CSS': { icon: 'fab fa-html5', color: '#E34F26' },
    'JavaScript': { icon: 'fab fa-js', color: '#F7DF1E' }
};

@Injectable({
    providedIn: 'root'
})
export class Projects {
    private projects: Project[] = [
        {
            id: 1,
            title: 'Startup CRM',
            description: 'CRM Inteligente para Startups con Integración Nativa de API de WhatsApp e Email.',
            fullDescription: [
                'Startup CRM es una solución integral de gestión de relaciones con clientes diseñada específicamente para startups y pequeñas empresas que buscan optimizar sus procesos de comunicación. ',
                ' El sistema integra de forma nativa las APIs de WhatsApp y Email, permitiendo una comunicación fluida y centralizada con los clientes desde una única plataforma. Esto facilita el seguimiento de conversaciones, la automatización de respuestas y la gestión eficiente de leads.'
            ],
            technologies: ['Java', 'Spring Boot', 'React', 'Next.js', 'MySQL', 'Tailwind', 'Docker'],
            tags: [
                { name: 'Java', icon: TECH_ICONS['Java'].icon, color: TECH_ICONS['Java'].color },
                { name: 'Spring Boot', icon: TECH_ICONS['Spring Boot'].icon, color: TECH_ICONS['Spring Boot'].color },
                { name: 'React', icon: TECH_ICONS['React'].icon, color: TECH_ICONS['React'].color },
                { name: 'Next.js', icon: TECH_ICONS['Next.js'].icon, color: TECH_ICONS['Next.js'].color },
                { name: 'MySQL', icon: TECH_ICONS['MySQL'].icon, color: TECH_ICONS['MySQL'].color },
                { name: 'Tailwind', icon: TECH_ICONS['Tailwind'].icon, color: TECH_ICONS['Tailwind'].color },
                { name: 'Docker', icon: TECH_ICONS['Docker'].icon, color: TECH_ICONS['Docker'].color }
            ],
            image: '/CRM/1.png',
            carouselImages: [
                '/CRM/1.png',
                '/CRM/2.png',
                '/CRM/3.png',
                '/CRM/4.png',
            ],
            githubLink: 'https://github.com/jhorgesub/crm-no-country.git'
        },
        {
            id: 2,
            title: 'Todo Click',
            description: 'Aplicación Web de E-commerce Moderna.',
            fullDescription: [
                'Todo Click es una plataforma de e-commerce moderna construida con las últimas tecnologías web, ofreciendo una experiencia de compra fluida y atractiva.',
                'La aplicación cuenta con un diseño responsive, carrito de compras interactivo, sistema de búsqueda y filtrado de productos, y una interfaz de usuario intuitiva que facilita la navegación y compra de productos.'
            ],
            technologies: ['Angular', 'Tailwind'],
            tags: [
                { name: 'Angular', icon: TECH_ICONS['Angular'].icon, color: TECH_ICONS['Angular'].color },
                { name: 'Tailwind', icon: TECH_ICONS['Tailwind'].icon, color: TECH_ICONS['Tailwind'].color }
            ],
            image: '/Todo_Click.png',
            carouselImages: ['/Todo_Click.png'],
            githubLink: 'https://github.com/jhorgesub/todoclick-ecommerce.git'
        },
        {
            id: 3,
            title: 'Jogo Bonito',
            description: 'Aplicación web para gestionar reservas de canchas de fútbol 5.',
            fullDescription: [
                'JOGO BONITO es una aplicación web para la gestión de reservas de canchas de fútbol 5. Desarrollada como proyecto final integrador para la Etapa 2 ("Diseño y Desarrollo Web") del Informatorio Chaco 2020.',
                ' El sistema permite a los usuarios registrarse y gestionar turnos de manera eficiente, optimizando la experiencia tanto para jugadores como para propietarios.'
            ],
            technologies: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS', 'JavaScript'],
            tags: [
                { name: 'Python', icon: TECH_ICONS['Python'].icon, color: TECH_ICONS['Python'].color },
                { name: 'Django', icon: TECH_ICONS['Django'].icon, color: TECH_ICONS['Django'].color },
                { name: 'PostgreSQL', icon: TECH_ICONS['PostgreSQL'].icon, color: TECH_ICONS['PostgreSQL'].color },
                { name: 'HTML/CSS', icon: TECH_ICONS['HTML/CSS'].icon, color: TECH_ICONS['HTML/CSS'].color },
                { name: 'JavaScript', icon: TECH_ICONS['JavaScript'].icon, color: TECH_ICONS['JavaScript'].color }
            ],
            image: 'imgJogoBonito/1.PNG',
            carouselImages: [
                'imgJogoBonito/1.PNG',
                'imgJogoBonito/2.PNG',
                'imgJogoBonito/4.PNG',
                'imgJogoBonito/5.PNG',
                'imgJogoBonito/12.PNG'
            ],
            githubLink: 'https://github.com/jhorgesub/Gestion_turnos'
        }
    ];

    getAllProjects(): Project[] {
        return this.projects;
    }

    getProjectById(id: number): Project | undefined {
        return this.projects.find(project => project.id === id);
    }
}
