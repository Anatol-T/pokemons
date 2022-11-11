import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PokemonsRoutingModule } from './pokemons-routing.module'
import { MainTableComponent } from './components/main-page/main-table.component'
import { InfoPageComponent } from './components/info-page/info-page.component'

@NgModule({
  declarations: [MainTableComponent, InfoPageComponent],
  imports: [CommonModule, PokemonsRoutingModule],
})
export class PokemonsModule {}
