import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { MeComponent } from './me/me.component';
import { ResumePdfComponent } from './resume-pdf/resume-pdf.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { BaseServices } from './base.services';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    MeComponent,
    ResumePdfComponent,
    ProjectsComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    CarouselModule.forRoot(),
  ],
  providers: [BaseServices],
})
export class BaseModule { }
