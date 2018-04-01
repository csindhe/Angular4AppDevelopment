import { Router } from '@angular/router';
// import { CrisisCenterModule } from './Crisis/crisis.module';
import { CrisisCenterComponent } from './Crisis/crisis-center.component';
import { HeroesModule } from './Services/heroes.module';
import { HeroRoutingModule } from './Services/heroes-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CrisisListComponent } from './Crisis/crisislist.component';
import { PageNotFoundComponent } from './PageNotFound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './Services/hero.service';
import { MessageService } from './Services/message.service';
import { ComposeMessageComponent } from './Message/composemessage.component';
import { DialogService } from './Crisis/dialog.service';
// import { AdminModule } from './Admin/admin.module';
import { LoginRoutingModule } from './Login/login-routing.module';
import { LoginComponent } from './Login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HeroesModule,
    LoginRoutingModule,
    // CrisisCenterModule,
    // AdminModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeroService, MessageService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router){
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}
