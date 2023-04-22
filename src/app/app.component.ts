import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}
  title = 'dashboard';
  url="http://localhost:4200/admin";
  userUrl="http://localhost:4200/";
  eventUrl="http://localhost:4200/event";
  
  sidebarOpen=true;
  Activeurl=window.location.href;
  sidebarToggler(event:any){
    this.sidebarOpen=!this.sidebarOpen
  }
  ngOnInit(): void {
    console.log(this.Activeurl)
      }
      Setvalue():any{
if(this.url===this.Activeurl){
  return true;
}else return false;
      } 

      SetHomenav():any{
        if(this.userUrl||'http://localhost:4200/'||'http://localhost:4200/contact'===this.Activeurl){
          return true;
}else return false;
   
  }
}
  
  
  


