import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../item-form/types/item.type';
import { ItemApiService } from '../api/item-api.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: Item[] = JSON.parse(localStorage.getItem('items'));
  itemsUpdated: EventEmitter<Item[]> = new EventEmitter();
  isApiLoading = true;

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
      localStorage.setItem('items', JSON.stringify(items));
      this.itemsUpdated.emit(this.items);
      this.isApiLoading = false;
    });
  }

  getItemById(objectId: number): Item {
    return this.items.find(item => +item.objectId === objectId);
  }

  removeItem(objectId: number): void {
    this.isApiLoading = true;
    this.itemApiService
      .deleteItem(objectId)
      .subscribe((res) => this.fetchItems());
  }
}
