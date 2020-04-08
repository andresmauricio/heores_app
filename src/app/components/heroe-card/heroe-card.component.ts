import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/models/heroes';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
