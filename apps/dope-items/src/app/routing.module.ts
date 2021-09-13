import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, NotFoundComponent } from '@cs/auth';
import { ItemsComponent, ItemViewComponent } from '@cs/features/items';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ItemsComponent },
  { path: 'item/:id', component: ItemViewComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
