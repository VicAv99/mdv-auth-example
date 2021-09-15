import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, NotFoundComponent } from '@cs/auth';
import { AuthGuard, UnAuthGuard } from '@cs/core-data';
import { ItemsComponent, ItemViewComponent } from '@cs/features/items';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [UnAuthGuard] },
  { path: '', component: ItemsComponent, canActivate: [AuthGuard] },
  { path: 'item/:id', component: ItemViewComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
