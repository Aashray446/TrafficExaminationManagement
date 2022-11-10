import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

    visibility : Subject<boolean>;

  constructor() {
    this.visibility = new Subject<boolean>();
  }

  show() {
    this.visibility.next(true);
  }

    hide() {
    this.visibility.next(false);
}

}
