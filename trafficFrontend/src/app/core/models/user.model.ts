import {Role} from './role.enum';

export class User {
    id: number;
    email: string;
    private _password: string;
    name: string;
    private _role: Role;

   constructor(id: number, email: string, password: string, name: string, role: Role) {
        this.id = id;
        this.email = email;
        this._password = password;
        this.name = name;
        this._role = role;
    }

    get role(): Role {
        return this._role;
    }


}
