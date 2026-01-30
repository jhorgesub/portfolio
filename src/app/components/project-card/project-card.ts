import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Projects } from '../../services/projects';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  private projects = inject(Projects);
  cards = this.projects.getAllProjects();
}
