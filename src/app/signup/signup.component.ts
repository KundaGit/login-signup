import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // public signUpForm:formGroup
   signUpform!:FormGroup
  formBuilder: any;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router){

  }
  ngOnInit(): void {
    this.signUpform=this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']

    })
  }
  signUp(){
    // console.log(result)
    this.http.post<any>("http://localhost:3000/signupUser",this.signUpform.value)
    .subscribe(res=>{
      console.log(res)
      alert("signup succesfull");
    this.signUpform.reset()
      this.router.navigate(['login'])
    },
    
    // err=>{
    //   alert("Something went wrong" )

    // }
    )
  
  }

}
