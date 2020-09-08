import { Component, Input, Output } from '@angular/core';
import { interval } from 'rxjs';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'membersports-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'MemberSports';
  nav: Nav[] = [
    { link: '/rules-of-conduct', name: 'Rules of Conduct', exact: true },
    { link: '/privacy-policy', name: 'Privacy Policy', exact: false },
    { link: '/about-us', name: 'About', exact: false },
    { link: '/faq', name: 'FAQ', exact: false },
    { link: '/contact-us', name: 'Contact Us', exact: false }
  ];
  loggedIn: boolean = false;
  setLoggedIn(isLoggedIn: boolean) {
    this.loggedIn = isLoggedIn;
  }
}
