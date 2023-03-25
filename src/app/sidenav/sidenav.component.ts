import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SidenavData } from './sidenav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  collapsed?: boolean;

  navData = SidenavData;

  constructor(private dataService: DataService) { }
 
  ngOnInit(): void {
    this.dataService.data$.subscribe(value => this.collapsed = value);
  }

}
