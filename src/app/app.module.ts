import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicListsComponent } from './public-lists/public-lists.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreateListComponent } from './create-list/create-list.component';
import { MatButtonModule } from '@angular/material/button';
import { EditListComponent } from './edit-list/edit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicListsComponent,
    NotfoundComponent,
    CreateListComponent,
    EditListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
