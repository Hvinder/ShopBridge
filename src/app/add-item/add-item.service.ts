import { Injectable } from '@angular/core';
import { mockItems } from '../item-form/mocks/items.mock';
import { Item } from '../item-form/types/item.type';

@Injectable({
  providedIn: 'root',
})
export class AddItemService {
  items: Item[] = mockItems;
  id = this.items.length;

  constructor() {}

  addItem(item: Item): void {
    item.id = this.id;
    this.id++;
    this.items.push(item);
  }

  getItems(): Item[] {
    return this.items;
  }

  removeItem(id: number): void {
    const itemToRemove: Item = this.items.find((item) => item.id === id);
    const index: number = this.items.indexOf(itemToRemove);
    this.items.splice(index, 1);
  }
}
