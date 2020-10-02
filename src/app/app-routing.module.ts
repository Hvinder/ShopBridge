import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { ItemDetailComponent } from './inventory/item-detail/item-detail.component';

const routes: Routes = [
  { path: 'inventory', component: InventoryComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: '', redirectTo: '/inventory', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
