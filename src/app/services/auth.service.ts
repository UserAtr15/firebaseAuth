import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  async register(email: string, password: string) {
    try {
      return await this.auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("Error en registro: ", err);
      return null;
    }
  }

  async login(email: string, password: string) {
    try {
      return await this.auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("Error en login: ", err);
      return null;
    }
  }


  async loginWithGoogle(email: string, password: string) {
    try {
      return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log("Error en login con google: ", err);
      return null;
      }
  }

  getUserLogged() {
    return this.auth.authState;
  }

  logout() {
    this.auth.signOut();
  }

}
