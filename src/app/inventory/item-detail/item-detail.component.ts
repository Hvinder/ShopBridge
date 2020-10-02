import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/core/item/item.service';
import { Item } from 'src/app/item-form/types/item.type';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item: Item;

  constructor(private activatedroute: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit() {
    const objectId = +this.activatedroute.snapshot.paramMap.get('id');
    this.getItem(objectId);
  }

  getItem(objectId: number): void {
    this.item = this.itemService.getItemById(objectId);
    console.log(this.item);
  }

}
