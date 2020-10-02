import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule, MatSnackBarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ItemCardComponent } from './inventory/item-card/item-card.component';
import { ItemApiService } from './core/api/item-api.service';
import { ItemService } from './core/item/item.service';
import { HeaderComponent } from './header/header.component';
import { ItemDetailComponent } from './inventory/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
    InventoryComponent,
    ItemCardComponent,
    HeaderComponent,
    ItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ],
  providers: [ItemService, ItemApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
