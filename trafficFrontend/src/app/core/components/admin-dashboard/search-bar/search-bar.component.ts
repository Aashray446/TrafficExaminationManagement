import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
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
    filterCountry(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.cities.length; i++) {
            const country = this.cities[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filterCities = filtered;
    }
}
