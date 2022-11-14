import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor() { console.log('Constructor') }

  students: string[] = ['Sergio', 'Javier', 'Pilar', 'Vicentico'];
  approved: string[] = [];

  approve(): void{
    this.approved.push(this.students.pop() || '')
  }


 

}
