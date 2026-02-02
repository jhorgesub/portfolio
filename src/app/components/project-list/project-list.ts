import { Component, computed, inject, signal } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { ProjectsService } from '../../services/projects.service';
import { TranslationService } from '../../services/translation.service';
import { title } from 'process';

@Component({
  selector: 'app-project-list',
  imports: [ProjectCard],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
  private _projectsService = inject(ProjectsService);
  private _translationService = inject(TranslationService);

  projects = signal(this._projectsService.getAllProjects());
  lang = this._translationService.currentLanguage;

  projectListText = computed(() => {
    const currentLang = this.lang();
    return {
      title: this.lang() === 'es' ? 'Proyectos' : 'Projects'
    };

  });

}
