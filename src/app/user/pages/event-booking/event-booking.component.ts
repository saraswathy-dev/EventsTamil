import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css'],
})
export class EventBookingComponent implements OnInit {
  activatedId: any;
  dataSource: Array<any> = [];
  eventData: any;
  constructor(private activeRoute: ActivatedRoute, private api: ApiService) {}
  getAllEvents() {
    this.api.getEvent().subscribe({
      next: (res) => {
        this.dataSource = res;
        console.log('response', this.dataSource);
      },
      error: () => {
        alert('error  while getting data');
      },
    });
  }
  ngOnInit(): void {
    this.getAllEvents();

    this.activatedId = this.activeRoute.snapshot.paramMap.get('id');

    console.log('id:', this.activatedId);
    setTimeout(() => {
      if (this.activatedId) {
        this.eventData = this.dataSource.filter((value) => {
          return this.activatedId == value.id;
        });
      }
    }, 10000);
  }
}
