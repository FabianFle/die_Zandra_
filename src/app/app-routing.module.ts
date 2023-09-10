import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ManagerinComponent } from './managerin/managerin.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { MusicComponent } from './music/music.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'imprint', component: ImpressumComponent},
  {path: 'music', component: MusicComponent},
  {path: 'socialMedia', component: SocialMediaComponent},
  {path: 'managerin', component: ManagerinComponent},
  {path: 'merchandise', component: MerchandiseComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
