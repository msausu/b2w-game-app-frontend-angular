import { Component, OnInit } from '@angular/core';
import { SearchService } from './list/search.service';
import { PlanetService } from './planet.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators'

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit {

  search: string;
  isSearchEnabled: Observable<boolean>;
  
  constructor(private planet: PlanetService, private service: SearchService) {
    this.isSearchEnabled = planet.searchFilterState.pipe(delay(1000));
  }
  
  ngOnInit() {
  }

  setSearch() {
    this.service.set(this.search);
  }

}
