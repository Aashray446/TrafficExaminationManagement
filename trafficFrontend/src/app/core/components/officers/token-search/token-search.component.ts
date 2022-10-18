import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-token-search',
  templateUrl: './token-search.component.html',
  styleUrls: ['./token-search.component.scss']
})
export class TokenSearchComponent implements OnInit {

    cities: any[] = [];
    filterCities: any[] = [];
    selectedList: SelectItem = { value: '' };

    constructor() {}

    ngOnInit(): void {

        this.cities = [
            {
                label: 'New York',
                value: { id: 1, name: 'New York', code: 'NY' },
            },
            { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
            {
                label: 'Istanbul',
                value: { id: 4, name: 'Istanbul', code: 'IST' },
            },
            { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } },
        ];
    }

    filterCity(event:any) {
        this.filterCities = [];
        for (let i = 0; i < this.cities.length; i++) {
            let city = this.cities[i];
            if (city.label.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filterCities.push(city);
            }
        }
    }
}
