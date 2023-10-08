import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KorporationComponent } from './korporation/korporation.component';
import { ManagerinComponent } from './managerin/managerin.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { MusicComponent } from './music/music.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { StartComponent } from './start/start.component';
import { AdminlogComponent } from './adminlog/adminlog.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'imprint', component: ImpressumComponent},
  {path: 'music', component: MusicComponent},
  {path: 'socialMedia', component: SocialMediaComponent},
  {path: 'managerin', component: ManagerinComponent},
  {path: 'merchandise', component: MerchandiseComponent},
  {path: 'event', component: EventComponent},
  {path: 'korporation', component: KorporationComponent},
  {path: 'contact', component: ContactComponent},
  // {path: 'adminlog', component: AdminlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
