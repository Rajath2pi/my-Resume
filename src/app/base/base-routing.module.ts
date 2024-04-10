import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeComponent } from './me/me.component';
import { ResumePdfComponent } from './resume-pdf/resume-pdf.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path : '', redirectTo: 'me', pathMatch : 'full'},
  {path : 'me', component : MeComponent},
  {path : 'resumepdf', component : ResumePdfComponent},
  {path : 'projects', component : ProjectsComponent},
  {path : 'experiance', component : ExperienceComponent},
  {path : 'skills', component : SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
