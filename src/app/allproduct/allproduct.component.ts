import { Component, OnInit } from '@angular/core';
import{AllService} from '../all.service'
@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
public data:any;
  constructor(private all:AllService) { }

  ngOnInit(): void {
    this.all.allproductshow().subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }
  deleteproduct(item:any)
  {
    this.all.productdelete(item).subscribe((result)=>{
      console.log('Item Deleted Succesfully');
      location.reload();
    })
  }

}
