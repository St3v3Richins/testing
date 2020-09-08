import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { CirclesMainComponent } from './components/circles-main.component';

const routs: Routes = [
    { path: 'member-circles', component: CirclesMainComponent }
]

@NgModule({
  declarations: [
    CirclesMainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class MemberCirclesModule { }
