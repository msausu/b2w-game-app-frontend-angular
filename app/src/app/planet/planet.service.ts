import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of,  BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Planet } from './model/planet';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private searchFilterState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  readonly searchFilterState = this.searchFilterState$.asObservable();
  private readonly TRACE = !environment.production;

  constructor(private http: HttpClient) {}

  enableSearch() {
    this.searchFilterState$.next(true);
  }

  disableSearch() {
    this.searchFilterState$.next(false);
  }

  private readonly BASE = environment.endpoint + '/planeta';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.BASE)
      .pipe(
        tap(planets => { for(let planet of planets) this.audit('fetched Planet ' + planet.toString()) }),
        catchError(this.handle<Planet[]>('getPlanets', []))
      );
  }

  getPlanet(id: string): Observable<Planet | Planet[]> { // Planet[] jaxrs/jersey async issue
    const url = `${this.BASE}/${id}`;
    return this.http.get<Planet>(url).pipe(
      tap(planet => this.audit(`fetched Planet id=${id} ` + JSON.stringify(planet))),
      catchError(this.handle<Planet>(`getPlanet id=${id}`))
    );
  }

  addPlanet(Planet: Planet): Observable<Planet> {
    return this.http.post<Planet>(this.BASE, Planet, this.httpOptions).pipe(
      tap((newPlanet: Planet) => this.audit(`added Planet id=${newPlanet.id}`)),
      catchError(this.handle<Planet>('addPlanet'))
    );
  }

  removePlanet(id: string): Observable<Planet> {
    const url = `${this.BASE}/${id}`;
    return this.http.delete<Planet>(url, this.httpOptions).pipe(
      tap(_ => this.audit(`deleted Planet id=${id}`)),
      catchError(this.handle<Planet>('removePlanet'))
    );
  }

  // not used
  searchPlanet(name: string): Observable<Planet[]> {
    if (!name.trim()) {
      return of([]);
    }
    return this.http.get<Planet[]>(`${this.BASE}/?nome=${name}`).pipe(
      tap(x => this.audit((x.length ? 'found' : 'no') + ` Planets matching "${name}"`)),
      catchError(this.handle<Planet[]>('searchPlanetes', []))
    );
  }

  private handle<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.audit(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private audit(message: string) {
    if (this.TRACE) console.log(`PlanetService: ${message}`);
  }

}
