import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header.component';
import { HttpService } from "./service/httpservice.service";

import { FormsModule }   from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { UserDto } from './entity/user.dto';
import { CookieService } from 'ngx-cookie-service';
import { PictureComponent } from './picture/picture.component';
import { RecommendComponent } from './picture/recommend.component';
import { InputComponent } from './input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragScrollModule } from 'ngx-drag-scroll';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatGridListModule } from '@angular/material/grid-list';                                                                                                                                                                                           
import { SuggestionWebDto } from './entity/suggestionlist.webdto';
import { UserSel } from './entity/user.sel';
import { Session } from './entity/session.data';


@NgModule({
  declarations: [
    HeaderComponent,
    PictureComponent,
    RecommendComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragScrollModule,
    Ng2FlatpickrModule,
    LazyLoadImageModule,
    MatGridListModule
  ],
  providers: [
    CookieService,
    UserDto,
    SuggestionWebDto,
    HttpService,
    UserSel,
    Session
  ],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
