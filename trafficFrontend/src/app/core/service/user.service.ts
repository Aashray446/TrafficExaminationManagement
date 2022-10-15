import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Role } from '../models/role.enum';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

 currentUsersChanged = new Subject<User[]>();
 private currentUsers: User[];

  constructor() {
    this.currentUsers = [
      new User(1,  'aashray@gmail.com', 'aashray', 'Aashray', Role.Admin, '1', new Date()),
      new User(2,  'aashraykatiyar@gmail.com', 'aashray', 'Aashray Katiyar', Role.EightOfficer, '2', new Date()),
    ];
}

    public getUsers(): User[] {
        return this.currentUsers;
    }

    public addUser(user:User): void {
        this.currentUsers.push(user);
        this.currentUsersChanged.next(this.currentUsers);
    }

    public updateUser(user:User): void {
        let index = this.currentUsers.findIndex(u => u.id === user.id);
        this.currentUsers[index] = user;
        this.currentUsersChanged.next(this.currentUsers);
    }

}
