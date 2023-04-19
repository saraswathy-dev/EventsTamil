import { Component,ViewChild,OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatTableDataSource} from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource:any;

 
  constructor(private api:ApiService,private sanitizer: DomSanitizer){ }
 
public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
  ngOnInit(): void {
    this.getAllEvents();
  }
  getAllEvents(){
    this.api.getEvent()
    .subscribe({
      next:(res)=>{
        console.log(res);
      this.dataSource=res;
      },error:()=>{
        alert("error  while getting data")
      }
    })
  }
 

}
