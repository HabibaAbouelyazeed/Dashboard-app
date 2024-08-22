import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isSidebarClosed: boolean =  false;

  // constructor(private router: Router){}

  navPages = [
    {
      title: 'Prayer',
      icon: 'prayer_times',
      route: 'prayers',
    },
    {
      title: 'Dashboard',
      icon: 'dashboard',
      route: 'dashboard',
    },
    {
      title: 'Tasks',
      icon: 'task',
      route: 'tasks',
    },
    {
      title: 'Reminders',
      icon: 'notifications_active',
      route: 'reminders',
    },
    {
      title: 'My Pocket',
      icon: 'trophy',
      route: 'my-pocket',
    },
    {
      title: 'Categories',
      icon: 'category',
      route: 'categories',
    },
    {
      title: 'Archive',
      icon: 'inventory_2',
      route: 'archive',
    },
  ]
  toggleSidebar(){
    this.isSidebarClosed =  !this.isSidebarClosed;
  }

}
