import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import {MessageService} from 'primeng/api';
import { Applicant } from 'src/app/core/models/applicant.model';
import { ApplicantService } from 'src/app/core/service/applicant.service';


@Component({
  selector: 'app-mid-officer',
  templateUrl: './mid-officer.component.html',
  providers: [MessageService],
  styleUrls: ['./mid-officer.component.scss']

})
export class MidOfficerComponent implements OnInit {

    productDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    // applicants: applicant[] = [];
    applicants : Applicant[] = [];

    applicant: Applicant | any = {};

    selectedApplicant: Applicant[] = [];

    submitted: boolean = false;

    cols: any[] = [];
    selectedFile = null;

    rowsPerPageOptions = [5, 10, 20];

    constructor(private messageService: MessageService, private applicantService:ApplicantService) { }

    ngOnInit() {
        this.applicants = this.applicantService.getApplicants();
        this.cols = [
            { field: 'applicantId', header: 'applicantId' },
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
        this.applicant = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedapplicants() {
        this.deleteProductDialog = true;
    }

    editapplicant(applicant: Applicant) {
        this.applicant = { ...applicant };
        this.productDialog = true;
    }

    deleteapplicant(applicant: Applicant) {
        this.deleteProductDialog = true;
        this.applicant = { ...applicant };
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.applicants = this.applicants.filter(val => !this.selectedApplicant.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'applicants Deleted', life: 3000 });
        this.selectedApplicant = [];
    }

    confirmDelete() {
        this.deleteProductDialog = false;
        this.applicants = this.applicants.filter(val => val.applicantId !== this.applicant.applicantId);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'applicant Deleted', life: 3000 });
        this.applicant = {};
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;

    }

    saveapplicant() {
        this.submitted = true;

        if (this.applicant.name?.trim()) {
            if (this.applicant.id) {
                // @ts-ignore
                this.applicant.inventoryStatus = this.applicant.inventoryStatus.value ? this.applicant.inventoryStatus.value : this.applicant.inventoryStatus;
                this.applicants[this.findIndexById(this.applicant.id)] = this.applicant;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'applicant Updated', life: 3000 });
            } else {
                this.applicant.id = this.createId();
                this.applicant.code = this.createId();
                this.applicant.image = 'applicant-placeholder.svg';
                // @ts-ignore
                this.applicant.inventoryStatus = this.applicant.inventoryStatus ? this.applicant.inventoryStatus.value : 'INSTOCK';
                this.applicants.push(this.applicant);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'applicant Created', life: 3000 });
            }

            this.applicants = [...this.applicants];
            // this.prodcutDialog = false;
            this.applicant = {};
        }
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.applicants.length; i++) {
            if (this.applicants[i].applicantId === id) {
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

}
