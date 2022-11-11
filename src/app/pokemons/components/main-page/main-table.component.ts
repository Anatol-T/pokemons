import { Component, OnInit } from '@angular/core'
import { PokemonListData } from '../../models/pokemon.models'
import { PokemonsService } from '../../servises/pokemons.service'
import { Observable } from 'rxjs'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'poke-main-page',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
})
export class MainTableComponent implements OnInit {
  pokemonsData$: Observable<PokemonListData>

  constructor(
    private pokemonsService: PokemonsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.pokemonsData$ = pokemonsService.pokemonsData$
  }

  ngOnInit(): void {
    const page = Number(this.route.snapshot.paramMap.get('page'))
    if (!this.pokemonsService.pokemonsData.getValue().pokemonsChunk.length) {
      this.pokemonsService.getPokemons(page)
    }

    // this.route.queryParams.subscribe((params:Params)=>{
    //   this.getUsers(params['page'] ? params['page']: 1)
    // })
  }

  // infoHandler(name: string) {
  //   this.router.navigate([`/info/${name}`])
  // }
}
