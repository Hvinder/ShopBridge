import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemFormComponent } from './item-form/item-form.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemCardComponent } from './inventory/item-card/item-card.component';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule } from '@angular/material';
import { ItemApiService } from './core/api/item-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './core/item/item.service';

@NgModule({
  declarations: [AppComponent, ItemFormComponent, InventoryComponent, ItemCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [ItemService, ItemApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
