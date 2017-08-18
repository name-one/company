import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ServicesComponent } from './services-component/services.component';
import { SliderComponent } from './slider/slider.component';
import { DataService } from './services/data.service';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ServicesComponent,
    SliderComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
