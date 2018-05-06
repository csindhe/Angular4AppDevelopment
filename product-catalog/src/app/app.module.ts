import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './topbar/topbar.component';
import { BottomBarModule } from './modules/bottombar.module';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    BottomBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
