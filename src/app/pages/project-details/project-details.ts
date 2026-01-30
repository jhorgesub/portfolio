import { AfterViewInit, Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Footer } from "../../components/footer/footer";
import { Navbar } from '../../components/navbar/navbar';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { initCarousels } from 'flowbite';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Projects, TECH_ICONS } from '../../services/projects';

@Component({
  selector: 'app-project-details',
  imports: [Footer, Navbar, RouterLink],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails implements AfterViewInit {

  private platformId = inject(PLATFORM_ID);
  private route = inject(ActivatedRoute);
  private _project = inject(Projects);

  private params = toSignal(this.route.paramMap);

  project = computed(() => {
    const id = Number(this.params()?.get('id'));
    return this._project.getProjectById(id);
  });

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => initCarousels(), 100);
    }
  }

  getTechIcon(techName: string): string {
    return TECH_ICONS[techName]?.icon || 'fa-solid fa-code';
  }

  getTechColor(techName: string): string {
    return TECH_ICONS[techName]?.color || '#888888';
  }



}
