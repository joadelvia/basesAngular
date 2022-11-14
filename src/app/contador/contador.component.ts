import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})
export class ContadorComponent{
    title : string= 'Contador';
  base : number= 6;
  counter: number = 10;

  aggregate(value:number){
    this.counter += value;
  }
}