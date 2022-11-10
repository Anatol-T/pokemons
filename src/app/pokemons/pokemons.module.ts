import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { MainTableComponent } from './components/main-table/main-table.component';


@NgModule({
  declarations: [
    MainTableComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule
  ]
})
export class PokemonsModule { }
