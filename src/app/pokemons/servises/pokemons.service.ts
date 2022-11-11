import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, forkJoin, map, switchMap } from 'rxjs'
import { environment } from '../../../environments/environment'
import {
  Pokemon,
  PokemonListData,
  PokemonListResponse,
} from '../models/pokemon.models'

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  pokemonsData = new BehaviorSubject<PokemonListData>({
    pokemonsChunk: [],
    totalCount: 0,
    limit: 20,
    offset: 0,
  })
  pokemonsData$ = this.pokemonsData.asObservable()

  constructor(private http: HttpClient) {}

  getPokemons(page: number) {
    const pokemonData = this.pokemonsData.getValue()
    const limit = pokemonData.limit
    const offset = limit * (page - 1)

    this.http
      .get<PokemonListResponse>(`${environment.baseURL}/pokemon`, {
        params: { limit, offset },
      })
      .pipe(
        switchMap(res => {
          const requestsArray = res.results.map(el =>
            this.http.get<Pokemon>(el.url)
          )
          return forkJoin(requestsArray).pipe(
            map(res2 => ({
              limit,
              offset,
              totalCount: res.count,
              pokemonsChunk: res2,
            }))
          )
        })
      )
      .subscribe(data => {
        this.pokemonsData.next(data)
      })
  }
}
