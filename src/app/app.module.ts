import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ServicesComponent } from './services-component/services.component';
import { SliderComponent } from './slider/slider.component';
import { DataService } from './services/data.service';
import { TrelloService } from './services/trello.service';
import { SocialComponent } from './social/social.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ServicesComponent,
    SliderComponent,
    SocialComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    TrelloService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
