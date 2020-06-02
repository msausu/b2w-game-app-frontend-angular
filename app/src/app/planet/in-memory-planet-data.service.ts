import { Injectable } from '@angular/core';
import { InMemoryDbService, ResponseOptions, ResponseInterceptor } from 'angular-in-memory-web-api';
import { Planet } from './model/planet';
import { PLANETS } from './model/mock-planet';

@Injectable({
  providedIn: "root"
})
export class InMemoryPlanetDataService implements InMemoryDbService {

  createDb() {
    const planeta = PLANETS;
    return { planeta };
  }

  genId(planets: Planet[]): string {
    return "" + Math.floor((Math.random() * 100000) + 1);
  }
}
