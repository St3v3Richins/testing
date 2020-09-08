import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/login/forgot-password.component';
import { NewMemberComponent } from './components/login/new-member.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NewMemberComponent,
    LeftNavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent]
})
export class AppModule { }
