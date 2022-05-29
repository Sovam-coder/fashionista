import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{AllService} from '../all.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  addcheck :boolean=false;
  public id : any;
  public totalbill:number=0;
  public productlist:any=[];
 
  displayproduct:any=[];
  createaddress=new FormGroup({
    address: new FormControl('') 
  })
  constructor(private carti:AllService) { }

  ngOnInit(): void {

    this.id=localStorage.getItem('userId');
    // console.log(this.id)
    this.carti.cart(this.id).subscribe(data=>{
      // console.log(data);
      // console.log(data['_id']);
      // console.log(data['userId'])
      // console.log(data['bill'])
      this.productlist=data['products'];
      this.totalbill=data['bill'];
      // console.log(this.productlist[0].productId._id)
      // console.log(this.productlist);
      // for(var i=0;i<this.productlist.length;i++)
      // this.messageList.push(this.productlist)
      // this.messageList.push({productId:this.productlist[i].productId,price:this.productlist[i].price,quantity:1})
  
    })
  }

buy()
{
  this.addcheck=true;
}

addaddress()
{

  for(var i=0;i<this.productlist.length;i++)
  {
   
  this.carti.buyproduct({userId:this.id,products:[{productId:this.productlist[i].productId._id,price:this.productlist[i].price,quantity:1}],address:this.createaddress.value.address,pstatus:"Pending"}).subscribe(result=>{
    console.log("Item Buy Succesfully");
  })
 
  }
  //router Code
}
deleteproduct(item:any)
{
this.carti.deletecart(item).subscribe((data)=>{
  console.log("Deleted From Cart Succesfully");
  location.reload();
})
}
}
