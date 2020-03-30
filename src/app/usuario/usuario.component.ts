import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuariosService]
})
export class UsuarioComponent implements OnInit {

  public user;
  constructor(private _servicio: UsuariosService) { 
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('usuario'));
  }


}
