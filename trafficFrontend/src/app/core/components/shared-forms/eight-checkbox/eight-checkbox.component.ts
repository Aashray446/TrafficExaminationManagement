import { Component, OnInit } from '@angular/core';
import { eightPattern } from 'src/app/core/models/applicantDetails.interface';
import { ApplicantDetailsService } from 'src/app/core/service/applicant-details.service';
@Component({
  selector: 'app-eight-checkbox',
  templateUrl: './eight-checkbox.component.html',
  styleUrls: ['./eight-checkbox.component.scss']
})
export class EightCheckboxComponent implements OnInit {


    userEightPattern: eightPattern;

  constructor(private _applicantDetailsService: ApplicantDetailsService) {
   this.userEightPattern = {
        lineTouch: false,
        poleTouch: false,
        fail: false,
        officerId: 0,
    }
  }

  ngOnInit(): void {

  }

    update() {
        this._applicantDetailsService.AnyPattern = this.userEightPattern;
    }
}
