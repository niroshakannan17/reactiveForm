import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  firstName: new FormControl(),
  lastNmae: new FormControl(),
  email: new FormControl(),
  phoneNumber : new FormControl(),
  gender: new FormControl(),
  isMarried : new FormControl(),
  country: new FormControl()
 })

 onSubmit(){
  console.log(this.contactForm.value);
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
