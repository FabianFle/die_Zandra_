import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ImgShowComponent } from './img-show/img-show.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ManagerinComponent } from './managerin/managerin.component';
import { MusicComponent } from './music/music.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'imprint', component: ImpressumComponent},
  {path: 'img-show', component: ImgShowComponent},
  {path: 'music', component: MusicComponent},
  {path: 'socialMedia', component: SocialMediaComponent},
  {path: 'managerin', component: ManagerinComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
