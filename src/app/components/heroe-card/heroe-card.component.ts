import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/models/heroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() index: number;
  @Output() heroSelected: EventEmitter<number>;

  constructor(private router: Router) { 
    this.heroSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  public emitToIndexHero() {
    this.router.navigate(['/detalle-heroe', this.index]);
    // this.heroSelected.emit(this.index); Evento para comunicacion desde el hijo hasta el padre 
  }

}
