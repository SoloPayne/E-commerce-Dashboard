import { Component } from '@angular/core';
import { DataService } from './data.service';
import { SidenavData } from './sidenav/sidenav-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'headersdienav';

    collapsed?: boolean;

  navData = SidenavData;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.data$.subscribe(value => this.collapsed = value);
  }
}
