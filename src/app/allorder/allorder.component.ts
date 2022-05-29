import { Component, OnInit } from '@angular/core';
import{AllService} from '../all.service'
@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.component.html',
  styleUrls: ['./allorder.component.css']
})
export class AllorderComponent implements OnInit {
public data:any;
  constructor(private all:AllService) { }

  ngOnInit(): void {
    this.all.allorders().subscribe((data)=>{
      this.data=data['orders'];
      console.log(this.data);
    })
  }
  modify(item:any)
  {
    this.all.modifystatus(item).subscribe((data)=>{
      console.log("Status Upadted Succesfully");
    
    })
  }
}
