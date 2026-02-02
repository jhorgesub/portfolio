import { Injectable, signal } from '@angular/core';

export interface About {
  title: { 'es': string; 'en': string };
  description: { 'es': string; 'en': string }[];
  cv: { 'es': string; 'en': string };
  portrait: { 'es': string; 'en': string };
}


@Injectable({
  providedIn: 'root',
})
export class AboutService {

  private about: About = {

    title: { es: 'Sobre mí', en: 'About me' },
    description: [
      {
        es: 'Estudiante avanzado de Ingeniería en Sistemas de Información (UTN) y Desarrollador Full Stack apasionado por convertir desafíos en soluciones efectivas. Con una sólida formación en Java (Spring Boot), Python (Django), Angular y React, me enfoco en construir aplicaciones web modernas a través de un enfoque analítico y proactivo.',
        en: 'Advanced Information Systems Engineering student (UTN) and Full Stack Developer passionate about turning challenges into effective solutions. With a solid background in Java (Spring Boot), Python (Django), Angular, and React, I focus on building modern web applications through an analytical and proactive approach.'
      },
      {
        es: 'Sumado a mi experiencia gestionando despliegues con Docker y AWS, mi objetivo es el aprendizaje continuo para aportar siempre ideas innovadoras y de alto rendimiento a mi equipo y proyectos.',
        en: 'Combined with my experience managing deployments with Docker and AWS, my goal is continuous learning to always contribute innovative ideas and high performance to my team and projects.'
      }
    ],
    cv: {
      es: 'Descargar CV',
      en: 'Download CV'
    },
    portrait: {
      es: 'Jorge Subeldia retrato',
      en: 'Jorge Subeldia portrait'
    }

  };

  getAbout() {
    return this.about;
  }

}
