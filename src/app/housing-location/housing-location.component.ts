import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}
