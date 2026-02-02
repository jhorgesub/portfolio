import { Component, computed, inject } from '@angular/core';
import { AboutService } from '../../services/about.service';
import { TranslationService } from '../../services/translation.service';
import { ProjectList } from "../project-list/project-list";

@Component({
  selector: 'app-about',
  imports: [ProjectList],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  private _aboutService = inject(AboutService);
  private _translationService = inject(TranslationService);

  data = this._aboutService.getAbout();
  lang = this._translationService.currentLanguage;

  aboutText = computed(() => {
    const currentLang = this.lang();

    return {
      title: this.data.title[currentLang],
     description: this.data.description.map((p: any) => p[currentLang]),
      cv: this.data.cv[currentLang],
      portrait: this.data.portrait[currentLang]
    }
  })

}
