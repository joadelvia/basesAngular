import { Component } from "@angular/core";


@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html'
})
export class ListaComponent{
    compra = [
        { element: 'Cerveza', quantity: 100},
        { element: 'Huevos', quantity: 24},
        { element: 'Batido chocolate', quantity: 1},
        { element: 'Salmón', quantity: 2}
    ]
}