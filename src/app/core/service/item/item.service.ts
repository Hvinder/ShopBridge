import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/item-form/types/item.type';
import { ItemApiService } from '../../api/item-api.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: Observable<Item[]>;

  constructor(private itemApiService: ItemApiService) {
    this.fetchItems();
  }

  /* Getter for component */
  getItems(): Observable<Item[]> {
    return this.items;
  }

  addItem(item: Item): void {
    this.itemApiService.addItem(item).subscribe((res) => this.fetchItems());
  }

  fetchItems(): void {
    this.items = this.itemApiService.fetchItems();
  }

  removeItem(objectId: number): void {
    this.itemApiService
      .deleteItem(objectId)
      .subscribe((res) => this.fetchItems());
  }
}
