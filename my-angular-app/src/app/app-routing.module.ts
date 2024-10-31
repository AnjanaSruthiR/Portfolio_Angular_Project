import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { EducationComponent } from './Components/education/education.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Education', component: EducationComponent },
  { path: 'Experience', component: ExperienceComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }