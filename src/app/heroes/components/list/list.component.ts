import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'SheHulk',
    'Thor',
  ];
  heroeBorrado: string | undefined = undefined;
  borrarUltimoHeroe() {
    this.heroeBorrado = this.heroNames.pop();
  }
}
