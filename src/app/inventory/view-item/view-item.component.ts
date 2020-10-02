import { Component, Input, OnInit } from '@angular/core';
import { ItemApiService } from 'src/app/core/api/item-api.service';
import { ItemService } from 'src/app/core/service/item/item.service';
import { Item } from 'src/app/item-form/types/item.type';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  removeItem(objectId: number): void {
    this.itemService.removeItem(objectId);
  }

}
