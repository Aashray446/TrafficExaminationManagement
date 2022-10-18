import { Component, OnInit } from '@angular/core';
import { eightPattern } from 'src/app/core/models/applicantDetails.interface';

@Component({
  selector: 'app-eight-checkbox',
  templateUrl: './eight-checkbox.component.html',
  styleUrls: ['./eight-checkbox.component.scss']
})
export class EightCheckboxComponent implements OnInit {

    userEightPattern: eightPattern = {
        lineTouch: false,
        poleTouch: false,
        fail: false,
        officerId: 0,
    }

  constructor() { }

  ngOnInit(): void {
  }

  print() {
    console.log(this.userEightPattern);
  }

}
