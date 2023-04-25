import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationStart,
  Router,
  Event,
} from '@angular/router';
import { Location } from '@angular/common';
import { first } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  roleAdmin: boolean = false;
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private location: Location
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Navigation started.
        this.roleAdmin = event.url == 'admin' ? true : false;
        console.log('url', event.url);
      }

      // // else {
      // //   this.router = 'Home'
      // // }
    });
  }
  ngOnInit(): void {
    console.log('url', window.location.href);
    console.log('active', this.activeRouter);
  }
}
