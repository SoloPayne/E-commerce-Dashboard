import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  switchValue = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.updateData(this.switchValue);
  }

  isCollapsed(): void {
    this.switchValue = !this.switchValue;
    this.dataService.updateData(this.switchValue);
  }
}
