import { Component } from '@angular/core';
import { BaseServices } from '../base.services';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent {

  candidate : any;

  constructor(private baseServices : BaseServices){

  }

  ngOnInit(){
    this.candidate = this.baseServices.candidateDetails;
  }
}
