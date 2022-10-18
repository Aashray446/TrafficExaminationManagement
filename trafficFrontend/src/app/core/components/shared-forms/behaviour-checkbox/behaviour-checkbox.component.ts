import { Component, OnInit } from '@angular/core';
import { behaviourPattern } from 'src/app/core/models/applicantDetails.interface';

@Component({
  selector: 'app-behaviour-checkbox',
  templateUrl: './behaviour-checkbox.component.html',
  styleUrls: ['./behaviour-checkbox.component.scss']
})
export class BehaviourCheckboxComponent implements OnInit {

   userBehaviour : behaviourPattern=  {
    first: false,
    second: false,
    third: false,
    fail: false,
    failRemarks: '',
    officerId: 0
   };

  constructor() { }

  ngOnInit(): void {

  }

}
