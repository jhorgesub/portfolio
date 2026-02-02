import { Injectable, signal } from '@angular/core';


export interface Content {
  hero: {
    greeting: { es: string, en: string };
    role: string
  },
  tagline: { es: string, en: string };
  navTitle: { es: string, en: string };
  socialTitle: { es: string, en: string };
  cta: { es: string, en: string };
  ctaLink: { es: string, en: string };
  rights: { es: string, en: string };
  madeWith: { es: string, en: string };
  links: {
    home: { es: string, en: string };
    about: { es: string, en: string };
    projects: { es: string, en: string };
    contact: { es: string, en: string };
  }
  location: { es: string, en: string };
  emailLabel: { es: string, en: string };
  email: string;

}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {

  readonly name = 'Jorge Subeldia';
  currentLanguage = signal<'es' | 'en'>('es');

  private content = {
    hero: {
      greeting: { es: '¡Hola! Mi nombre es', en: 'Hi! My name is' },
      role: 'Full Stack Developer'
    },

    tagline: {
      es: 'Soluciones escalables y modernas.',
      en: 'Scalable and modern solutions.'
    },
    navTitle: { es: 'Navegación', en: 'Navigation' },
    socialTitle: { es: 'Sígueme', en: 'Follow Me' },
    cta: {
      es: '¿Tienes un proyecto en mente?',
      en: 'Have a project in mind?'
    },
    ctaLink: { es: '¡Hablemos!', en: "Let's chat!" },
    rights: { es: 'Todos los derechos reservados', en: 'All rights reserved' },
    madeWith: { es: 'Hecho con', en: 'Made with' },
    links: {
      home: { es: 'Inicio', en: 'Home' },
      about: { es: 'Sobre mí', en: 'About me' },
      projects: { es: 'Proyectos', en: 'Projects' },
      contact: { es: 'Contacto', en: 'Contact' }
    },
    location: {
      es: 'Resistencia, Chaco - Argentina',
      en: 'Resistencia, Chaco - Argentina'
    },
    emailLabel: {
      es: 'Enviame un correo',
      en: 'Send me an email'
    },
    email: 'subel.jorgeto@gmail.com'
  };

  changeLanguage() {
    this.currentLanguage.update(lang => lang === 'es' ? 'en' : 'es');
  }

  getContent() {
    return this.content;
  }

}
