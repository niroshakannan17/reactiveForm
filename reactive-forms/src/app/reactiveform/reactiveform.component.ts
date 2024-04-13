import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {

  contryData:Contry[]=[
    new Contry("1","India"),
    new Contry("2","USA"),
    new Contry("3","Canada"),
    new Contry("4","England")

  ]
 contactForm = new FormGroup({
  firstName: new FormControl("",[Validators.required,Validators.minLength(7)]),
  lastNmae: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
  email: new FormControl(),
  phoneNumber : new FormControl(),
  gender: new FormControl(),
  isMarried : new FormControl("",[Validators.requiredTrue]),
  country: new FormControl()
 })

 onSubmit(){
  console.log(this.contactForm);
 }

 get firstname(){
  return this.contactForm.get("firstName");
 }
 get lastname(){
  return this.contactForm.get("lastNmae");
 }
 get ismarried(){
  return this.contactForm.get("isMarried");
 }
}

class Contry{
 
  id:string="";
  name:string = "";

  constructor(id:string,name:string)
  {
    this.id= id;
    this.name = name;
  }
  
}
