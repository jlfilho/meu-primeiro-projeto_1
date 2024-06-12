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
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.casas = this.housingService.getAllHousingLocations();
  }









}
