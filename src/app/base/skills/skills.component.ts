import { Component } from '@angular/core';
import { BaseServices } from '../base.services';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  candidate : any;

  constructor(private baseServices : BaseServices){

  }

  ngOnInit(){
    this.candidate = this.baseServices.candidateDetails;
  }
}
