import { Component, OnInit } from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {LoginSer} from '../servicios/loginSer.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
 public  pInputText = 'jose';
  public pPassword = 'JOSE123';
  private loginServicio: LoginSer;


public isOK = false;

  doLogin() {

    console.log(this.loginServicio.getToken(this.pInputText, this.pPassword));

    this.isOK = true;

  }


  validarForm() {

    if ((this.pInputText === '') || (this.pPassword === '')) {



    }


  }

  constructor(private loginServ: LoginSer) {
    this.loginServicio = loginServ;
  }

  ngOnInit() {
  }

}
