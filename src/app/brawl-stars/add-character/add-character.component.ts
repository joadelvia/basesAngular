import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/characters';
import { BSService } from '../services/brawl-stars.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  
  constructor(private bsService:BSService) {
    console.log('Constructor add character')
   }

  ngOnInit(): void {
  }

  @Input() nuevo: Character = { name: '', health: 0}
  
  
  addCharacter(){
    this.bsService.addCharacter({...this.nuevo})
    this.nuevo.name='';
    this.nuevo.health=0;
  }

}
