import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainTableComponent } from './components/main-page/main-table.component'
import { InfoPageComponent } from './components/info-page/info-page.component'

const routes: Routes = [
  { path: '', redirectTo: '/pokemons/1', pathMatch: 'full' },
  {
    path: 'pokemons/:page',
    component: MainTableComponent,
  },
  {
    path: 'info/:mame',
    component: InfoPageComponent,
  },
  //{path: '404', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/404' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsRoutingModule {}
