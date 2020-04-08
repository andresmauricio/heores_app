import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroes';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
})
export class HeroeDetailComponent implements OnInit {
  public heroe: Heroe;

  constructor(private heroesServices: HeroesService, private route: ActivatedRoute) { }

  ngOnInit() {
    let idx = this.route.snapshot.params['id'];
    this.heroe = this.heroesServices.getHeroe(idx);
    
  }

}
