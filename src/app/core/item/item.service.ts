import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../item-form/types/item.type';
import { ItemApiService } from '../api/item-api.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: Item[];
  itemsUpdated: EventEmitter<Item[]> = new EventEmitter();
  isApiLoading = false;

  constructor(private itemApiService: ItemApiService) {}

  /* Getter for component */
  // getItems(): Item[] {
  //   return this.items;
  // }

  addItem(item: Item): void {
    this.isApiLoading = true;
    this.itemApiService.addItem(item).subscribe((res) => this.fetchItems());
  }

  fetchItems(): void {
    this.itemApiService.fetchItems().subscribe(items => {
      this.items = items;
      this.itemsUpdated.emit(this.items);
      this.isApiLoading = false;
    });
  }

  removeItem(objectId: number): void {
    this.isApiLoading = true;
    this.itemApiService
      .deleteItem(objectId)
      .subscribe((res) => this.fetchItems());
  }
}
