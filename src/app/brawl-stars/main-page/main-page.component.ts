import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor() { }
  nuevo = {
    name: 'Javier',
    health: 5000
  }

  personajes = [
    { name: "Shelly", health: 3600},
    { name: "Nita", health: 3800},
    { name: "Colt", health: 2800},
    { name: "Jessie", health: 700}

  ]

  

}
