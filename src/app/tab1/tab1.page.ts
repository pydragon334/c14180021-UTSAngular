import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public dataservice : DataService) {}

  Judul : string;
  Isi : string;
  Tanggal : string;

  simpan(){
    this.dataservice.simpan(this.Judul, this.Isi, this.Tanggal)
  }
}
