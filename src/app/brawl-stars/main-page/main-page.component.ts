import { Component } from '@angular/core';
import { Character } from '../interfaces/characters';
import { BSService } from '../services/brawl-stars.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor() { 
  }
  nuevo = {
    name: 'Javier',
    health: 5000
  }
}
