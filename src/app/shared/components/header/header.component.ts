import { Component, EventEmitter,Output } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() toggleSideBarForme:EventEmitter<any>=new EventEmitter();

  toggleSideBar(){
    this.toggleSideBarForme.emit();

  }

}
