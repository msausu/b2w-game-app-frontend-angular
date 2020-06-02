import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlanetService } from '../planet.service';
import { Planet } from '../model/planet';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  planet: Planet = new Planet('');

  constructor(private route: ActivatedRoute, private router: Router, private service: PlanetService) { }

  ngOnInit(): void {
    this.service.disableSearch();
  }

  save(): void {
    this.service.addPlanet(this.planet).toPromise().then(_ => this.router.navigate(['/planet']));
  }

}
