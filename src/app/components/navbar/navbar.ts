import { Component, computed, inject, signal } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  private _translationService = inject(TranslationService);

  lang = this._translationService.currentLanguage;
  content = this._translationService.getContent();
  isMenuOpen = signal(false);

  navLinks = computed(() => {
    const currentLang = this.lang();
    return {
      home: this.content.links.home[currentLang],
      projects: this.content.links.projects[currentLang],
      about: this.content.links.about[currentLang],
      contact: this.content.links.contact[currentLang],
      langToggle: currentLang === 'es' ? 'EN' : 'ES'
    }
  }
  )

  changeLanguage() {
    this._translationService.changeLanguage();
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

}
