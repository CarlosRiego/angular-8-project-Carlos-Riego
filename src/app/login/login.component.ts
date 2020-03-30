import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuariosService]
})
export class LoginComponent implements OnInit {

  public estado;
  public user = 'test';
  public pass = 'Ayi+2020';
  public inputUser;
  public inputPass;

 

  constructor(private _servicio: UsuariosService, private _router: Router) { }

  ngOnInit(): void {
    this._servicio.falseLocalStorage();
    this.obtenerStorage()
  }

  OnSubmit(){}

  obtenerStorage(){
     this.estado = localStorage.getItem('estado')
  }

  comprobarLogin(inputUser,inputPass){


   if (inputUser.value == this.user && inputPass.value == this.pass){
     this._servicio.trueLocalStorage();
     this.obtenerStorage();
     this._router.navigate(['/usuarios'])

   }
   else{

     this._servicio.falseLocalStorage();
     this.obtenerStorage();
     this._router.navigate(['/error'])


   }
   }
}
