import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicListsComponent } from './public-lists/public-lists.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    PublicListsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
