import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryPlanetDataService }  from './in-memory-planet-data.service';
import { environment } from '../../environments/environment';
import { AppMatModule } from '../material-module';
import { PlanetRoutingModule } from './planet-routing.module';
import { PlanetComponent } from './planet.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { SearchPipe } from './list/search.pipe';

@NgModule({
  declarations: [PlanetComponent, ListComponent, EditComponent, CreateComponent, SearchPipe],
  imports: [
    HttpClientModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryPlanetDataService, {  delay: 500 }), // dataEncapsulation: true,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    PlanetRoutingModule,
    AppMatModule
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },]
})
export class PlanetModule { }
