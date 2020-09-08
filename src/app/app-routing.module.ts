import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/login/forgot-password.component';
import { NewMemberComponent } from './components/login/new-member.component';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './components/footer/about-us.component';
import { ContactUsComponent } from './components/footer/contact-us.component';
import { PrivacyPolicyComponent } from './components/footer/privacy-policy.component';
import { RulesOfConductComponent } from './components/footer/rules-of-conduct.component';
import { FrequentlyAskedQuestionsComponent } from './components/footer/faq.component';
import { CirclesMainComponent } from './member-circles/components/circles-main.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full' },
  { path: 'new-member', component: NewMemberComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'contact-us', component: ContactUsComponent, pathMatch: 'full' },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, pathMatch: 'full' },
  { path: 'rules-of-conduct', component: RulesOfConductComponent, pathMatch: 'full' },
  { path: 'faq', component: FrequentlyAskedQuestionsComponent, pathMatch: 'full' },
  { path: 'member-circles-main', component: CirclesMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
