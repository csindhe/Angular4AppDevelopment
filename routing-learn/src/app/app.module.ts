import { HeroesModule } from './Services/heroes.module';
import { HeroRoutingModule } from './Services/heroes-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { CrisisListComponent } from './Crisis/crisislist.component';
import { PageNotFoundComponent } from './PageNotFound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './Services/hero.service';
import { MessageService } from './Services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
