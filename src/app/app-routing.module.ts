import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';

import { HomeComponent } from './user/pages/home/home.component';
import { EventComponent } from './user/pages/event/event.component';
import { ContactComponent } from './user/pages/contact/contact.component';
import { EventBookingComponent } from './user/pages/event-booking/event-booking.component';
import { ModulesComponent } from './modules/modules.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'event', component: EventComponent },
  { path: 'eventpage/:id', component: EventBookingComponent },
  { path: 'contact', component: ContactComponent },

  {
    path: 'admin',
    component: PostsComponent,
  },

  //   children: [
  //     { path: 'posts', component: PostsComponent },
  //     { path: 'dashboard', component: DashboardComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
