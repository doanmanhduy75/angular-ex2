import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  username = "duy";
  password = "1";
  name = '';
  pass = '';

  onClickLogin(){
    console.log(this.name);
    console.log(this.pass);
    if(this.name == this.username && this.pass == this.password){
      this.router.navigateByUrl("/home");
    }
  }

  
}
