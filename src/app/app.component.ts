import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormArray} from '@angular/forms';
import { Validators } from '@angular/forms';
import {checkForbiddenName} from '../app/custom.validation'
import {checkPassoword} from '../app/password.validation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  myform:FormGroup

  get email(){

    return this.myform.get('email');



  }

  get alternateEmail(){

    return this.myform.get('alternative') as FormArray;



  }

  addAlternateEmail(){
    console.log(this.alternateEmail.controls);
    return this.alternateEmail.push(this.ok.control(''));

  }


  constructor(private ok: FormBuilder) {}
  ngOnInit(): void {
    this.myform = this.ok.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(8),checkForbiddenName(/admin/)]],
      password:[''],
      subscription:[false],
      confirmpassword:[''],
      email: [''],
      alternative:this.ok.array([]),
      address: this.ok.group({
        city: [''],
        zip: [''],
      }),
    },
    
    {validators:checkPassoword});


    this.myform.get('subscription').valueChanges.subscribe(checkvalue => {
    
       const email = this.myform.get('email');

       if(checkvalue){

        email.setValidators(Validators.required)
       }else{

        email.clearValidators()
       }
       email.updateValueAndValidity()

    })
  
  
  }
  


  get username(){
    return this.myform.get('name');
  }
  

  formSubmitted() {
    console.log(this.myform.value);
  }
}
