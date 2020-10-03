import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Item } from '../../item-form/types/item.type';
import { ItemApiService } from '../api/item-api.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: Item[] = JSON.parse(localStorage.getItem('items'));
  itemsUpdated: EventEmitter<Item[]> = new EventEmitter();
  isApiLoading = true;

  constructor(
    private itemApiService: ItemApiService,
    private snackBar: MatSnackBar
  ) {}

  addItem(item: Item): void {
    this.isApiLoading = true;
    this.itemApiService.addItem(item).subscribe((res) => {
      if (res !== null) {
        this.items.push(res);
        this.dispatchItems();
      } else {
        this.openErrorSnackbar(
          'Payload too large. Please choose a smaller image (<100KB)'
        );
      }
    });
  }

  fetchItems(): void {
    this.isApiLoading = true;
    this.itemApiService.fetchItems().subscribe((items) => {
      if (items !== null) {
        this.items = items;
        localStorage.setItem('items', JSON.stringify(items));
        this.dispatchItems();
      } else {
        this.openErrorSnackbar(
          'Error Fetching Inventory. Please check your connectivity'
        );
      }
    });
  }

  getItemById(objectId: number): Item {
    return this.items.find((item) => +item.objectId === objectId);
  }

  removeItem(objectId: number): void {
    this.isApiLoading = true;
    this.itemApiService.deleteItem(objectId).subscribe((res) => {
      if (res !== null) {
        this.items = this.items.filter(
          (item) => item.objectId !== res.objectId
        );
        this.dispatchItems();
      } else {
        this.openErrorSnackbar(
          'Error removing item. Please check your connectivity'
        );
      }
    });
  }

  dispatchItems(): void {
    this.itemsUpdated.emit(this.items);
    this.isApiLoading = false;
  }

  openErrorSnackbar(message: string) {
    this.snackBar.open(message, 'dismiss', {
      duration: 2000,
    });
    this.isApiLoading = false;
  }
}
