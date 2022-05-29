import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import {AllService} from '../all.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  createstudent=new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')  
    
  })

  constructor(private add:AllService ,private router:Router) { }

  ngOnInit(): void {
  }

  addstudent()
  {
    if(this.createstudent.value.email=='admin' && this.createstudent.value.password=='admin123')
        {
          this.router.navigateByUrl('/admindashboard');
        }
        else{
          
          this.add.createstudent(this.createstudent.value).subscribe((result)=>{
      
            console.log(result)
            
            this.createstudent.reset({});
            localStorage.setItem("userId",result['_id']);
            localStorage.setItem("username",result['username']);
            this.router.navigateByUrl('/home');
        
          
        })

        }
    
  }

}
