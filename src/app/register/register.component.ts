import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import {AllService} from '../all.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}) 
export class RegisterComponent implements OnInit {
  regstudent=new FormGroup({
    username:new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')  
    
  })
  constructor(private add:AllService ,private router:Router) { }

  ngOnInit(): void {
  }

  register()
  {
    this.add.registerstudent(this.regstudent.value).subscribe((result)=>{
      this.regstudent.reset({});
      this.router.navigateByUrl('/');
    })
  }

}
