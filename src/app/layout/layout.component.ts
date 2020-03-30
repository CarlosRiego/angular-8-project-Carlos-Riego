import { Component, OnInit } from '@angular/core';
import{UsuariosService} from '../usuarios.service'

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public estado;

  constructor(private _servicio:UsuariosService) { }

  ngOnInit(): void {
    this.obtenerStorage();
  }
  
  obtenerStorage(){
    this.estado = localStorage.getItem('estado') }
}
