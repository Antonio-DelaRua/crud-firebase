import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private firestore: AngularFirestore) { }


  agregarCoche(car:any): Promise<any> {
    return this.firestore.collection('coches').add(car);
  }

  getCar(): Observable<any>{
    return this.firestore.collection('coches', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminarCoche(id:string): Promise<any> {
    return this.firestore.collection('coches').doc(id).delete();
  }


}
