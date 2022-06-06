import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ComponentsModule} from "./components/components.module";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PipesModule} from "./pipes/pipes.module";
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { BoardUserComponent } from "./components/board-user/board-user.component";
import { BoardAdminComponent } from "./components/board-admin/board-admin.component";
import { BoardModeratorComponent } from "./components/board-moderator/board-moderator.component";
import { FormsModule } from '@angular/forms';
import {authInterceptorProviders} from "./_helpers/auth.interceptor";
import {MatMenuModule} from "@angular/material/menu";
@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    PipesModule,
    MatSnackBarModule,
    FormsModule,
    MatMenuModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
