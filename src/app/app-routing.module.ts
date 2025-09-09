import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductComponent } from './product/product.component';
import { ClientComponentComponent } from './client-component/client-component.component';

const routes: Routes = [
  { path:'', component: HomeComponentComponent},
  {path: 'Product', component: ProductComponent},
  {path: 'Client', component: ClientComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
