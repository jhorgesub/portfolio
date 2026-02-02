import { Injectable } from '@angular/core';

export interface ContactData {
  title: { 'es': string; 'en': string };
  subtitle: { 'es': string; 'en': string };
  description: { 'es': string; 'en': string };
  linkedin: { 'es': string; 'en': string };
  github: { 'es': string; 'en': string };
  email: { 'es': string; 'en': string };
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private contact: ContactData = {
    title: { es: 'Contacto', en: 'Contact' },
    subtitle: { es: '¡Hablemos!', en: 'Get in touch!' },
    description: {
      es: 'Siempre estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme a través de cualquiera de estos medios.',
      en: 'I am always open to new opportunities and collaborations. Feel free to reach out through any of these channels.'
    },
    linkedin: { es: 'Ver perfil', en: 'View profile' },
    github: { es: 'Ver repositorios', en: 'View repositories' },
    email: { es: 'Correo electrónico', en: 'Email' },
  }

  getContact() {
    return this.contact;
  }

}
