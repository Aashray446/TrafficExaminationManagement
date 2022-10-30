import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import {MessageService} from 'primeng/api';
import { User } from '../../models/user.model';
import { UserService } from '../../service/user.service';
import { Role } from '../../models/role.enum';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [MessageService],
})
export class UserListComponent implements OnInit {

    productDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    // Users: User[] = [];
    Users : User[] = [];

    User: User | any = {};

    selectedUser: User[] = [];

    submitted: boolean = false;

    cols: any[] = [];
    selectedFile = null;

    rowsPerPageOptions = [5, 10, 20];

    roles;

    role = Role;

    constructor(private messageService: MessageService, private UserService:UserService) {
        this.roles = Object.keys(this.role);
     }

    ngOnInit() {
        this.Users = this.UserService.getUsers();
        this.cols = [
            { field: 'UserId', header: 'UserId' },
            { field: 'Name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];
    }


    onFileSelected(event:any)
    {
      this.selectedFile = event.target.files[0];
    }

    onUpload()
    {
      console.log(this.selectedFile); // You can use FormData upload to backend server
    }

    openNew() {
        this.User = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedUsers() {
        this.deleteProductDialog = true;
    }

    editUser(User: User) {
        this.User = { ...User };
        this.productDialog = true;
    }

    deleteUser(User: User) {
        this.deleteProductDialog = true;
        this.User = { ...User };
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.Users = this.Users.filter(val => !this.selectedUser.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Users Deleted', life: 3000 });
        this.selectedUser = [];
    }

    confirmDelete() {
        this.deleteProductDialog = false;
        this.Users = this.Users.filter(val => val.id !== this.User.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
        this.User = {};
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;

    }

    saveUser() {
        this.submitted = true;

        if (this.User.name?.trim()) {
            if (this.User.id) {
                // @ts-ignore
                this.User.inventoryStatus = this.User.inventoryStatus.value ? this.User.inventoryStatus.value : this.User.inventoryStatus;
                this.Users[this.findIndexById(this.User.id)] = this.User;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000 });
            } else {
                this.User.id = this.createId();
                this.User.code = this.createId();
                this.User.image = 'User-placeholder.svg';
                // @ts-ignore
                this.User.inventoryStatus = this.User.inventoryStatus ? this.User.inventoryStatus.value : 'INSTOCK';
                this.Users.push(this.User);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000 });
            }

            this.Users = [...this.Users];
            // this.prodcutDialog = false;
            this.User = {};
        }
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.Users.length; i++) {
            if (this.Users[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    printRole(User:User){
        console.log(User.role)
    }

}
