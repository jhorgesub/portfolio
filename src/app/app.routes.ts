import { Routes } from '@angular/router';
import { ProjectDetails } from './pages/project-details/project-details';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'project-details/:id', component: ProjectDetails },
    { path: '**' , redirectTo:''}
];
