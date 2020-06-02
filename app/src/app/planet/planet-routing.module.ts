import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetComponent } from './planet.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'planet',  component: PlanetComponent, children: [
      { path: '', component: ListComponent },
      { path: 'new', component: CreateComponent },
      { path: ':id', component: EditComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }
