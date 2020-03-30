import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import {Router} from '@angular/router';
import {UsuariosService} from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public estado;

  constructor(private _servicio:UsuariosService, private router: Router){}

  obternerStorage(){
    this.estado = localStorage.getItem('estado')
  }
  
  canActivate(){
    if(this.estado== 'false'){
      console.log('No logueado')
      this.router.navigate(['/home']);
      return false
    }
    return true
  }
  
}
