import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor( private firestore: AngularFirestore) { }

  public create(collection: string, data: any) {
    return this.firestore.collection(collection).add(data);
  }

  public getById(coleccion: string, id: string) {
    return this.firestore.collection(coleccion).doc(id).snapshotChanges();
  }

  public getAll(coleccion: string) {
    return this.firestore.collection(coleccion).snapshotChanges();
  }

  public update(coleccion: string, data: any, id: string) {
    return this.firestore.collection(coleccion).doc(id).set(data);
  }

  public delete(collection: string, id: string) {
    return this.firestore.collection(collection).doc(id).delete();
  }

  public createWithCustomId(collection: string, customId: string, data: any) {
    this.firestore.collection(collection).doc(customId).set(data);
  }
}
