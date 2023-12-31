import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  constructor(private fb: FormBuilder, private http:HttpClient, private route:Router) {

  }
  ngOnInit(): void {
this.loginForm=this.fb.group({
email:[''],
password:['']
})
  }

  login(){
this.http.get<any>("http://localhost:3000/signupUser")
.subscribe(res=>{
  const user=res.find((a:any)=>{
    return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password 
  })
  if(user){
    alert("Login Successfully")
    this.loginForm.reset()
    this.route.navigate(['dashboard'])
  }else{
    alert("user not found")
  }
},err=>{
  alert("Something went wrong")
})
  }
}
