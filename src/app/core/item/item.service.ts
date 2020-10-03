import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
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

  constructor(
    private itemApiService: ItemApiService,
    private snackBar: MatSnackBar
  ) {}

  addItem(item: Item): void {
    this.isApiLoading = true;
    this.itemApiService.addItem(item).subscribe((res) => {
      if (res !== null) {
        this.fetchItems();
      } else {
        this.isApiLoading = false;
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
        this.itemsUpdated.emit(this.items);
      } else {
        this.openErrorSnackbar(
          'Error Fetching Inventory. Please check your connectivity'
        );
      }
      this.isApiLoading = false;
    });
  }

  getItemById(objectId: number): Item {
    return this.items.find((item) => +item.objectId === objectId);
  }

  removeItem(objectId: number): void {
    this.isApiLoading = true;
    this.itemApiService
      .deleteItem(objectId)
      .subscribe((res) => this.fetchItems());
  }

  openErrorSnackbar(message: string) {
    this.snackBar.open(message, 'dismiss', {
      duration: 2000,
    });
  }
}
