import { baseurl } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http:HttpClient) { }
  
  createstudent(data: any)
  {
    
    let url=`${baseurl}/login`;
    return this.http.post(url,data);

  }
  registerstudent(data:any)
  {
    let url=`${baseurl}/register`;
    return this.http.post(url,data);
  }
  getitem()
  {
    
    let url=`${baseurl}/items`;
    return this.http.get(url);

  }
  putcart(data: any)
  {
    
    let url=`${baseurl}/cart`;
    return this.http.post(url,data);

  }
  buyproduct(data:any)
{
  let url=`${baseurl}/order`;
  return this.http.post(url,data);
}
addproduct(data:any)
  {
    let url=`${baseurl}/create/new`;
    return this.http.post(url,data);
  }
  cart(data:any)
  {
    let url=`${baseurl}/cartitem/${data}`;
    return this.http.get(url); 
    
  }
  alluser()
  {
    let url=`${baseurl}/users`;
    return this.http.get(url);
  }
  allproductshow()
  {
    let url=`${baseurl}/items`;
    return this.http.get(url);
  }
  allorders()
  {
    let url=`${baseurl}/orders`;
    return this.http.get(url);
  }
  modifystatus(data:any)
  {
    let url=`${baseurl}/orders/update`;
    return this.http.put(url,{orderId:data});
  }
  // productdelete(data:any)
  // {
  //   let url="http://localhost:3000/deleteitem";
  //   return this.http.delete(url,{id:data});
  // }
  productdelete(id:any)
  {
    let url=`${baseurl}/deleteitem`;
    return this.http.delete(`${url}/${id}`);
  }
  deletecart(data:any)
  {
    let url=`${baseurl}/cartitems`;
    return this.http.delete(`${url}/${localStorage.getItem('userId')}/${data}`,{responseType: 'text'})
  }
}
