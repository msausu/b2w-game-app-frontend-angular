import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _search = new BehaviorSubject<string>('');
  readonly searchFilter = this._search.asObservable();

  constructor() { }

  set(search: string) {
    this._search.next(search);
  }
}
