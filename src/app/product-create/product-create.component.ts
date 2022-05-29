import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import {Router} from '@angular/router';
import {AllService} from '../all.service'
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
success:boolean=false;
  regproduct=new FormGroup({
    title:new FormControl(''),
    desc: new FormControl(''),
    img: new FormControl(''),
    categories:new FormControl(''),
    size: new FormControl(''),
    color: new FormControl(''),
    price: new FormControl('')
  })
  constructor(private add:AllService ) { }

  ngOnInit(): void {
  }
  addproduct()
  {
    this.add.addproduct(this.regproduct.value).subscribe((result)=>{
      this.regproduct.reset({});
      this.success=true;
      
    })
  }
}
