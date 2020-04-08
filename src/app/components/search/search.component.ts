import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/models/heroes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  public heroes: Heroe[];
  public input: string;
  constructor(private route: ActivatedRoute, private heroeService: HeroesService) { }

  ngOnInit() {
    this.subParams();
  }

  private subParams() {
    this.route.params.subscribe(params => {
      this.input = params['input'];
      this.heroes = this.heroeService.seachHero(this.input);
    })
  }
}
