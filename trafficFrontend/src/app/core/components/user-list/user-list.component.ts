import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    idFrozen: boolean = false;
    userDetails:User[] = [new User(1, 'test', 'test', 'test', 12, 'test', new Date())];
  constructor() { }

  ngOnInit(): void {
  }

}
