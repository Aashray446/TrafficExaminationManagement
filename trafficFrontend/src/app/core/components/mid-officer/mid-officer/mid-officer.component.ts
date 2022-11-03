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

    rowsPerPageOptions = [5, 10, 20];

    selectedFile:any;

    constructor(private messageService: MessageService, private applicantService:ApplicantService) { }

    ngOnInit() {
        this.getApplicants();
        this.cols = [
            { field: 'applicantId', header: 'applicantId' },
            { field: 'Name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];
    }


   getApplicants =  async () => {
        this.applicantService.getApplicants().subscribe( {
            next: (data:any) => {
                this.applicants = data.content.applicant[0];
                console.log(this.applicants);
            },
            error: (err) => {
                console.log(err);
            }
        })
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

    onFileselected(event : any) {
        this.selectedFile = event.currentFiles[0];
    }

    saveapplicant() {
        this.submitted = true;

            // User Validations Left
            // if(this.applicants.findIndex((obj) => obj.applicantId === this.applicant.applicantId) === 1) {
            //     this.messageService.add({ severity: 'error', summary: "Application ID Already Exists", life:3000} )
            //     return
            // }


        this.applicantService.addApplicant(this.applicant, this.selectedFile).subscribe({
            next: (data:any) => {
                this.applicant = {};
            },
            error: (err) => {
                console.log(err);
                this.messageService.add({ severity: 'error', summary: err.error.error.message, detail: 'Applicant not added', life: 3000 });
            }
        })

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


    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

}
