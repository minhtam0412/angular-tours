import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  formdata: FormGroup;
  cutomerdata = [];

  constructor(private http: Http) { }

  ngOnInit() {
    // this.formdata = new FormGroup({
    //   name: new FormControl("", Validators.compose([
    //     Validators.required,
    //     Validators.minLength(3)
    //   ])),
    //   phone: new FormControl("", Validators.compose([
    //     Validators.required,
    //     Validators.minLength(3)
    //   ])),
    //   address: new FormControl(""),
    //   message: new FormControl("")
    // });
  }
  // onClickSubmit(data) {
  //   document.getElementById("custtable").style.display = "";
  //   var row = {
  //     "name": data.name,
  //     "phone": data.phone,
  //     "address": data.address,
  //     "message": data.message
  //   };

  //   this.cutomerdata.push(row);
  //   console.log(this.cutomerdata);
  // }
}
