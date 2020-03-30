import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService} from '../usuarios.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {
  public user;
  public users;
  public prueba;
  constructor(private _servicio: UsuariosService) { 
  }

  ngOnInit() {
    this._servicio.getUsuarios()
     .subscribe(
       (data) => {
         this.users = data;
      },
       (error) => {
         console.error(error);
       }
    );
  }

  botonTrue(i){
    
    this.user = i;
    localStorage.setItem('usuario', JSON.stringify(this.user));  
  }

  borrarUser(o){

    this.users.splice(0,1)
    return this.users



  }


}
