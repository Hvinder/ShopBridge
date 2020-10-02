import { Component, Input, OnInit } from '@angular/core';
import { AddItemService } from 'src/app/add-item/add-item.service';
import { Item } from 'src/app/item-form/types/item.type';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private addItemService: AddItemService) { }

  ngOnInit() {
  }

  removeItem(id: number): void {
    this.addItemService.removeItem(id);
  }

}
