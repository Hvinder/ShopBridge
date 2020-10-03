import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Item } from '../../item-form/types/item.type';

@Injectable({
  providedIn: 'root',
})
export class ItemApiService {
  fetchAllItemsUrl = 'https://5f761fe3fdffe3001637f8da.mockapi.io/items';

  constructor(private http: HttpClient) {}

  fetchItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.fetchAllItemsUrl);
  }

  addItem(item: Item): Observable<Item> {
    return this.http
      .post(this.fetchAllItemsUrl, item, { observe: 'response' })
      .pipe(
        map((response) => {
          return response.body as Item;
        }),
        catchError(error => {
          return of(null);
        })
      );
  }

  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(this.fetchAllItemsUrl + '/' + id);
  }
}
