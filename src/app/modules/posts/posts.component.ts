import { Component ,OnInit,AfterViewInit,ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from 'src/app/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = ['eventName', 'eventDescription', 'venue', 'ticketPrice','eventDuration','eventDate','image','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog ,private api:ApiService) {}
  ngOnInit(): void {
    this.getAllEvents();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:"30%",
      height:"70%"
    }).afterClosed().subscribe((val)=>{
      if(val=='save')
{this.getAllEvents()}
    })
  }
getAllEvents(){
  this.api.getEvent()
  .subscribe({
    next:(res)=>{
     this.dataSource= new MatTableDataSource(res);
     this.dataSource.paginator=this.paginator;
     this.dataSource.sort=this.sort;
    },error:()=>{
      alert("error  while getting data")
    }
  })
}

editData(row:any){
  this.dialog.open(DialogComponent,{
width:'30%',
data:row
  }).afterClosed().subscribe((val)=>{
    if(val=='update')
{this.getAllEvents()}
  })

}
deleteData(id:number){
  this.api.deleteData(id)
  .subscribe({
    next:(res)=>{
     alert("Deleted successfully");
     this.getAllEvents();
    },error:()=>{
      alert("error while deleting data")
    }
  })

}




applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}

