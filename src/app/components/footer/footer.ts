import { Component, computed, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  private _translationService = inject(TranslationService);

  lang = this._translationService.currentLanguage;
  content = this._translationService.getContent();
  currentYear = new Date().getFullYear();
  readonly name = this._translationService.name;
  readonly email = this._translationService.getContent().email;

  footerText = computed(() => {
    const currentLang = this.lang();
    return {
      tagline: this.content.tagline[currentLang],
      location: this.content.location[currentLang],
      navTitle: this.content.navTitle[currentLang],
      links: {
        home: this.content.links.home[currentLang],
        about: this.content.links.about[currentLang],
        projects: this.content.links.projects[currentLang],
        contact: this.content.links.contact[currentLang]
      },
      socialTitle: this.content.socialTitle[currentLang],
      cta: this.content.cta[currentLang],
      ctaLink: this.content.ctaLink[currentLang],
      rights: this.content.rights[currentLang],
      madeWith: this.content.madeWith[currentLang],
    };
  });

}
