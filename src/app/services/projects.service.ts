import { Injectable } from '@angular/core';

export interface TechTag {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  id: number;
  title: { es: string; en: string };
  description: { es: string; en: string };
  fullDescription: { es: string[]; en: string[] };
  technologies: string[];
  tags?: TechTag[]; 
  image: string;
  carouselImages: string[];
  githubLink: string;
}

export const TECH_ICONS: { [key: string]: { icon: string; color: string } } = {
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
export class ProjectsService {
  private projectsRaw: Project[] = [
    {
      id: 1,
      title: { es: 'CRM para Startups', en: 'Startup CRM' },
      description: { 
        es: 'CRM Inteligente para Startups con Integración Nativa de API de WhatsApp e Email.', 
        en: 'Smart CRM for Startups with Native WhatsApp and Email API Integration.' 
      },
      fullDescription: {
        es: [
          'Startup CRM es una solución integral de gestión de relaciones con clientes diseñada específicamente para startups y pequeñas empresas que buscan optimizar sus procesos de comunicación.',
          'El sistema integra de forma nativa las APIs de WhatsApp y Email, permitiendo una comunicación fluida y centralizada desde una única plataforma.'
        ],
        en: [
          'Startup CRM is a comprehensive customer relationship management solution designed for startups and small businesses to optimize their communication processes.',
          'The system natively integrates WhatsApp and Email APIs, allowing for fluid and centralized communication from a single platform.'
        ]
      },
      technologies: ['Java', 'Spring Boot', 'React', 'Next.js', 'MySQL', 'Tailwind', 'Docker'],
      image: '/CRM/1.png',
      carouselImages: ['/CRM/1.png', '/CRM/2.png', '/CRM/3.png', '/CRM/4.png'],
      githubLink: 'https://github.com/jhorgesub/crm-no-country.git'
    },
    {
      id: 2,
      title: { es: 'Todo Click', en: 'Todo Click' },
      description: { es: 'Aplicación Web de E-Commerce Moderna.', en: 'Modern E-commerce Web App' },
      fullDescription: {
        es: [
          'TodoClick es una plataforma de e-commerce de alto rendimiento desarrollada con Angular y diseñada bajo principios de arquitectura escalable.',
          'Implementa un sistema de gestión de estado reactivo para el carrito de compras, un buscador dinámico de productos y una interfaz responsiva optimizada con Tailwind CSS, garantizando una experiencia fluida en cualquier dispositivo.'
        ],
        en: [
          'TodoClick is a high-performance e-commerce platform built with Angular and designed under scalable architecture principles.',
          'It features a reactive state management system for the shopping cart, a dynamic product search engine, and a responsive interface optimized with Tailwind CSS, ensuring a seamless experience across all devices.'
        ]
      },
      technologies: ['Angular', 'Tailwind'],
      image: '/Todo_Click.png',
      carouselImages: ['/Todo_Click.png'],
      githubLink: 'https://github.com/jhorgesub/todoclick-ecommerce.git'
    },
    {
      id: 3,
      title: { es: 'Jogo Bonito', en: 'Jogo Bonito' },
      description: { 
        es: 'Gestión de reservas de canchas de Fútbol 5.', 
        en: 'Management of 5-a-side football field reservations.' 
      },
      fullDescription: {
        es: [
          'JOGO BONITO es una plataforma integral para la gestión de reservas de canchas de Fútbol 5. El sistema optimiza la administración de alquileres mediante un panel de control para propietarios y una interfaz intuitiva para jugadores.',
          'Desarrollado originalmente como proyecto final para la etapa 2 (Desarrollo Web) del Informatorio Chaco 2020, implementa una arquitectura basada en roles que garantiza seguridad y escalabilidad en el manejo de turnos y usuarios.'
        ],
        en: [
          'JOGO BONITO is a comprehensive platform for sports center reservation management. The system optimizes rental administration through a dedicated control panel for owners and an intuitive interface for players.',
          'Originally developed as a final project for Phase 2 (Web Development) of Informatorio Chaco 2020, it implements a role-based architecture that ensures security and scalability for managing appointments and users.'
        ]
      },
      technologies: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS', 'JavaScript'],
      image: 'imgJogoBonito/1.PNG',
      carouselImages: ['imgJogoBonito/1.PNG', 'imgJogoBonito/2.PNG'],
      githubLink: 'https://github.com/jhorgesub/Gestion_turnos'
    }
  ];

  getAllProjects(): Project[] {
    return this.projectsRaw.map(project => ({
      ...project,
      tags: project.technologies.map(tech => ({
        name: tech,
        icon: TECH_ICONS[tech]?.icon || 'fas fa-code',
        color: TECH_ICONS[tech]?.color || '#ccc'
      }))
    }));
  }

  getProjectById(id: number): Project | undefined {
    const project = this.projectsRaw.find(p => p.id === id);
    if (!project) return undefined;

    return {
      ...project,
      tags: project.technologies.map(tech => ({
        name: tech,
        icon: TECH_ICONS[tech]?.icon || 'fas fa-code',
        color: TECH_ICONS[tech]?.color || '#ccc'
      }))
    };
  }
}