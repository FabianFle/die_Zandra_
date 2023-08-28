import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgShowComponent } from './img-show/img-show.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'imprint', component: ImpressumComponent},
  {path: 'img-show', component: ImgShowComponent},
  {path: 'shop', component: ShopComponent},
  {path: '**', component: MainpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
