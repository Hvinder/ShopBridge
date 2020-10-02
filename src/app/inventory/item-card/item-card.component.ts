import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../core/item/item.service';
import { Item } from '../../item-form/types/item.type';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: Item;
  noImage = '../../../assets/icons/no-photo.png';

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
  }

  removeItem(objectId: number): void {
    this.itemService.removeItem(objectId);
  }
}
