import { Component } from '@angular/core';
import { ProjectList } from '../project-list/project-list';

@Component({
  selector: 'app-hero',
  imports: [ProjectList],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
