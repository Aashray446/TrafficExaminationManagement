import { Component, OnInit } from '@angular/core';
import { trafficLightPattern } from 'src/app/core/models/applicantDetails.interface';

@Component({
  selector: 'app-traffic-checkbox',
  templateUrl: './traffic-checkbox.component.html',
  styleUrls: ['./traffic-checkbox.component.scss']
})
export class TrafficCheckboxComponent implements OnInit {

    trafficLightPattern:trafficLightPattern = {
        uTurn: false,
        trafficLight: false,
        fail: false,
        officerId: 0
    }

  constructor() { }

  ngOnInit(): void {
  }

}
