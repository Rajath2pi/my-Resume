import { Component } from '@angular/core';
import { BaseServices } from '../base/base.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  candidateName : string = "";

  constructor(private baseServices : BaseServices){
    this.candidateName = this.baseServices.candidateDetails.name;
  }

}
