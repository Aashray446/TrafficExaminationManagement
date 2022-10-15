import {Role} from './role.enum';

export class User {
    id: number;
    username: string;
    private _password: string;
    name: string;
    private _role: Role;
    private _token: string;
    private _tokenExpirationDate : Date;

   constructor(id: number, username: string, password: string, name: string, role: Role, token: string, tokenExpirationDate: Date) {
        this.id = id;
        this.username = username;
        this._password = password;
        this.name = name;
        this._role = role;
        this._token = token;
        this._tokenExpirationDate = tokenExpirationDate;
    }

    get token() {
        if( !this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }

    get role(): Role {
        return this._role;
    }


}
