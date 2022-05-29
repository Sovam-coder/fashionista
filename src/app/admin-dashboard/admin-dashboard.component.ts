import { Component, OnInit } from '@angular/core';
import {AllService} from '../all.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
public data:any;
  constructor(private all:AllService) { }

  ngOnInit(): void {
    this.all.alluser().subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }

}
