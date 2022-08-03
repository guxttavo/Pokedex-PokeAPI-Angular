import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(
    private httpClient: HttpClient
  ) { }

  get apiListAllPokemons(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      tap(res => res),
      tap(res => {
        console.log(res)
      })
    )
  }

}
