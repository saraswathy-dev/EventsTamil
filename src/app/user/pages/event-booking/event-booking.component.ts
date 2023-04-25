import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { async } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { PostsComponent } from 'src/app/modules/posts/posts.component';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css'],
})
export class EventBookingComponent implements OnInit {
  activatedId: any;
  dataSource: Array<any> = [];
  extractedId: Array<any> = [];
  menuData: any;

  constructor(private activeRoute: ActivatedRoute, private api: ApiService) {}
  // getAllEvents() {
  //   return new Promise((_resolve, reject): void => {
  //     this.api.getEvent().subscribe({
  //       next: (res) => {
  //         this.dataSource = res;
  //         console.log('response', this.dataSource);
  //       },
  //       error: () => {
  //         alert('error  while getting data');
  //       },
  //     });
  //   });
  // }
  ngOnInit() {
    this.activatedId = this.activeRoute.snapshot.paramMap.get('id');
    this.api.getEvent().subscribe((response) => {
      this.dataSource = response;
    });
    console.log(this.dataSource);

    setTimeout(() => {
      console.log(this.dataSource);
      console.log('activated', this.activatedId);

      this.menuData = this.dataSource.find((obj) => obj.id == this.activatedId);
      console.log(this.menuData);
    }, 1000);
  }
}
