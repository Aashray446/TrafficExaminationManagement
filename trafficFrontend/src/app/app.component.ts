import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { SpinnerService } from './core/service/spinner.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',

})
export class AppComponent {

    spin : string = 'none';

    constructor(private primengConfig: PrimeNGConfig, private spinnerService:SpinnerService) {
        this.spinnerService.visibility.subscribe(
            (data)=> {
              data ? this.spin = 'block' : this.spin = 'none'
            }
        )
     }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
