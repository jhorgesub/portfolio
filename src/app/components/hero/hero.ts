import { Component, computed, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { About } from "../about/about";

@Component({
  selector: 'app-hero',
  imports: [About],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  private _translationService = inject(TranslationService);

  lang = this._translationService.currentLanguage;
  content = this._translationService.getContent();
  readonly name = this._translationService.name;

  heroText = computed(() => {
    const currentLang = this.lang();
    return {
      greeting: this.content.hero.greeting[currentLang],
      role: this.content.hero.role
    }

  })
}
