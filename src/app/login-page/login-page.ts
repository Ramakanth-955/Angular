import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

constructor (private router : Router){}


  onLogin(name: string , password : any) {
    console.log("Hi My name is : " , name)
    console.log("password", password)

    if (name == 'Rama123' && password == 'Qwert@123') {
      this.router.navigate(['/event']);
    }
    else if (name == '' && password == '') {
      alert("Please enter username and password")
    }
    else{
      alert("Invalid credentials..")
    }

  }


}


