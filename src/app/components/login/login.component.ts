import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    password: '',
  }

  ngOnInit(): void {
  }

  constructor(private authService: AuthService, private router: Router) { }

  Ingresar() {
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(user => {
      console.log("Inicio de sesion correcto ", user);
      if(!user) {
        alert("El usuario no existe o los datos fueron incorrectos");
        return;
      };
    }).catch(err=>{
      console.log(err)
    })
  }

  IngresarConGoogle() {
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then(user => {
      console.log("Inicio de sesion correcto", user);
    })
  }

  logout() {
    this.authService.logout();
  }

}

