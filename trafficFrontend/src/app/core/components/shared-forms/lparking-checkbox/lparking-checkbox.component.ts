import { Component, OnInit } from '@angular/core';
import { lParkingPattern } from 'src/app/core/models/applicantDetails.interface';

@Component({
  selector: 'app-lparking-checkbox',
  templateUrl: './lparking-checkbox.component.html',
  styleUrls: ['./lparking-checkbox.component.scss']
})
export class LparkingCheckboxComponent implements OnInit {


    lParkingPattern:lParkingPattern = {
        onceForwarded: false,
        lineTouchFail: false,
        fail: false,
        officerId: 0
    }

  constructor() { }

  ngOnInit(): void {
  }

}
