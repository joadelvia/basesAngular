import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() nuevo: Character = { name: '', health: 0}
  @Input() personajes :Character[]=[]
  addCharacter(){
    console.log(this.nuevo)
    let add = { name: this.nuevo.name, health: this.nuevo.health}
    this.personajes.push(add )
    this.nuevo.name=''
    this.nuevo.health=0
  }

}
