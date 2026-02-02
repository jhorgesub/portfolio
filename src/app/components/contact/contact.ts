import { Component, inject, computed } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  private _translationService = inject(TranslationService);
  private _contactService = inject(ContactService);

  lang = this._translationService.currentLanguage;
  data = this._contactService.getContact();
  readonly email = this._translationService.getContent().email;

  contactText = computed(() => {
  const currentLang = this.lang();
  return {
    title: this.data.title[currentLang],
    subtitle: this.data.subtitle[currentLang],
    description: this.data.description[currentLang],
    linkedin: this.data.linkedin[currentLang],
    github: this.data.github[currentLang],
    emailLabel: this.data.email[currentLang],
  };
});

}
