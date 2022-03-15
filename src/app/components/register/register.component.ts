import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  usuarios: any;
  usuario = {
    email: '',
    password: '',
    name: ''
  }

  ngOnInit() {
    this.database.getAll("users").subscribe((usuariosRef) => {
      console.log("usuariosRef: ", usuariosRef);
      this.usuarios = usuariosRef.map(userRef => {
        let usuario: any = userRef.payload.doc.data();
        usuario['id'] = userRef.payload.doc.id;
        return usuario;
      });
      console.log(this.usuarios)
    })
  }
  constructor(private authService: AuthService, private database: DatabaseService, private router: Router) { }

  registrarse() {
    const { email, password } = this.usuario;
    this.authService.register(email, password).then(user => {
      console.log("ususario registrado: ", user);
      let lista = [...this.usuarios];
      let existe = lista.find(user => user.email == email);

      if (!existe) {
        console.log("Usuario registrado correctamente")
      };
    }).catch(err => {
      console.log(err)
    })
  }


}
