import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, type OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = { id: uuid(), name: '', power: 0 };
  ngOnInit(): void {}

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    // debugger;
    this.onNewCharacter.emit(this.character);

    this.character = { id: uuid(), name: '', power: 0 };
  }
}
