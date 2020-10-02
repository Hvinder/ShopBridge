import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../../core/item/item.service';
import { Item } from '../../item-form/types/item.type';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  removeItem(objectId: number): void {
    this.itemService.removeItem(objectId);
  }
}
