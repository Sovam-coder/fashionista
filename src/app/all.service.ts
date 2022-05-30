
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http:HttpClient) { }
  
  createstudent(data: any)
  {
    
    let url="https://fashionista-sovam.herokuapp.com/login";
    return this.http.post(url,data);

  }
  registerstudent(data:any)
  {
    let url="https://fashionista-sovam.herokuapp.com/register";
    return this.http.post(url,data);
  }
  getitem()
  {
    
    let url="https://fashionista-sovam.herokuapp.com/items";
    return this.http.get(url);

  }
  putcart(data: any)
  {
    
    let url="https://fashionista-sovam.herokuapp.com/cart";
    return this.http.post(url,data);

  }
  buyproduct(data:any)
{
  let url="https://fashionista-sovam.herokuapp.com/order";
  return this.http.post(url,data);
}
addproduct(data:any)
  {
    let url="https://fashionista-sovam.herokuapp.com/create/new";
    return this.http.post(url,data);
  }
  cart(data:any)
  {
    let url="https://fashionista-sovam.herokuapp.com/cartitem/${data}";
    return this.http.get(url); 
    
  }
  alluser()
  {
    let url="https://fashionista-sovam.herokuapp.com/users";
    return this.http.get(url);
  }
  allproductshow()
  {
    let url="https://fashionista-sovam.herokuapp.com/items";
    return this.http.get(url);
  }
  allorders()
  {
    let url="https://fashionista-sovam.herokuapp.com/orders";
    return this.http.get(url);
  }
  modifystatus(data:any)
  {
    let url="https://fashionista-sovam.herokuapp.com/orders/update";
    return this.http.put(url,{orderId:data});
  }
  // productdelete(data:any)
  // {
  //   let url="http://localhost:3000/deleteitem";
  //   return this.http.delete(url,{id:data});
  // }
  productdelete(id:any)
  {
    let url="https://fashionista-sovam.herokuapp.com/deleteitem";
    return this.http.delete(`${url}/${id}`);
  }
  deletecart(data:any)
  {
    let url="https://fashionista-sovam.herokuapp.com/cartitems";
    return this.http.delete(`${url}/${localStorage.getItem('userId')}/${data}`,{responseType: 'text'})
  }
}
