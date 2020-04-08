import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/models/heroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Heroe[];

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  public goTohero(idx: number) {
    this.router.navigate(['/detalle-heroe', idx]);
  }

}
