import { Injectable, Output, EventEmitter } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {User} from './Models/userModels'


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public user;


  constructor(private http: HttpClient) {
    this.sendUser()
   }

  trueLocalStorage(){
    localStorage.setItem( 'estado','true')
  }

  falseLocalStorage(){
    localStorage.setItem( 'estado','false')
  }
  clearStorage(){
    localStorage.clear()
  }

  getUsuarios(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getUser(user){
    this.user = user
    console.log(this.user)
    return user;
    }

  sendUser(){
    console.log(this.user)
    return this.user
  }




}
