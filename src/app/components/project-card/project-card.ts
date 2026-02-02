import { Component, inject, input, computed } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ProjectsService, Project } from '../../services/projects.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  private _translationService = inject(TranslationService);

  project = input.required<Project>();

  lang = this._translationService.currentLanguage;

  projectCardText = computed(() => {
    const p = this.project();
    const currentLang = this.lang();

    return {
      title: p.title[currentLang],
      description: p.description[currentLang],
      buttonText: currentLang === 'es' ? 'Más detalles' : 'More details',
      id: p.id,
      image: p.image,
      tags: p.tags,
      githubLink: p.githubLink
    };
  });

}
