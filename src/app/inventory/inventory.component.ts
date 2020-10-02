import { Component, OnInit } from '@angular/core';
import { ItemService } from '../core/service/item/item.service';
import { Item } from '../item-form/types/item.type';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
