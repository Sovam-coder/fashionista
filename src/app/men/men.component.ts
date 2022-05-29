import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import {AllService} from '../all.service';
@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  addcheck :boolean=false;
  success:boolean=false;
  public productId:any;
  public price:any;
  public id:any;
  public data : any;
  public men:any=[];

  createaddress=new FormGroup({
    address: new FormControl('') 
  })
  constructor(private add:AllService ,private router:Router) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('userId');
    this.add.getitem().subscribe(data=>{
      this.data=data;
      // console.log(data)
      for(var i=0;i<this.data.length;i++)
      {
        if(data[i].categories[0]=='Mens')
      {
        // console.log("Assumption is correct");
        // this.women=data[i];
        this.men.push(data[i]);
       
      }
      }
      console.log(this.men);
      
      
      
    })
  }

  addcart(item:any)
  {
    // console.log("The value of the Product id is :"+item);
    this.add.putcart({userId:this.id,productId:item,quantity:1}).subscribe(result=>{
      this.success=true;
      console.log("The item is added to Cart ");
    })
  }
  buy(item:any)
  {
    this.productId=item._id;
    this.price=item.price;
    this.addcheck=true;
    // console.log(item)
    // this.add.buyproduct({userId:this.id,products:[{productId:item._id,price:item.price,quantity:1}],address:"Balasore"}).subscribe(result=>{
    //   console.log("Item Buy Succesfully");
    // })
    
  }
  addaddress()
  {

    this.add.buyproduct({userId:this.id,products:[{productId:this.productId,price:this.price,quantity:1}],address:this.createaddress.value.address,pstatus:"Done"}).subscribe(result=>{
      this.router.navigateByUrl('/success');
      console.log("Item Buy Succesfully");
      })

  }

 
}

