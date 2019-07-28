import { Component} from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public user: User;

  errorMsg: string = '';

  constructor(private loginService: UsuarioService, private router: Router) {
    this.user = new User();
  }

  validateLogin() {
    this.errorMsg = '';
    if (this.user.usuario && this.user.contrasena ) {
      
      this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        localStorage.setItem('idUsuario', result['_id']);
        this.router.navigate(['/home']);
      }, error => {
        console.log('error is ', error);
        this.errorMsg = 'Usuario no autorizado.';
      });
    } else {
      alert('Ingresa usuario y contraseña');
    }
  }

}