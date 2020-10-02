import { Component, HostListener, OnInit } from '@angular/core';
import { ItemService } from '../core/item/item.service';
import { Item } from '../item-form/types/item.type';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  items: Item[];
  innerWidth: number;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.itemService.fetchItems();
    this.itemService.itemsUpdated.subscribe((items) => (this.items = items));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
}
