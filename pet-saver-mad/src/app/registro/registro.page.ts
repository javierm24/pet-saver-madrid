import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  public user: User;

  errorMsg: string = '';

  constructor(private loginService: UsuarioService, private router: Router) {
    this.user = new User();
  }

  validateRegistro() {
    this.errorMsg = '';
    if (this.user.usuario && this.user.contrasena && this.user.email ) {
      
      this.loginService.validateRegistro(this.user).subscribe(result => {
        console.log('result is ', result);
        localStorage.setItem('idUsuario', result['_id']);
        this.router.navigate(['/home']);
      }, error => {
        console.log('error is ', error);
        this.errorMsg = 'Error en registro, intente de nuevo';
      });
    } else {
      alert('Ingresa usuario, correo y contraseña');
    }
  }

}