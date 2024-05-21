import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-detail',
  templateUrl: './register-detail.component.html',
  styleUrls: ['./register-detail.component.css']
})
export class RegisterDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //type script na badha variable ne html ma connect karavi sake
  registerForm = new FormGroup({
    firstname : new FormControl(""),
    lastname : new FormControl(""),
    email : new FormControl(""),
    mobile : new FormControl(""),
    gender : new FormControl(""),
    pwd : new FormControl(""),
    rpwd : new FormControl("")
  });

  registerSubmited(){
    console.log(this.registerForm);
  }
}
