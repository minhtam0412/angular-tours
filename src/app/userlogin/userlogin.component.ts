import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  formdata: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {

    this.formdata = new FormGroup({
      uname: new FormControl("admin", Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      passwd: new FormControl("123456", this.passwordvalidation)
    });
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 6) {
      return { "passwd": false };
    }
  }
  onClickSubmit(data) {
    console.log(data.uname);
    if (data.uname == "admin" && data.passwd == "123456") {
      alert("Login Successful");
      this.router.navigate(['app-mainpage'])
    }
  }

}
