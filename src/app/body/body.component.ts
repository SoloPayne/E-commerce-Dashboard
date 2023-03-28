import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  products$?: any ;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(res => {
      this.products$ = res;
    })
  }

}
