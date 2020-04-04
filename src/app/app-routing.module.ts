import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('@feature/landing/landing.module').then(mod => mod.LandingModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('@feature/admin/admin.module').then(mod => mod.AdminModule),
  },
  {
    path: 'carrito-compras',
    loadChildren: () => import('@feature/carrito-compras/carrito-compras.module').then(mod => mod.CarritoComprasModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
