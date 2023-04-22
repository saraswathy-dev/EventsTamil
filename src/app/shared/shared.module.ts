import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { PostsComponent } from '../modules/posts/posts.component';


import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { DialogComponent } from '../modules/dialog/dialog.component';
import { HomeComponent } from '../user/pages/home/home.component';
import { EventComponent } from '../user/pages/event/event.component';
import { ContactComponent } from '../user/pages/contact/contact.component';






@NgModule({
  declarations: [
    // HeaderComponent,
    // FooterComponent,
    // SidenavComponent,
    PostsComponent,
    DialogComponent,
    HomeComponent,
    EventComponent,
    ContactComponent

    
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterLinkActive,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule

  

   
  ],
  exports:[
    
   PostsComponent,
    // SidenavComponent,
    DialogComponent
  ]
})
export class SharedModule { }
