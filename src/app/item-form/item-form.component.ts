import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../core/item/item.service';
import { Item } from './types/item.type';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent implements OnInit {
  inventoryItem: FormGroup;
  imageUrl: string;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.inventoryItem = new FormGroup({
      itemName: new FormControl(''),
      itemDescription: new FormControl(''),
      itemPrice: new FormControl(''),
    });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (ev) => {
        this.imageUrl = ev.target.result as string;
      };
    }
  }

  onSubmit(form: FormGroup) {
    const item: Item = {
      name: form.value.itemName,
      description: form.value.itemDescription,
      price: form.value.itemPrice,
      image: this.imageUrl ? this.imageUrl : null,
    };
    this.itemService.addItem(item);
    // console.log('Valid?', form.valid); // true or false
  }
}
