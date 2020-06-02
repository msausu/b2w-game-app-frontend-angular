import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }    from '@angular/router';

import { PlanetService }  from '../planet.service';
import { Planet }         from '../model/planet';
import { Observable }     from 'rxjs';
import { switchMap, map }      from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  
  planet$: Observable<Planet>;
  selectedId: string;

  constructor(private router: Router, private service: PlanetService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.planet$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = params.get('id');
        return this.service.getPlanet(this.selectedId).pipe(map(p => Array.isArray(p) ? p[0] : p));
      })
    );
  }

  remove(): void {
    this.service.removePlanet(this.selectedId).toPromise().then(_ => this.router.navigate(['/planet']));
  }

}
