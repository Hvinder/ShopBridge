import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
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
  submitClicked = false;

  constructor(public itemService: ItemService) {}

  ngOnInit() {
    this.inventoryItem = new FormGroup({
      itemName: new FormControl('', [Validators.required]),
      itemDescription: new FormControl('', [Validators.required]),
      itemPrice: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (ev) => {
        this.imageUrl = reader.result as string;
      };
    }
  }

  onSubmit(form: FormGroup, formDirective: FormGroupDirective) {
    this.submitClicked = true;
    const item: Item = {
      name: form.value.itemName,
      description: form.value.itemDescription,
      price: form.value.itemPrice,
      image: this.imageUrl ? this.imageUrl : null,
    };
    if (form.valid) {
      this.itemService.addItem(item);
      formDirective.resetForm();
      this.inventoryItem.reset();
      this.imageUrl = null;
      this.submitClicked = false;
    }
  }
}
