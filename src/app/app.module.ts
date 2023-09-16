import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ContactComponent } from './contact/contact.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MusicComponent } from './music/music.component';
import { ManagerinComponent } from './managerin/managerin.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { KorporationComponent } from './korporation/korporation.component';


@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    StartComponent,
    HeaderComponent,
    FooterComponent,
    SocialMediaComponent,
    MainpageComponent,
    ContactComponent,
    MusicComponent,
    ManagerinComponent,
    MerchandiseComponent,
    EventComponent,
    KorporationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
