import { HousingLocation } from './../housinglocation';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HousingLocationComponent, CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  casas: HousingLocation[] = [];
  casasFiltradas: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.casas = housingLocationList;
      this.casasFiltradas = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.casasFiltradas = this.casas;
      return;
    }

    this.casasFiltradas = this.casas.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }









}
