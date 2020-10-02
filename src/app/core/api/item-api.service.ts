import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/item-form/types/item.type';

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
    return this.http.post<Item>(this.fetchAllItemsUrl, item);
  }

  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(this.fetchAllItemsUrl + '/' + id);
  }
}
