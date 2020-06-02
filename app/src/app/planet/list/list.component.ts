import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Planet } from '../model/planet';
import { PlanetService } from '../planet.service';
import { SearchService } from './search.service';
import { SearchPipe } from './search.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [ SearchPipe ],
})
export class ListComponent implements OnInit {

  planets$: Observable<Planet[]>;
  filter: string;
  
  constructor(private service: PlanetService, private search: SearchService, private route: ActivatedRoute, private cd: ChangeDetectorRef) {
    search.searchFilter.subscribe(x => this.filter = x);
  }

  ngOnInit(): void {
    this.planets$ = this.service.getPlanets();
    this.service.enableSearch();
  }

  ngAfterViewInit() {
      this.cd.detectChanges();
  }

  ngOnDestroy() {
    this.service.disableSearch();
  }
}
