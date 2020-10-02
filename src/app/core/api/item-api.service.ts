import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Item } from 'src/app/item-form/types/item.type';

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {

  url = 'https://5f761fe3fdffe3001637f8da.mockapi.io/items';

  constructor(private http: HttpClient) { }

  fetchItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
    // return this.http.get<Item[]>(this.url).pipe(
    //   map((response: Item[]) => {
    //     if (response) {
    //       return response;
    //     }
    //   }),
    //   catchError(error => {
    //     this.apiFacade.createErrorAction(
    //       TripInsuranceAction.TRIP_INSURANCE_API_ERROR,
    //       error,
    //     );
    //     this.apiFacade.setError(error.error);
    //     return observableOf(networkError());
    //   }),
    // );
  }
}
