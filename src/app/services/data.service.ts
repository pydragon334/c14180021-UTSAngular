import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    afs : AngularFirestore
  ) {
    this.isiDataColl = afs.collection('dataNote');
    this.isiData = this.isiDataColl.valueChanges();
  }
  isiData : Observable<data[]>;
  isiDataColl : AngularFirestoreCollection<data>;
  
  public async simpan(Judul :string, Isi : string, Tanggal : string){
    this.isiDataColl.doc(Judul).set({
      judul : Judul,
      isi : Isi,
      tanggal : Tanggal
    });
  }

}

interface data{
  judul : string,
  isi : string,
  tanggal : string
}