import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainTableComponent } from './components/main-table/main-table.component'

const routes: Routes = [
  { path: '', component: MainTableComponent, pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsRoutingModule {}
