import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesAuthGuard, UnAuthGuard } from '@cs/core/core-data';
import { LoginComponent, NotFoundComponent } from '@cs/features/auth';
import { ItemsComponent, ItemViewComponent } from '@cs/features/items';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [UnAuthGuard] },
  { path: '', component: ItemsComponent, canActivate: [FeaturesAuthGuard] },
  {
    path: 'item/:id',
    component: ItemViewComponent,
    canActivate: [FeaturesAuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
