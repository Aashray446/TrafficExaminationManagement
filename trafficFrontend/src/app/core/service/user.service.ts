import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {

 currentUsers = new Subject<User[]>();


  constructor(private _http : HttpClient, private messageService: MessageService) {}

    public async getUsers() {
        this._http.get<User[]>(environment.apiBaseUrl + '/private/users/getAllUsers').subscribe((data:any) => {
            this.currentUsers.next(data.content.users[0]);
        });
    }

    public updateUsers(user: User){
        return this._http.post<User[]>(environment.apiBaseUrl + '/private/users/update', user)
    }

    public createUser(user: User){
        return this._http.post<User[]>(environment.apiBaseUrl + '/private/users/register', user)
    }

    public deleteUser(user: User){
        return this._http.post<User[]>(environment.apiBaseUrl + '/private/users/delete', user)
    }



    // public addUser(user:User): void {
    //     this.currentUsers.push(user);
    //     this.currentUsersChanged.next(this.currentUsers);
    // }

    // public updateUser(user:User): void {
    //     let index = this.currentUsers.findIndex(u => u.id === user.id);
    //     this.currentUsers[index] = user;
    //     this.currentUsersChanged.next(this.currentUsers);
    // }

}
