import { Component, OnInit } from '@angular/core';
import { AddItemService } from '../add-item/add-item.service';
import { Item } from '../item-form/types/item.type';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  items: Item[];

  constructor(private addItemService: AddItemService) { }

  ngOnInit() {
    this.items = this.addItemService.getItems();
  }

}
