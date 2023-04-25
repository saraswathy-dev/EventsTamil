import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataSource: Array<any> = [];
  getAllEvents() {
    this.api.getEvent().subscribe({
      next: (res) => {
        this.dataSource = res;
        console.log(this.dataSource);
      },
      error: () => {
        alert('error  while getting data');
      },
    });
  }
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getAllEvents();
  }
}
